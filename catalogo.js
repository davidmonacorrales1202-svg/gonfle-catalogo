// Catálogo tipo revista de Gonflé. Los datos técnicos provienen de los catálogos 2022 de la empresa.
const WA_NUM = "573127576447";
const IMG = "assets/img/";
const wa = (txt) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(txt)}`;
const waProd = (nombre) => wa(`Hola Gonflé, vi su catálogo y quiero cotizar: ${nombre}.`);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const SECCIONES = [
  {
    id: "inflables", color: "rojo", tag: "Inflables y activaciones", indice: "Inflables y activaciones",
    titulo: "Inflables que se ven desde lejos",
    intro: "Diseñamos y fabricamos inflables a la medida, a motor o sellados, con la forma y el arte de tu marca.",
    layout: "filas",
    productos: [
      { n: "Réplica gigante de producto", img: "inf-hamburguesa.webp", d: "Botellas, latas, empaques o alimentos a gran escala con el arte real de tu producto.", s: ["A motor o sellado", "Hasta 14 m de alto", "Se pliega para almacenar"] },
      { n: "Muñeco o personaje de marca", img: "inf-pirata.webp", d: "Tu mascota o personaje convertido en un inflable imponente para eventos y fachadas.", s: ["Diseño a la medida", "Uso interior y exterior", "Motor de 110 V"] },
    ],
  },
  {
    id: "inflables-2", color: "rojo", tag: "Inflables y activaciones",
    titulo: "Personajes, formas y juegos",
    layout: "filas",
    productos: [
      { n: "Disfraz inflable", img: "inf-disfraz.webp", d: "Personajes que una persona viste y mueve: recordación por gigantismo en activaciones.", s: ["Portátil", "Para recorridos y eventos"] },
      { n: "Formas y figuras temáticas", img: "inf-pato.webp", d: "Figuras inflables para puntos de venta, lanzamientos y ferias.", s: ["A motor o sellado", "Tamaño a elección"] },
    ],
    extra: {
      titulo: "También fabricamos",
      items: ["Arcos de entrada y meta", "Carpas, túneles y domos", "Juegos recreativos", "Cilindros, esferas y stands"],
      datos: [["8 a 15", "días hábiles de producción"], ["14 m", "altura máxima"]],
    },
  },
  {
    id: "pop", color: "amarillo", tag: "Material POP", indice: "Material POP",
    titulo: "Tu marca domina el punto de venta",
    intro: "Producción propia en litografía y sellado por alta frecuencia, en volumen.",
    layout: "iconos",
    iconos: [
      ["i-manilla", "Manillas", "Para eventos, control de acceso y campañas."],
      ["i-cenefa", "Cenefas y cabezotes", "Piezas litográficas para góndolas y exhibición."],
      ["i-banderin", "Banderines", "Ambientación de puntos de venta y bares."],
      ["i-golpe", "Golpeadores", "Aplaudidores sellados para eventos y estadios."],
      ["i-bandera", "Banderas", "Tipo pétalo, cuadradas y tropezones."],
      ["i-carpa", "Carpas y kioscos", "Impresas con tu marca para ferias."],
      ["i-pendon", "Pendones y stands", "Roll-up, tipo araña y stands portátiles."],
      ["i-replica", "Réplicas selladas", "Botellas y envases para exhibición."],
    ],
    nota: "Manillas, cenefas y litografía: desde miles de unidades.",
  },
  {
    id: "exhibidores", color: "amarillo", tag: "Material POP · Exhibidores", indice: "Exhibidores para punto de venta",
    titulo: "Exhibidores para punto de venta",
    intro: "Piezas impresas que ganan espacio y atención en la góndola y el punto de pago.",
    layout: "grid", variante: "g6",
    productos: [
      { n: "Exhibidor de punto de pago", img: "pop-exhibidor.webp", d: "Capta la atención del cliente en el momento de pagar.", s: ["Alta calidad de impresión"] },
      { n: "Chispa o saltarín", img: "pop-saltarin.webp", d: "Sobresale en el lineal y llama la atención.", s: ["Ecoamigable"] },
      { n: "Porta afiches", img: "pop-portaafiches.webp", d: "Destaca promociones en zonas de alto tráfico.", s: ["Alta durabilidad"] },
      { n: "Ristra", img: "pop-ristra.webp", d: "Exhibe productos sin ocupar espacio en la góndola.", s: ["Alta calidad de impresión"] },
      { n: "Rompetráfico", img: "pop-rompetrafico.webp", d: "Mayor impacto dentro del lineal.", s: ["Capta al comprador"] },
      { n: "Solapa portaprecio", img: "pop-portaprecio.webp", d: "Identificación rápida del precio y las promociones.", s: ["Alta durabilidad"] },
    ],
  },
  {
    id: "textil", color: "rojo", tag: "Merchandising · Textil", indice: "Merchandising",
    titulo: "Gorras y dotaciones",
    layout: "filas",
    productos: [
      { n: "Gorra Neville", img: "m-gorra-neville.webp", d: "6 paneles, visera indeformable, botón forrado y cierre de hebilla metálica.", s: ["Algodón cepillado grueso", "7 colores", "Bordado o screen"] },
      { n: "Gorra Hanna tipo trucker", img: "m-gorra-hanna.webp", d: "5 paneles con frente fusionado y parte posterior en malla.", s: ["Poliéster y malla", "Más de 15 combinaciones", "Bordado, screen o sublimación"] },
      { n: "Dotaciones y uniformes", img: "t-uniforme.webp", d: "Conjuntos antifluido, camisas, pantalones y chaquetas con la identidad de tu empresa.", s: ["Textil a elección", "Bordado o estampación"] },
    ],
  },
  {
    id: "bolsos", color: "amarillo", tag: "Merchandising · Bolsos",
    titulo: "Bolsos y morrales",
    layout: "grid",
    productos: [
      { n: "Tulas", img: "m-tulas.webp", d: "Morral de cuerdas en múltiples colores.", s: ["12 colores", "Screen"] },
      { n: "Bolsa Cork", img: "m-bolsa-cork.webp", d: "Algodón con base en diseño de corcho.", s: ["44 × 38 cm", "Screen hasta 4 tintas"] },
      { n: "Slim Bag ecológica", img: "m-slim-bag.webp", d: "Bolsa plana para tiendas y eventos.", s: ["Kambrel 80 g · 37 × 39 cm", "Screen 1 tinta"] },
      { n: "Canguro London", img: "m-canguro.webp", d: "Dos bolsillos y cierre de cremallera.", s: ["Lona poliéster 600D", "Producción nacional"] },
    ],
  },
  {
    id: "oficina", color: "rojo", tag: "Merchandising · Oficina",
    titulo: "Escritura y oficina",
    layout: "filas",
    productos: [
      { n: "Libreta ecológica con bolígrafo", img: "m-libreta.webp", d: "70 hojas, 5 juegos de memos adhesivos y bolígrafo. Tamaño A6.", s: ["Papel reciclado", "10 × 15,3 cm", "Tampografía 6 × 6 cm"] },
      { n: "Bolígrafo ecológico Mónaco", img: "regalo-boligrafos.webp", d: "Bolígrafo con sistema retráctil.", s: ["Bambú", "14 cm de largo"] },
      { n: "Paraguas Golf 27\"", img: "m-paraguas.webp", d: "Apertura automática y cierre manual, 8 cascos.", s: ["Pongee, mango en EVA", "Screen"] },
    ],
  },
  {
    id: "plasticos", color: "amarillo", tag: "Plásticos de inyección", indice: "Plásticos de inyección",
    titulo: "Vasos, recipientes y hogar",
    intro: "Productos plásticos marcados con tu logo por tampografía, serigrafía o etiqueta.",
    layout: "grid",
    productos: [
      { n: "Vaso con pitillo 16 oz", img: "m-vaso-pitillo.webp", d: "Con tapa, asa y pitillo.", s: ["Polipropileno", "Ø 8,5 × 13,5 cm"] },
      { n: "Vaso redondo 11 oz", img: "m-vaso-redondo.webp", d: "Reutilizable para eventos.", s: ["Polipropileno", "Ø 6,5 × 13 cm"] },
      { n: "Sanduchera", img: "m-sanduchera.webp", d: "Portacomidas en varias referencias.", s: ["Polipropileno", "No. 3, 4, 7 y 8"] },
      { n: "Bandeja", img: "m-bandeja.webp", d: "Bandeja con amplia área de decorado.", s: ["PP y PS", "23 × 34,5 cm"] },
    ],
  },
  {
    id: "imp-bolsas", color: "rojo", tag: "Impresos y empaques · Bolsas", indice: "Impresos y empaques",
    titulo: "Bolsas con tu marca",
    intro: "Bolsas de papel impresas con tu logo para tiendas, eventos y regalos.",
    layout: "grid", variante: "fotos",
    productos: [
      { n: "Bolsa premium con cordón", img: "imp-bolsas-premium.webp", d: "Acabado elegante para marcas y regalos.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Bolsas de colores", img: "imp-bolsas-colores.webp", d: "Bolsas con troquel en la paleta de tu marca.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Bolsa ilustrada", img: "imp-bolsa-ilustrada.webp", d: "Diseño a full color con la ilustración que elijas.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Bolsas kraft", img: "imp-bolsas-kraft.webp", d: "Papel kraft natural para empaque y alimentos.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
    ],
  },
  {
    id: "imp-cajas", color: "amarillo", tag: "Impresos y empaques · Cajas",
    titulo: "Cajas con asa y loncheras",
    intro: "Empaques listos para llevar refrigerios, regalos y kits.",
    layout: "grid", variante: "fotos",
    productos: [
      { n: "Caja lonchera ilustrada", img: "imp-caja-lonchera.webp", d: "Con asa, ideal para refrigerios y kits.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Caja cojín de colores", img: "imp-caja-cojin.webp", d: "Formato práctico con asa integrada.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Cajas kraft con asa", img: "imp-cajas-kraft.webp", d: "Empaque resistente con faja impresa.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Kit de bolsas y cajas", img: "imp-bolsas-cajas.webp", d: "Línea de empaques con una misma imagen.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
    ],
  },
  {
    id: "imp-cajas-2", color: "rojo", tag: "Impresos y empaques · Cajas",
    titulo: "Cajas plegadizas y de regalo",
    intro: "Cajas impresas para producto, cosmética, envíos y obsequios.",
    layout: "grid", variante: "fotos",
    productos: [
      { n: "Cajas plegadizas", img: "imp-cajas-plegadizas.webp", d: "Para empaque de producto en varios formatos.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Cajas en tonos pastel", img: "imp-cajas-pastel.webp", d: "Cajas de regalo en colores suaves.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Cajas para cosmética", img: "imp-cajas-cosmetica.webp", d: "Presentación cuidada para productos de belleza.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Cajas kraft para envío", img: "imp-cajas-envio.webp", d: "Empaque resistente para despachos.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
    ],
  },
  {
    id: "imp-papeleria", color: "amarillo", tag: "Impresos y empaques · Papelería",
    titulo: "Libretas, agendas y calendarios",
    intro: "Papelería corporativa con la identidad de tu empresa.",
    layout: "grid", variante: "fotos",
    productos: [
      { n: "Libretas de notas", img: "imp-libretas.webp", d: "Anilladas, con portada personalizada.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Cuadernos de colores", img: "imp-cuadernos.webp", d: "Tapas en la paleta de tu marca.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Agendas", img: "imp-agendas.webp", d: "Tapa dura o anillada con tu diseño.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Calendario de escritorio", img: "imp-calendario.webp", d: "Presencia de marca todo el año.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
    ],
  },
  {
    id: "imp-publicidad", color: "rojo", tag: "Impresos y empaques · Publicidad impresa",
    titulo: "Afiches y folletos",
    intro: "Piezas impresas para comunicar tus promociones y eventos.",
    layout: "grid", variante: "g2 fotos",
    productos: [
      { n: "Afiches y volantes", img: "imp-afiches.webp", d: "Impresión a color para campañas y eventos.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
      { n: "Trípticos y folletos", img: "imp-tripticos.webp", d: "Información completa de tu empresa o producto.", s: ["Personalizable con tu logo", "Medidas y cantidad a la medida"] },
    ],
  },
  {
    id: "regalos", color: "rojo", tag: "Regalos corporativos", indice: "Regalos corporativos",
    titulo: "Regalos que dejan huella",
    intro: "Cajas personalizadas y kits empresariales para colaboradores, clientes y proveedores.",
    layout: "destacado",
    foto: "foto-regalos.webp",
    lista: ["Cajas personalizadas y de Navidad", "Kits empresariales", "Regalos para colaboradores, clientes y proveedores", "Empaques y tarjetas con tu marca", "Opciones para cada presupuesto"],
    cta: "Quiero un kit para mi empresa",
  },
  {
    id: "catering", color: "amarillo", tag: "Catering empresarial", indice: "Catering empresarial",
    titulo: "Alimentamos los momentos que hacen equipo",
    intro: "Alimentación para reuniones, capacitaciones y eventos corporativos.",
    layout: "destacado",
    foto: "foto-catering.webp",
    lista: ["Desayunos y brunch", "Refrigerios AM y PM", "Lunch box y almuerzos", "Estaciones de alimentos", "Eventos y cierres de año"],
    cta: "Cotizar catering",
  },
  {
    id: "bienestar", color: "rojo", tag: "Proyectos especiales", indice: "Proyectos especiales",
    titulo: "Proyectos a la medida de tu empresa",
    intro: "Combinamos alimentación, regalos, publicidad e inflables en una sola solución.",
    layout: "destacado",
    foto: "foto-salud.webp",
    lista: ["Semana de la Salud y bienestar", "Fin de año empresarial", "Lanzamientos de producto", "Bienvenida de colaboradores", "Atención a clientes VIP"],
    cta: "Cuéntanos tu proyecto",
  },
];

const ICONOS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.46 15.06L2 22l5.08-1.53A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.98l-.3-.19-3 .9.92-2.92-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.3 3.9c-.2 0-.5.07-.76.36-.26.28-1 1-1 2.4s1.03 2.78 1.17 2.97c.14.19 2 3.18 4.93 4.33 2.43.96 2.93.77 3.46.72.53-.05 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33-.29-.15-1.7-.84-1.96-.94-.27-.1-.46-.14-.65.15-.2.28-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44a8.7 8.7 0 0 1-1.6-2c-.17-.3-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.18.2-.3.29-.5.1-.19.05-.36-.02-.5-.07-.15-.64-1.58-.9-2.16-.22-.52-.46-.52-.65-.53h-.56Z"/></symbol>
  <symbol id="i-manilla" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 9h18v6H3zM7 9v6M17 12h2"/></symbol>
  <symbol id="i-cenefa" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 5h18v5H3zM5 10v9m14-9v9M3 19h18M8 14h8"/></symbol>
  <symbol id="i-banderin" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M2 5c6 2 14 2 20 0M4 5.6 6 12l2-5.9M10 6.4 12 13l2-6.6M16 6.1 18 12l2-6.4"/></symbol>
  <symbol id="i-golpe" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m5 19 9-14a2 2 0 0 1 3.4 2.1L8.4 21M9 19l9-14m-6 15 7-11"/></symbol>
  <symbol id="i-bandera" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6 21V3c7 0 12 4 12 10 0 3-3 5-6 5H6"/></symbol>
  <symbol id="i-carpa" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M2 10 12 4l10 6M4 10v10m16-10v10M2 10h20M8 10l-1 3m5-3v3m4-3 1 3"/></symbol>
  <symbol id="i-pendon" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7 3h10v15H7zM6 21h12M12 18v3M10 7h4m-4 3h4"/></symbol>
  <symbol id="i-replica" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M10 3h4v3l2 3v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3zM8 12h8m-8 5h8"/></symbol>
</svg>`;

