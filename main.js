fetch('https://randomuser.me/api/?results=10').then(response => response.json()).then(data => {
    crearTarjetas(data.results);
});

function crearColor(edad){
    if(edad <= 3){
        return 'nuevo';
    } else if (edad <= 5){
        return 'medio';
    } else if (edad <= 10){
        return 'avanzado';
    } else if (edad <= 15){
        return 'pro';
    } else{
        return 'maestro';
    }
}

function crearTarjetas(usuarios){
    let container = document.querySelector('.container');
    usuarios.forEach(usuario => {
        container.innerHTML += ` 
            <div class="card ${crearColor(usuario.registered.age)}">

                    <div class="puntos">...</div>
                    <div class="card-body">

                        <div class="card-body-item">

                            <img src="${usuario.picture.large}" alt="">
                            <div class="texto-medio">

                                <h5 class="card-title">${usuario.name.first} ${usuario.name.last}</h5>
                                <p class="phone">${usuario.phone}</p>
                                
                                <div class="datos">

                                    <div>
                                        <p>Gender</p>
                                        <p>${usuario.gender}</p>
                                    </div>
                                    <div>
                                        <p>Nat</p>
                                        <p>${usuario.nat}</p>
                                    </div>
                                    <div>
                                        <p>Postcode</p>
                                        <p>${usuario.location.postcode}</p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div class="ranking">
                            <h4>${usuario.registered.age}</h4>
                            <p>Age</p>
                        </div>
                            
                    </div>

                <div class="circulo ${crearColor(usuario.registered.age)}"></div>

            </div>
    `
    });
    
    console.log("vengo de la funcion", usuarios);
}