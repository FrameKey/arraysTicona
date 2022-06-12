const iva = 1.21
const ivaImportado = 2

const infoAutos = [{marca:"Fiat", año:2020,modelo:"500",precio:10000,iva:iva},
                    {marca:"Reanult", año:2022,modelo:"Megane",precio:250000,iva:iva},
                    {marca:"Volkswagen", año:2020,modelo:"Vento",precio:35300,iva:ivaImportado},
                    {marca:"Mercedes Benz", año:2021,modelo:"Clase A",precio:76000,iva:ivaImportado}];


                    class Auto{
                        constructor(marca,año,modelo,precio,iva){
                            this.marca = marca
                            this.año = año
                            this.modelo = modelo
                            this.precio = precio
                            this.iva = iva
                        }
                        /*precioFinal(){
                           return this.precio * this.iva
                    }
                        seguro(){
                            return parseInt(this.precio - (this.año * 3))
                        }
                        buscarAuto() {
                            let prod = prompt("Ingrese el nombre del producto:")
                                if (prod !== "") {
                                    let resultado = productos.find( p => p.id === prod.toUpperCase())
                                    console.table(resultado)
                                } else {
                                    console.error("Ingrese un dato válido.")
                                }
                        }*/
                    }
                    
                    /*
                    const auto1 = new Auto  ("Fiat",2020,"500",10000,iva);
                    const auto2 = new Auto  ("Reanult",2022,"Megane",250000,iva);
                    const auto3 = new Auto  ("Volkswagen",2020,"Vento",35300,ivaImportado);
                    const auto4 = new Auto  ("Mercedes Benz",2021,"Clase A",76000,ivaImportado);
                    */
                    
                   
                    
                    
                    
                  
                        
                        let marcaAuto = prompt ('¿Qué marca de auto queres?') 
                        let operacion = prompt ('¿Qué queres calcular?')
                       

                            if (marcaAuto.toLocaleLowerCase() !== "" && operacion.toLocaleLowerCase() == "seguro"){
                                let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.toLocaleLowerCase())
                                let seguro = parseInt(resultado.precio - (resultado.año * 3))
                                alert ("El seguro del " + resultado.marca +" "+ resultado.modelo + " sale $" + seguro + " por mes.")


                            } else if (marcaAuto.toLocaleLowerCase() !== "" && operacion.toLocaleLowerCase() == "precio final"){
                                let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.toLocaleLowerCase())
                                let precioFinal = parseInt(resultado.precio * resultado.iva)
                                alert ("El precio final del " + resultado.marca +" "+ resultado.modelo + " es de $" + precioFinal + " (IVA incluido)")
                            } 
                            
                            else {
                                console.error("Sorry, no tenemos ese auto 🙁")
                            }
              
                    
                    /*
                    if (marcaAuto.toLocaleLowerCase() == "fiat" && operacion.toLocaleLowerCase() == "seguro"){
                        alert ("El seguro del " + return (infoAutos.marca(0) +" "+ auto1.modelo + " sale $" + auto1.seguro() + " por mes.")
                    }  
                     else if (marcaAuto.toLocaleLowerCase() == "fiat" && operacion.toLocaleLowerCase() == "precio"){
                        alert ("El precio final del " + auto1.marca + " " + auto1.modelo + " es $" + auto1.precioFinal() + " (IVA incluido)")
                    }
                    
                    
                     else if (marcaAuto.toLocaleLowerCase() == "renault" && operacion.toLocaleLowerCase() == "seguro"){
                        alert ("El seguro del " + auto2.marca +" "+ auto2.modelo + " sale $" + auto2.seguro() + " por mes.")
                    }  
                     else if (marcaAuto.toLocaleLowerCase() == "renault" && operacion.toLocaleLowerCase() == "precio"){
                        alert ("El precio final del " + auto2.marca + " " + auto2.modelo + " es $" + auto2.precioFinal() + " (IVA incluido)")
                    }
                    
                    
                    else if (marcaAuto.toLocaleLowerCase() == "volkswagen" && operacion.toLocaleLowerCase() == "seguro"){
                        alert ("El seguro del " + auto3.marca +" "+ auto3.modelo + " sale $" + auto3.seguro() + " por mes.")
                    }  
                     else if (marcaAuto.toLocaleLowerCase() == "volkswagen" && operacion.toLocaleLowerCase() == "precio"){
                        alert ("El precio final del " + auto3.marca + " " + auto3.modelo + " es $" + auto3.precioFinal() + " (IVA incluido)")
                    }
                    
                    
                    else if (marcaAuto.toLocaleLowerCase() == "mercedes benz" && operacion.toLocaleLowerCase() == "seguro"){
                        alert ("El seguro del " + auto4.marca +" "+ auto4.modelo + " sale $" + auto4.seguro() + " por mes.")
                    }  
                     else if (marcaAuto.toLocaleLowerCase() == "mercedes benz" && operacion.toLocaleLowerCase() == "precio"){
                        alert ("El precio final del " + auto4.marca + " " + auto4.modelo + " es $" + auto4.precioFinal() + " (IVA incluido)")
                    }
                    else{
                        alert("Sorry, no tenemos ese auto 🙁")
                    }
                    */
                    