// ───────── Páginas
const pie = (n, claro) => `<div class="pie ${claro ? "claro" : ""}"><img src="${IMG}${claro ? "logo-gonfle-sin-slogan-blanco.png" : "logo-gonfle-sin-slogan.png"}" alt=""><span>${n}</span></div>`;

const cab = (s) => `
  <header class="cab c-${s.color}">
    <span class="tag">${esc(s.tag)}</span>
    <h2>${esc(s.titulo)}</h2>
    ${s.intro ? `<p>${esc(s.intro)}</p>` : ""}
  </header>`;

const specs = (p) => `<ul class="specs">${p.s.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
const cotizar = (n, txt = "Cotizar") => `<a class="cot" href="${waProd(n)}" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>${txt}</a>`;

function pagSeccion(s, num) {
  let cuerpo = "";
  if (s.layout === "filas") {
    cuerpo = `<div class="filas n${s.productos.length}">${s.productos.map((p) => `
      <article class="fila">
        <div class="foto"><img src="${IMG}${p.img}" alt="${esc(p.n)}"></div>
        <div class="txt"><h3>${esc(p.n)}</h3><p>${esc(p.d)}</p>${specs(p)}${cotizar(p.n)}</div>
      </article>`).join("")}</div>`;
    if (s.extra) cuerpo += `
      <div class="extra">
        <div><h4>${esc(s.extra.titulo)}</h4><ul>${s.extra.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>
        <div class="datos">${s.extra.datos.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join("")}</div>
      </div>`;
  } else if (s.layout === "grid") {
    cuerpo = `<div class="grid ${s.variante || ""}">${s.productos.map((p) => `
      <article class="card">
        <div class="foto"><img src="${IMG}${p.img}" alt="${esc(p.n)}"></div>
        <h3>${esc(p.n)}</h3><p>${esc(p.d)}</p>${specs(p)}${cotizar(p.n)}
      </article>`).join("")}</div>`;
  } else if (s.layout === "iconos") {
    cuerpo = `<div class="iconos">${s.iconos.map(([i, t, d]) => `
      <div class="ic"><span class="ico c-${s.color}"><svg><use href="#${i}"/></svg></span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></div>`).join("")}</div>
      <div class="nota-pop"><span>${esc(s.nota)}</span>${cotizar("Material POP", "Cotizar material POP")}</div>`;
  } else if (s.layout === "destacado") {
    const vis = s.mosaico
      ? `<div class="mosaico">${s.mosaico.map((m) => `<div><img src="${IMG}${m}" alt=""></div>`).join("")}</div>`
      : `<div class="foto-grande"><img src="${IMG}${s.foto}" alt="${esc(s.titulo)}"></div>`;
    cuerpo = `${vis}
      <ul class="lista">${s.lista.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
      <a class="cta-grande" href="${waProd(s.tag)}" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>${esc(s.cta)}</a>`;
  }
  return `<div class="page" data-titulo="${esc(s.tag)}"><div class="pg">${cab(s)}<div class="cuerpo">${cuerpo}</div>${pie(num)}</div></div>`;
}

function portada() {
  return `<div class="page" data-density="hard" data-titulo="Portada"><div class="pg portada">
    <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
    <img class="logo" src="${IMG}logo-gonfle.png" alt="Gonflé. Sentimos tu marca">
    <div class="pt-foto"><img src="${IMG}foto-evento.webp" alt=""></div>
    <div class="pt-txt">
      <span class="ey">Catálogo de productos</span>
      <h1>Hacemos que tu marca <em>se vea, se toque</em> <u>y se recuerde.</u></h1>
    </div>
    <ul class="pt-lineas"><li>Inflables</li><li>Material POP</li><li>Merchandising</li><li>Impresos y empaques</li><li>Regalos corporativos</li><li>Catering</li><li>Proyectos especiales</li></ul>
    <p class="pt-pie">Medellín · Colombia</p>
  </div></div>`;
}

function indice() {
  const items = SECCIONES.map((s, i) => [s.indice, i + 3]).filter(([n]) => n);
  items.push(["Cómo trabajamos", SECCIONES.length + 3]);
  return `<div class="page" data-titulo="Índice"><div class="pg">
    <div class="intro">
      
      <h2>Somos tu aliado para toda la visibilidad de tu marca</h2>
      <p>En Gonflé diseñamos, producimos y personalizamos productos y experiencias que hacen visible tu marca, fortalecen tus equipos y generan un impacto positivo en tus clientes.</p>
    </div>
    <h4 class="ind-t">En este catálogo</h4>
    <ol class="indice">${items.map(([t, p]) => `<li><a href="#" data-ir="${p}"><span>${t}</span><b>${String(p).padStart(2, "0")}</b></a></li>`).join("")}</ol>
    <p class="ayuda">Toca el botón <b>Cotizar</b> de cualquier producto y te escribimos por WhatsApp.</p>
    ${pie(2)}
  </div></div>`;
}

function proceso() {
  const pasos = [["Conversamos", "Nos cuentas qué necesitas, cuántas unidades y para qué fecha."], ["Proponemos", "Te enviamos una cotización a la medida de tu presupuesto."], ["Aprobamos el diseño", "Validas el arte con tu logo antes de producir."], ["Producimos y entregamos", "Coordinamos producción y entrega en la fecha acordada."]];
  return `<div class="page" data-titulo="Cómo trabajamos"><div class="pg">
    ${cab({ color: "amarillo", tag: "Cómo trabajamos", titulo: "De la idea a la entrega" })}
    <div class="cuerpo">
      <ol class="pasos">${pasos.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join("")}</ol>
      <div class="cond">
        <div><b>8 a 15 días</b><span>hábiles para inflables</span></div>
        <div><b>50 %</b><span>de anticipo para producir</span></div>
        <div><b>Logo editable</b><span>en Adobe Illustrator</span></div>
        <div><b>100 %</b><span>personalizado</span></div>
      </div>
    </div>
    ${pie(SECCIONES.length + 3)}
  </div></div>`;
}

function contraportada() {
  return `<div class="page" data-density="hard" data-titulo="Contacto"><div class="pg contra">
    <span class="blob b1"></span><span class="blob b2"></span>
    <h2>¡Conversemos!</h2>
    <p>Cuéntanos qué necesitas y juntos creamos la mejor experiencia para tu empresa.</p>
    <a class="cta-grande blanco" href="${wa("Hola Gonflé, vi su catálogo y quiero agendar una cita.")}" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>Agendar una cita</a>
    <div class="qr"><img src="${IMG}qr-whatsapp.svg" alt="Código QR para escribir por WhatsApp"><span>Escanea y escríbenos</span></div>
    <ul class="contacto">
      <li>(+57) 312 757 6447</li><li>gerencia@gonflegroup.com</li><li>Medellín, Antioquia</li><li>@gonfleoficial</li>
    </ul>
    <img class="logo" src="${IMG}logo-gonfle-blanco.png" alt="Gonflé">
  </div></div>`;
}

function construir() {
  const pags = [portada(), indice(), ...SECCIONES.map((s, i) => pagSeccion(s, i + 3)), proceso(), contraportada()];
  document.getElementById("libro").innerHTML = pags.join("");
  document.body.insertAdjacentHTML("afterbegin", ICONOS);
}

// ───────── Arranque
const IMPRESION = new URLSearchParams(location.search).has("print");
construir();
if (IMPRESION) {
  document.documentElement.classList.add("impresion");
} else {
  iniciarLibro();
}

function iniciarLibro() {
  const el = document.getElementById("libro");
  const libro = new St.PageFlip(el, {
    width: 500, height: 772, size: "stretch",
    minWidth: 260, maxWidth: 620, minHeight: 400, maxHeight: 960,
    showCover: true, usePortrait: true, mobileScrollSupport: false,
    maxShadowOpacity: 0.35, flippingTime: 800, disableFlipByClick: true,
    showPageCorners: true, swipeDistance: 20,
  });
  libro.loadFromHTML(el.querySelectorAll(".page"));
  // En modo de una página (celular) la librería bloquea flipPrev porque su punto de inicio no cae en la
  // zona de esquina exigida por disableFlipByClick. Se omite esa validación solo durante el retroceso;
  // así funcionan el botón, la flecha del teclado y el gesto de deslizar hacia la derecha.
  const retroceder = libro.flipPrev.bind(libro);
  libro.flipPrev = (esquina) => {
    const ajustes = libro.getSettings();
    const antes = ajustes.disableFlipByClick;
    ajustes.disableFlipByClick = false;
    try { retroceder(esquina); } finally { ajustes.disableFlipByClick = antes; }
  };
  const total = libro.getPageCount();
  const cont = document.getElementById("contador");
  const nombre = (i) => el.querySelectorAll(".page")[i]?.dataset.titulo || "";
  const pintar = () => {
    const i = libro.getCurrentPageIndex();
    const doble = libro.getOrientation() === "landscape" && i > 0 && i < total - 1;
    const izq = doble && i % 2 === 0 ? i - 1 : i;
    cont.textContent = doble ? `${izq + 1}–${izq + 2} / ${total}` : `${i + 1} / ${total}`;
    document.getElementById("seccion").textContent = nombre(i);
    document.getElementById("ant").disabled = i === 0;
    document.getElementById("sig").disabled = i >= total - 1;
  };
  libro.on("flip", pintar);
  libro.on("changeOrientation", pintar);
  pintar();
  document.getElementById("ant").onclick = () => libro.flipPrev();
  document.getElementById("sig").onclick = () => libro.flipNext();
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") libro.flipNext();
    if (e.key === "ArrowLeft") libro.flipPrev();
  });
  el.addEventListener("click", (e) => {
    const a = e.target.closest("[data-ir]");
    if (a) { e.preventDefault(); libro.flip(Number(a.dataset.ir) - 1); }
  });
  document.getElementById("pista").addEventListener("click", () => document.getElementById("pista").remove());
  setTimeout(() => document.getElementById("pista")?.classList.add("fuera"), 5000);
}
