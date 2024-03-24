const propiedades_venta = [
    {
        nombre:'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 |',
        baños: '4',
        costo: '5.000',
        smoke: false,
        pets: false,
    },

    {
        nombre:'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
        habitaciones: '2 |',
        baños: '1',
        costo: '1.200',
        smoke: true,
        pets: true,
    },

    {
        nombre:'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 |',
        baños: '3',
        costo: '4.500',
        smoke: false,
        pets: true,
    },

    {
        nombre:'Casa del Arbol',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Hermosa propiedad, con una bellisima vista privada.',
        ubicacion: '6309 SE 13th Ave, Portland, OR 97202',
        habitaciones: '4 |',
        baños: '4 1/2',
        costo: '4.000',
        smoke: false,
        pets: true,
    },

    {
        nombre:'Cabañita en el bosque',
        src: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Cabañas, sera tu lugar favorito de vacaciones.',
        ubicacion: '11 Lakeside Dr, Little Rock, AR 72204',
        habitaciones: '1 |',
        baños: '1',
        costo: '2.500',
        smoke: false,
        pets: true,
    },

    {
        nombre:'Casa en la Playa',
        src: 'https://images.unsplash.com/photo-1511840636560-acee95b3a83f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Espectacular casa a la orilla de la playa.',
        ubicacion: '26740 Latigo Shore Dr, Malibu, CA 90265',
        habitaciones: '5 |',
        baños: '4',
        costo: '10.000',
        smoke: true,
        pets: true,
    },
]

let limitepropi = 0;
    const propventas = document.querySelector("#propventas");
    let checkHtml = document.body;
    
    if (checkHtml.id === "index"){
        limitepropi=3;
    } else{
        limitepropi = propiedades_venta.length;
    }

for (let i=0; i < limitepropi; i++) { 

    const venta = propiedades_venta[i];
        
    let condicionFuma = '';
        if (venta.smoke === true) {
            condicionFuma = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
            } else {
            condicionFuma =`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;    
            }

    let condicionMascotas = '';          
            if (venta.pets === true) {
            condicionMascotas =`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
            } else {
            condicionMascotas =`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
            } 
        let template = `<div class="col-md-4 mb-4">
            <div class="card">
            <img src = "${venta.src}" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
                <h5 class="card-title">${venta.nombre}</h5>
                <p class="card-text">${venta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones. | <i class="fas fa-bath"></i> ${venta.baños} baños.</p>
                <div><i class="fas fa-dollar-sign"></i> ${venta.costo}</div><p></p>
                <div>${condicionFuma}</div>
                <div>${condicionMascotas}</div>
            </div>
            </div>`;
            propventas.innerHTML += template;
        }

