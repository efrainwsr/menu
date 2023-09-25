<script setup>
  import { ref, onMounted,computed } from 'vue'
  import axios from 'axios'
  const url = 'https://bcv-apiv2.vercel.app/bcv';
  const urlMenu = 'https://bcv-apiv2.vercel.app/menu';

  const bcvPrice = ref(0);
  const menu = ref(0);
  const total = ref (0)
  const totalBs = ref (0)
  
   const obtenerBcv = onMounted( async ()=>{
   const { data } = await axios.get(url);
   bcvPrice.value = data;
  })

  const sumarAlTotal = (precio,precioBs) => {
    total.value += precio;
    totalBs.value += precioBs; 
  };

  const borrarCuenta = () =>{
    total.value=0;
    totalBs.value=0;
  };

   const getMenu = onMounted( async ()=>{
    const { data } = await axios.get(urlMenu);
    menu.value = data;
   })


      

</script>

<template>
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carta de Restaurante</title>
    <!--<link rel="stylesheet" href="estilos.css">-->
</head>

<body>
    <section id="menu">
        <h2>Menú</h2>
        <h3>TOTAL EN DOLARES: {{ total }}</h3>
        <h3>TOTAL EN BS: {{ totalBs.toFixed(2) }}</h3>
        <button @click="borrarCuenta">BORRAR</button>
        <table>
            <thead>
                <tr>
                    <th>Plato</th>
                    <th>Precio</th>
                    <th>Bs</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in menu">
                    <td>
                        <h4>{{item.nombre.toUpperCase()}} {{item.desc.toUpperCase()}}</h4>
                    </td>
                    <td>
                        <span>{{item.precio}} $</span>
                    </td>
                    <td class="alinear-derecha">
                        <span>{{item.precioBs}} Bs.</span>
                    </td>
                    <td class="alinear-derecha">
                        <button @click="sumarAlTotal(item.precio,item.precioBs)"> + </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2 class="bcvPrice">{{bcvPrice}} Bs.</h2>
        
    </section>
</body>
</html>



  <!--
  <div>
    <h1>Tasa BCV {{bcvPrice}}</h1>
    <div v-for="item in menu">
      <p>{{item.nombre}} {{item.desc}} Precio: {{item.precio}}$</p>
    </div>
  </div>-->
</template>


<style scoped>
  /* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}


table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }
       .alinear-derecha{
        text-align: right;
       }

        th {
            background-color: #222222;
            text-align: center;
            color: #fff;
        }

.bcvPrice {
  margin-top: 15px ;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-right: 20px;
}



nav ul li a {
    color: #fff;
    text-decoration: none;
}

/* Estilos para las secciones */
/* Estilos para las secciones */
section {
    padding: 40px;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: center;
    }

    nav ul {
        margin-top: 20px;
    }

    nav ul li {
        margin: 0;
    }

    section {
        padding: 20px;
    }
}

</style>
  
