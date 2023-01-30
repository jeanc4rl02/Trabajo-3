Vue.component("dashboard-admin", {
  template: `
  <div>

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
