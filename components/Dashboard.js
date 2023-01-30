Vue.component("dashboard-admin", {
  template: ` <div>
    <div class="sidebar">
      <div class="user__information">
          <div class="user__logo">
              <i class='bx bx-user-circle userlogo'></i>
              <div class="user_inf">
                <div class="profile">
                  <h3>{{usuario}}<span>{{rol}}</span></h3>
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
                <a href="index.html" class="menufoc active" @click="logout"">
                    <i class='bx bx-exit'></i>
                    <span class=" links__name ">Salir</span>
                </a>
                <span class="tooltip">Cerrar sesión</span>
            </li>
        
    </ul>
    </div>
  <div class="header__cont jeje"></div>


      <div v-if="rol=='Admin'">
            
        <div class="test">

        <h2 class="table-title" id="title-sesion">Salarios Base</h2>
              <div class="login-page">
                <div class="cont-login">
                  <div class="img-login"></div>
                      <form action="" method="post" id="filter" class="form">

                          <select name="cargo" v-model="cargoIngresado">
                            <option value="admin">Administrador</option>
                            <option value="secretario">Secretario</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="ensamblador">Ensamblador</option>
                          </select>
                          <input type="text" id="salario" name="salario" placeholder="Salario a ingresar" v-model="salarioIngresado"/>
                          <button type="submit" @click.prevent="asignarSalario">GUARDAR</button>
                      </form>
                </div>
              </div>
              <div class="container-table" id="idlogSes">
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
                          <td align="left">$ {{salarioAdmin}}</td>
                          <td align="left">$ {{salarioSecretario}}</td>
                          <td align="left">$ {{salarioVendedor}}</td>
                          <td align="left">$ {{salarioEnsamblador}}</td>
                      </tr>
                  </tbody>

              </table>
            </table>
          </div>
        </div>
        <div class="test">
        <h2 class="table-title" id="title-sesion">Cantidad de Zapatos/Zapatillas</h2>
          <div class="login-page">
            <div class="cont-login">
                <div class="img-login"></div>
                    <form action="" method="post" id="filter" class="form">
    
                        <select name="cantidadEnsamble" v-model="zapatoIngresado">
                          <option value="zapatos">Zapatos</option>
                          <option value="zapatillas">Zapatillas</option>
                        </select>
                        <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad Máxima" v-model="cantidadIngresada"/>
                        <input type="text" id="precio" name="precio" placeholder="Precio de ensamble" v-model="precioIngresado"/>
                        <button type="submit" @click.prevent="asignarZapatos">GUARDAR</button>
                    </form>
            </div>
          </div>
        <div class="container-table" id="idlogSes">
            <table class="tableSesion">
                <table class="table_">
                    <thead>
                        <tr>
                            <th>Tipo de calzado</th> 
                            <th>Cantidad Máxima</th>
                            <th>Precio de Ensamble</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="color: #FFF;">
                            <td align="left">Zapatos</td>
                            <td align="left">$ {{zapatosMax}}</td>
                            <td align="left">$ {{precioZapatos}}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr style="color: #FFF;">
                            <td align="left">Zapatillas</td>
                            <td align="left">$ {{zapatillasMax}}</td>
                            <td align="left">$ {{precioZapatillas}}</td>
                        </tr>
                    </tbody>
    
                </table>
              </table>
        </div>
      </div>
      <div class="test">
      <h2 class="table-title" id="title-sesion">Comisión</h2>
      <div class="login-page">
          <div class="cont-login">
              <div class="img-login"></div>
                  <form action="" method="post" id="filter" class="form">
                      <input type="text" id="comision" name="comision" placeholder="Comisión" v-model="comisionIngresada"/>
                      <button type="submit" @click.prevent="asignarComision">GUARDAR</button>
                  </form>
          </div>
      </div>
  
  
      <div class="container-table" id="idlogSes">
          <table class="tableSesion">
  
              <table class="table_">
                  <thead>
                      <tr>
                          <th>Comisión asignada al vendedor</th> 
                      </tr>
                  </thead>
                  <tbody>
                      <tr style="color: #FFF;">
                          <td align="left">$ {{comisionFinal}}</td>
                      </tr>
                  </tbody>
  
              </table>
            </table>
      </div>
    </div>

      </div>   
      <div v-else-if="rol=='Secretario'">
      <div class="test">
      <h2 class="table-title" id="title-sesion">Salario:</h2>
      <div class="login-page">
          <div class="cont-login">
              <div class="img-login"></div>
                  <form action="" method="post" id="filter" class="form">
                      <input type="text" id="comision" name="comision" placeholder="Ingrese las horas extra" v-model="horasExtra"/>
                      <button type="submit" @click.prevent="calcularSalarioSecretario">GUARDAR</button>
                  </form>
          </div>
      </div>
  
  
      <div class="container-table" id="idlogSes">
          <table class="tableSesion">
  
              <table class="table_">
                  <thead>
                      <tr>
                          <th>Salario Total</th> 
                      </tr>
                  </thead>
                  <tbody>
                      <tr style="color: #FFF;">
                          <td align="left">$ {{salarioTotalSecretario}}</td>
                      </tr>
                  </tbody>
  
              </table>
            </table>
      </div>
    </div>
      </div>

      <div v-else-if="rol=='Vendedor'">
      <div class="test">
      <h2 class="table-title" id="title-sesion">Salario:</h2>
      <div class="login-page">
          <div class="cont-login">
              <div class="img-login"></div>
                  <form action="" method="post" id="filter" class="form">
                  <select name="cantidadEnsamble" v-model="zapatoIngresado">
                          <option value="zapatos">Zapatos</option>
                          <option value="zapatillas">Zapatillas</option>
                        </select>
                      <input type="text" id="comision" name="comision" placeholder="Cantidad vendida" v-model="numeroVentas"/>
                      <button type="submit" @click.prevent="calcularSalarioVendedor">GUARDAR</button>
                  </form>
          </div>
      </div>
  
  
      <div class="container-table" id="idlogSes">
          <table class="tableSesion">
  
              <table class="table_">
                  <thead>
                      <tr>
                          <th>Salario Total</th> 
                      </tr>
                  </thead>
                  <tbody>
                      <tr style="color: #FFF;">
                          <td align="left">$ {{salarioTotalVendedor}}</td>
                      </tr>
                  </tbody>
  
              </table>
            </table>
      </div>
    </div>
      
      </div>
      <div v-else="rol=='Ensamblador'" @click="quieroDarClick">Ensamblador {{usuario}}</div>
  </div>
  `,
  data() {
    return {
      rol: localStorage.getItem("rol"),
      usuario: localStorage.getItem("nombre"),
      // datos del salario
      cargoIngresado: "",
      salarioIngresado: "",
      salarioAdmin: localStorage.getItem("salarioAdmin"),
      salarioSecretario: localStorage.getItem("salarioSecretario"),
      salarioVendedor: localStorage.getItem("salarioVendedor"),
      salarioEnsamblador: localStorage.getItem("salarioEnsamblador"),
      // cantidad de zapatos/zapatillas
      zapatoIngresado: "",
      cantidadIngresada: null,
      precioIngresado: null,

      zapatosMax: localStorage.getItem("maxZapatos"),
      precioZapatos: localStorage.getItem("precioZapatos"),

      zapatillasMax: localStorage.getItem("maxZapatillas"),
      precioZapatillas: localStorage.getItem("precioZapatillas"),
      // comisión

      comisionIngresada: null,
      comisionFinal: localStorage.getItem("comision"),

      // Secretario
      horasExtra: null,
      salarioTotalSecretario: localStorage.getItem("salarioTotalSecretario"),

      // Vendedor
      numeroVentas: null,
      precioZapatos: 200000,
      precioZapatillas: 400000,
      salarioTotalVendedor: localStorage.getItem("salarioTotalVendedor"),
      totalZapatosVendidos: null,
      totalZapatillasVendidas: null,
      totalVentasRealizadas: null,
      subsidioTransporte: 140000,
    };
  },
  methods: {
    asignarSalario() {
      switch (this.cargoIngresado) {
        case "admin":
          this.salarioAdmin = this.salarioIngresado;
          localStorage.setItem("salarioAdmin", this.salarioAdmin);
          break;
        case "secretario":
          this.salarioSecretario = this.salarioIngresado;
          localStorage.setItem("salarioSecretario", this.salarioAdmin);
          break;
        case "vendedor":
          this.salarioVendedor = this.salarioIngresado;
          localStorage.setItem("salarioVendedor", this.salarioAdmin);
          break;
        case "ensamblador":
          this.salarioEnsamblador = this.salarioIngresado;
          localStorage.setItem("salarioEnsamblador", this.salarioAdmin);
          break;
        default:
          break;
      }
    },
    asignarZapatos() {
      switch (this.zapatoIngresado) {
        case "zapatos":
          this.zapatosMax = this.cantidadIngresada;
          this.precioZapatos = this.precioIngresado;
          localStorage.setItem("maxZapatos", this.zapatosMax);
          localStorage.setItem("precioZapatos", this.precioZapatos);
          break;
        case "zapatillas":
          this.zapatillasMax = this.cantidadIngresada;
          this.precioZapatillas = this.precioIngresado;
          localStorage.setItem("maxZapatillas", this.zapatillasMax);
          localStorage.setItem("precioZapatillas", this.precioZapatillas);
          break;
        default:
          break;
      }
    },
    asignarComision() {
      this.comisionFinal = this.comisionIngresada;
      localStorage.setItem("comision", this.comisionFinal);
    },
    calcularSalarioSecretario() {
      this.salarioTotalSecretario=Number(this.salarioSecretario)+((Number(this.salarioSecretario) / 240) * 1.8 * Number(this.horasExtra));
      localStorage.setItem("salarioTotalSecretario", this.salarioTotalSecretario)
    },

    calcularSalarioVendedor() {
      switch (this.zapatoIngresado) {
        case "zapatos":
          this.totalZapatosVendidos = Number(this.numeroVentas) * Number(this.precioZapatos)
          break;
        case "zapatillas":
          this.totalZapatillasVendidas = Number(this.numeroVentas) * Number(this.precioZapatillas)
          break;
      }
      this.totalVentasRealizadas = Number(this.totalZapatosVendidos) + Number(this.totalZapatillasVendidas)
      if(this.totalVentasRealizadas > 5000000 && this.totalVentasRealizadas < 10000000){
        this.salarioTotalVendedor = Number(this.salarioVendedor) + ((Number(this.salarioVendedor) * 0.1) + this.subsidioTransporte);
      }else if(this.totalVentasRealizadas > 10000000){
        this.salarioTotalVendedor = Number(this.salarioVendedor) + ((Number(this.salarioVendedor) * 0.2) + this.subsidioTransporte);
      } else {
        this.salarioTotalVendedor = Number(this.salarioVendedor) + this.subsidioTransporte
      }
      localStorage.setItem("salarioTotalVendedor", this.salarioTotalVendedor)
    },

    logout() {
      localStorage.removeItem("rol");
      localStorage.removeItem("nombre");
    },
  },
});
