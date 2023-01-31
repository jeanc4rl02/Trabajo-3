Vue.component("log-in", {
  template: `<div class="login-page">
      <div class="cont-login">
        <div class="img-login"></div>
        <div class="form">
          <form method="post" class="register-form">
            <section class="banner-login">
              <div
                class="container d-flex justify-content-start flex-column mt-5 pt-5"
              >
                <div class="contenedor-title-principal-2">
                  <span class="title-principal-2" id="titulo-albumes"
                    >Iniciar Sesion</span
                  >
                </div>
              </div>
            </section>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p class="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form method="post" id="filter" class="login-form">
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              v-model="usuarioIngresado"
            />
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Contraseña"
              v-model="contraseniaIngresada"
            />
            <p v-if="error">Usuario y/o contraseña incorrectos.</p>
            <button type="submit" @click.prevent="verificarUsuario">Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </div>`,
  data() {
    return {
      usuarios: [
        {
          rol: "Admin",
          nombre: "Lady",
          apellido: "Rueda",
          usuario: "lady.rueda",
          contrasenia: "admin123",
        },
        {
          rol: "Secretario",
          nombre: "Juan",
          apellido: "Pérez",
          usuario: "juan.perez",
          contrasenia: "admin123",
        },
        {
          rol: "Vendedor",
          nombre: "María",
          apellido: "Gómez",
          usuario: "maria.gomez",
          contrasenia: "admin123",
        },
        {
          rol: "Ensamblador",
          nombre: "Mateo",
          apellido: "Bravo",
          usuario: "mateo.bravo",
          contrasenia: "admin123",
        },
      ],
      usuarioIngresado: "",
      contraseniaIngresada: "",
      error: false,
    };
  },

  methods: {
    verificarUsuario() {
      const validacionUsuario = this.usuarios.find(
        (user) => user.usuario == this.usuarioIngresado
      );
      const validacionContrasenia = this.usuarios.find(
        (user) => user.contrasenia == this.contraseniaIngresada
      );

      if (validacionContrasenia && validacionUsuario) {
        let persona = this.usuarios.filter(
          (user) => user.usuario == this.usuarioIngresado
        );
        console.log(persona[0].rol);
        localStorage.setItem("nombre", this.usuarioIngresado);
        localStorage.setItem("rol", persona[0].rol);
        console.log(localStorage.getItem("rol"));
        this.error = false;
        window.location = "../dashboard.html";
      } else {
        this.error = true;
      }
    },
  },
});
