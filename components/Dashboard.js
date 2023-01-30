Vue.component("dashboard-admin", {
  template: ` <div>
<div class="sidebar">
  <div class="user__information">
      <div class="user__logo">
          <i class='bx bx-user-circle userlogo'></i>
          <div class="user_inf">
            <div class="profile">
              <p>{{usuario}} <span>{{rol}}</span></p>
          </div>
              <div class="user__username">

              </div>
              <div class="user__fullname">


              </div>
          </div>
      </div>
      <div id="navMenu">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>
  <ul class="nav__list">
      <li>
          <a href="#" class="menufoc active" onclick="mostrarSesion();">
              <i class='bx bx-intersect'></i>
              <span class=" links__name">Salarios Base</span>
          </a>
          <span class="tooltip ">Salarios Base</span>
      </li>
      <li>
          <a href="#" class="menufoc active" onclick="mostrarData();">
              <i class='bx bx-data'></i>
              <span class=" links__name ">Log Database</span>
          </a>
          <span class="tooltip ">Log Database</span>
      </li>
      <li>
          <a class="menufoc active" name="cerrarSesion">
              <span class="links__name "><a class="btn second" href="">SALIR</a></span>
          </a>
          <span class="tooltip">Cerrar sesión</span>
      </li>
  </ul>
</div>
<div class="header__cont ">
</div>
<div class="header__cont jeje">
  
</div>
<main>
  <div class="test">
      <h2 class="table-title" id="title-sesion">Salarios Base</h2>
      

      <div class="login-page">
          <div class="cont-login">
              <div class="img-login"></div>
                  <form action="" method="post" id="filter" class="form">
                      <input type="text" id="cargo" name="cargo" placeholder="Cargo" />
                      <input type="text" id="salario" name="salario" placeholder="Salario a ingresar" />
                      <button type="submit">GUARDAR</button>
                  </form>
          </div>
      </div>


      <div class="container-table " id="idlogSes">
          <table class="tableSesion">

              <table class="table_">
                  <thead>
                      <tr>
                          <th>Administrador</th> 
                          <th>Secretario</th>
                          <th>Vendedor</th>
                          <th>Ensamblador</th>

                      </tr>
                  </thead>
                  <tbody>
                      <tr style="color: #FFF;">

                          <td align="left">$1.459.340=</td>
                          <td align="left">$1.459.340=</td>
                          <td align="left">$1.459.340=</td>
                          <td align="left">$1.459.340=</td>
                      </tr>
                  </tbody>

              </table>
            </table>
      </div>
  </div>
  <div>

      <h2 class="table-title tbl-logdb" id="title-database">Log Database</h2>
      <!-- <div class="container-table-database " id="idlogData "> -->
      <div class="container-table-database" id="idlogData" style="padding-left: 500px;">
          <table class="tableSesion">
              <table class="table_">
                  <thead>
                      <tr>
                          <th>ID </th>
                          <th>Nombre Tabla</th>
                          <th>Accion</th>
                          <th>Descripcion</th>
                          <th>Fecha</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr style="color: #FFF;">
                          <td>frgdv
                          </td>
                          <td>
                          </td>
                          <td>
                          </td>
                          <td>
                          </td>
                          <td>
                          </td>
                          </td>
                      </tr>
                  </tbody>

              </table>
              </table>
      </div>
  </div>

</main>













    <div v-if="rol=='Admin'">
    </div>
    <div v-else-if="rol=='Secretario'">Secretario {{usuario}}</div>
    <div v-else-if="rol=='Vendedor'">Vendedor {{usuario}}</div>
    <div v-else-if="rol=='Ensamblador'" @click="quieroDarClick">Ensamblador {{usuario}}</div>

  </div>
  `,
  data() {
    return {
      rol: localStorage.getItem("rol"),
      usuario: localStorage.getItem("nombre"),
    };
  },
  methods: {
    quieroDarClick() {},
  },
});
