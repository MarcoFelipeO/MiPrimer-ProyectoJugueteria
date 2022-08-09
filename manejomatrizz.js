var matriz=[[001,"Pistola de agua Nerf","$1200","Pistola de agua, formato de 2lt, alto alcance", 12 ]];



  
//mostrar producto.
function mostrarProducto(){
	var largo=matriz.length;
	
	for(var x=0; x<largo;x++){
		for(var y=4; y<matriz[x].length;y++){
			alert(matriz[x],[y]); 
			//document.writeln(matriz[x][y]);
		}
	}
}

//insertar producto
function insertarProducto(){

	let producto = 
	{
	   'codigo':       document.getElementById("codigo"),
	   'nombre':       document.getElementById("nombre"),
	   'precio':       document.getElementById("precio"),
	   'descripcion':  document.getElementById("descripcion"),
	   'stock':        document.getElementById("stock")
	   
   }

//	matriz.push([codigo, nombre, precio, descripcion, stock]);
	console.log(producto)
	alert("El producto se ha agregado de manera correcta");

	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("precio").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("stock").value="";
}


 //actualizar producto
 function actualizarProducto(){
	//actualización de precio por medio del nombre
	var codigo=document.getElementById("codigo").value;
	var nombre=document.getElementById("nombre").value;
	var precio=document.getElementById("precio").value;
	var descripcion=document.getElementById("descripcion").value;
	var stock=document.getElementById("stock").value;
	var largo=matriz.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<matriz[x].length;y++){
			
			if(matriz[x][y]==codigo){
				matriz[x][y+2]=[precio];
				matriz[x][y+3]=[descripcion];
				matriz[x][y+1]=[nombre];
				matriz[x][y+4]=[stock];
				alert("Precio y stock Actualizado correctamente");
			}

		}
	}
	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("precio").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("stock").value="";

}


  //eliminar por producto
function eliminarProducto(){
//eliminar por codigo
	var nombre=document.getElementById("codigo").value;
	
	var largo=matriz.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<matriz[x].length;y++){
			
			if(matriz[x][y]==codigo){
				matriz.splice([x][y],1);
				alert("Producto eliminado");
				document.getElementById("codigo").value="";
			}

		}
	}
	
}




