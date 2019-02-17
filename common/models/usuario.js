// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
'use strict';

module.exports = function(User) {
  User.observe('after save', function setRoleMapping(ctx, next) {
    if (ctx.instance) {
      if (ctx.isNewInstance) {
        var RoleMapping = User.app.models.RoleMapping;
        var Role = User.app.models.Role;
        RoleMapping.belongsTo(User);
        User.hasMany(RoleMapping, {foreignKey: 'principalId'});
        Role.hasMany(User, {through: RoleMapping, foreignKey: 'roleId'});
        var roleId = '5c68d64055813472292bb388'; // Director
        // var roleId = "5c68d63f55813472292bb386" // admin
        Role.findById(roleId, function(err, role) {
          if (err) { return console.log(err); }
          console.log(role.principals);
          role.principals.create(
            {
              principalType: RoleMapping.USER,
              principalId: ctx.instance.id,
            },
                      function(err, principal) {
                        if (err) throw err;
                        console.log('Created principal:', principal);
                      }
                    );
        });
      }
    }
    next();
  });
};
