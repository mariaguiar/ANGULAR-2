
export class Temperatura{
    
    public valor: number;
    public unidad: string
    
}



export class Clima{
    
    public temperatura: Temperatura;
    public viento: number;
    public precipitaciones: number
}


export class Ciudad {

    public nombre: string;
    public pais: string;
    public codigo: string;
    public clima: Clima

    // constructor (nombre, pais, codigo){
    //     this.nombre= nombre
    //     this.pais= pais
    //     this.codigo= codigo

    // }
}

