(function() {
const propiedades_alquiler = [
    {
        nombre:'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 |',
        baños: '2',
        costo: '2.000',
        smoke: false,
        pets: true,
    },

    {
        nombre:'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '56 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 |',
        baños: '3',
        costo: '2.500',
        smoke: true,
        pets: true,
    },

    {
        nombre:'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 |',
        baños: '2',
        costo: '2.200',
        smoke: false,
        pets: false,
    },

    {
        nombre:'Anexo con vista al lago.',
        src: 'https://images.unsplash.com/photo-1708204075396-e22f1e2fbecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Comodo anexo para solteras.',
        ubicacion: '5210 SE 11th Ave, Portland, OR 97224',
        habitaciones: '1 |',
        baños: '1',
        costo: '1.000',
        smoke: false,
        pets: false,
    },

    {
        nombre:'Condominio familiar',
        src: 'https://images.unsplash.com/photo-1669829492991-42b8027c62e4?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Excelente apartamentos para familias.',
        ubicacion: '419 Lakeside Dr, Little Rock, AR 74510',
        habitaciones: '2 |',
        baños: '1',
        costo: '1.500',
        smoke: false,
        pets: true,
    },

    {
        nombre:'Apartamento compartido',
        src: 'https://images.unsplash.com/photo-1650138278103-1f8a3d208cb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Oportunidad para un estudiante.',
        ubicacion: '26620 Latigo Shore Dr, Malibu, CA 90300',
        habitaciones: '1 |',
        baños: '1',
        costo: '2.000',
        smoke: false,
        pets: true,
    },
]

var limitepropi = 0;
    const propalquiler = document.querySelector("#propalquiler");
    var checkHtml = document.body;
    
    if (checkHtml.id === "index"){
       var limitepropi=3;
    } else{
       var limitepropi = propiedades_alquiler.length;
    }

    console.log(limitepropi)

for (let i=0; i < limitepropi; i++) { 

    const alquiler = propiedades_alquiler[i];
        
    let condicionFuma = '';
        if (alquiler.smoke === true) {
            condicionFuma = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
            } else {
            condicionFuma =`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;    
            }

    let condicionMascotas = '';          
            if (alquiler.pets === true) {
            condicionMascotas =`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
            } else {
            condicionMascotas =`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
            } 
        let template = `<div class="col-md-4 mb-4">
            <div class="card">
            <img src = "${alquiler.src}" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
                <h5 class="card-title">${alquiler.nombre}</h5>
                <p class="card-text">${alquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones. | <i class="fas fa-bath"></i> ${alquiler.baños} baños.</p>
                <div><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</div><p></p>
                <div>${condicionFuma}</div>
                <div>${condicionMascotas}</div>
            </div>
            </div>`;
            propalquiler.innerHTML += template;
        }
    })();