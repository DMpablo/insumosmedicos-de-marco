import "./app.scss";
import { NavBar } from "./components/navBar/NavBar";
import { ItemListContainer } from "./components/item-list-contenedor/itemListContainer";
import { ContainierList } from "./components/containerList/containerList";

function App() {
  const PRODUCTOS = [
    {
      id: 0,
      title: "Bascula corporal Escali",
      price: 5600,
      description:
        "La capacidad de esta máquina es de 3 a 396.8 lbs (Unidad: Kg/Lb/St). Esta máquina se utiliza para pesaje de balanzas para el peso corporal. Es de 2.2 lbs.",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
    {
      id: 1,
      title:
        "Basic Medical Synmax - Guantes de vinilo, sin látex y sin polvo, medios, BMPF-3002 (caja de 100)",
      price: 3200,
      description:
        "nuestros guantes de vinilo no contienen látex de caucho natural y están fabricados sin polvo, una solución segura para aquellos afectados por alergias comunes y sensibilidades",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
    {
      id: 2,
      title:
        "Mascarilla de polvo reutilizable con filtros – Ajustable para carpintería, construcción, exterior (negro, 1 máscara + 6 filtros de carbón extra activados incluidos)",
      price: 2800,
      description:
        "Protección completa: el filtro de 4 capas puede eliminar partículas no grasas en el aire, incluyendo el polvo y otras partículas no basadas en aceite. Ideal para correr, ciclismo y otras actividades al aire libre",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
    {
      id: 3,
      title:
        "Oxímetro de pulso OLED de doble color para dedos, monitor de saturación de oxígeno en sangre (SpO2) con funda, baterías y cordón",
      price: 3200,
      description:
        "nuestro oxímetro de pulso ha sido clínicamente probado y ha superado constantemente a otro oxímetro de pulso en términos de precisión y fiabilidad, se encuentra que es un dispositivo rápido y absolutamente fiable de usar. Es ideal para las lecturas de oxígeno y pulso, y tiene un margen de error muy pequeño.",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
    {
      id: 4,
      title:
        "Monitor digital de presión arterial con batería y cargador (puño grande para adultos de 32 a 17.3 in)",
      price: 8000,
      description:
        "Hermosa pantalla de retroiluminación azul, 90 juegos de memoria Operación con una sola mano. Fácil de transportar para viajar Indicador de clasificación de la presión arterial, latido cardíaco irregular desmontable Apagado automático después de 3 minutos sin funcionamiento Batería de iones de litio y cargador incluidos. Una carga completa buena para más de 100 mediciones",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
    {
      id: 5,
      title:
        "Termómetro digital infrarrojo sin contacto para adultos, bebés, niños, niños",
      price: 1280,
      description:
        "El termómetro no táctil obtiene el resultado en un segundo, hasta un 300% más rápido que los artículos comunes. El termómetro infrarrojo sin contacto puede detectar la temperatura de la frente desde una distancia de hasta 3.9 in. Evita eficazmente la infección cruzada entre varias personas y no molesta al bebé dormido. Sanitario y cómodo. Indicador de salud y colores de alarma permiten controlar la fiebre con hasta 10 lecturas de temperatura y recordarlas en cualquier momento. Viene con modo silencioso. Este termómetro es adecuado para todas las edades, bebés, adultos y ancianos. Soporta la detección de temperatura no sólo para las personas, sino también para la habitación y el objeto. Al mismo tiempo, es fácil cambiar entre °C y °F. Incluye 1 termómetro digital. Adecuado para empresas, escuelas, hogares, etc.",
      image: "https://via.placeholder.com/600x400",
      quantity: 20,
    },
  ];
  const GREETING = ["insumos", "medicos"];
  const LOGO = ["i", "m"];
  const USER = [
    {
      admin: "si",
      name: "Pepe",
      avatar: "https://via.placeholder.com/200x200/92d19a/ffffff",
    },
    {
      admin: "no",
      name: "lala",
      avatar: "https://via.placeholder.com/200x200/d19292/ffffff",
    },
  ];
  const CART = 2;

  return (
    <div className="app">
      <NavBar logo={LOGO} user={USER} quantity={CART}/>
      <ItemListContainer name={GREETING} />
      <ContainierList productList={PRODUCTOS} />
    </div>
  );
}
export default App;
