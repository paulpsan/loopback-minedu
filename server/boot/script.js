'use strict';

module.exports = function(app) {
  let User = app.models.usuario;
  let Role = app.models.Role;
  let RoleMapping = app.models.RoleMapping;

  // RoleMapping.belongsTo(User);
  // User.hasMany(RoleMapping, {foreignKey: 'principalId'});
  // Role.hasMany(User, {through: RoleMapping, foreignKey: 'roleId'});
  // User.create(
  //   [{username: 'admin', email: 'admin@admin.com', password: 'admin123'}],
  //   function(err, users) {
  //     if (err) throw err;
  //     console.log('Created users:', users);

  //     // create the admin role
  //     Role.create(
  //       [{
  //         name: 'admin',
  //         description: 'Administrador del Sistema',
  //       },
  //       {
  //         name: 'director',
  //         description: 'Director de unidad educativa',
  //       },
  //       {
  //         name: 'invitado',
  //         description: 'Usuario Invitado',
  //       },
  //       {
  //         name: 'funcionario',
  //         description: 'Funcionario del Ministerio',
  //       },
  //       ],
  //       function(err, roles) {
  //         if (err) throw err;
  //         // make bob an admin
  //         roles[0].principals.create(
  //           {
  //             principalType: RoleMapping.USER,
  //             principalId: users[0].id,
  //           },
  //           function(err, principal) {
  //             if (err) throw err;
  //             console.log('Created principal:', principal);
  //           }
  //         );
  //       }
  //     );
  //   }
  // );
};
