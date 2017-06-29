@extends('template.main')
@section('title'){{'RESTfulAPI'}}@endsection
@section('content')
	<div class="row-fluid">
		<div class="container">
			<div class="jumbotron">
				<h1>RESTfulAPI</h1>
				<h4 style="color: orangered">Rutas disponibles</h4>
			</div>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Profesores</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
					<ul>
						<li>http://localhost:8000/profesores</li>
						<p style="color: orangered"> Todos los registros </p>
						<li>http://localhost:8000/profesores/{id_profesor} </li>
						<p style="color: orangered"> Por "id"</p>
						<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
							<strong>GET</strong>
						</div>
					</ul>
				<li>Crear:</li>
					<ul>
						<li>http://localhost:8000/profesores </li>
						<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
							<strong>POST</strong>
						</div>
					</ul>
				<li>Actualizar:</li>
					<ul>
						<li>http://localhost:8000/profesores/{id_profesor} </li>
						<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
							<strong>PATCH(editar por atributo)</strong>
						</div>
						<div class="alert alert-success" role="alert">
							<strong>PUT(es necesario editar todos los atributos) </strong>
						</div>
					</ul>
				<li>Eliminar:</li>
					<ul>
						<li>http://localhost:8000/profesores/{id_profesor} </li>
						<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
							<strong>Delete</strong>
						</div>
						<div class="alert alert-warning" role="alert">
							<strong>Importante!</strong> Eliminar relacion con tabla pivote "Disponibilidad"
							antes de borrar registro
						</div>
					</ul>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Disponibilidad</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/disponibilidades</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/profesores/{id_profesor}/disponibilidad/{id_disponibilidad}/cursos </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>GET</strong>
					</div>
				</ul>
				<li>Crear:</li>
				<ul>
					<li>http://localhost:8000/profesor/{id_profesor}/curso/{id_curso}/disponible </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>POST</strong>
					</div>
				</ul>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/profesores/{id_profesores}/disponibilidad/{id_disponibilidad}/cursos/{id_curso} </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>				</ul>
				<li>Eliminar:</li>
				<ul>
					<li>http://localhost:8000/profesores/{id_profesores}/disponibilidad/{id_disponibilidad}/cursos/{id_curso}</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>Delete</strong>
					</div>
					<div class="alert alert-info" role="alert">
						<strong>Importante!: Tabla Pivote</strong>
					</div>
				</ul>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Curso</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/cursos</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/cursos/{id_cursos} </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>GET</strong>
					</div>
				</ul>
				<li>Crear:</li>
				<ul>
					<li>http://localhost:8000/cursos </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>POST</strong>
					</div>
				</ul>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/cursos/{id_curso} </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>
				</ul>
				<li>Eliminar:</li>
				<ul>
					<li>http://localhost:8000/cursos/{id_curso} </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>Delete</strong>
					</div>
					<div class="alert alert-warning" role="alert">
						<strong>Importante!</strong> Eliminar relacion con tabla pivote "Disponibilidad" y "Horarios"
						antes de borrar registro
					</div>
				</ul>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Horarios</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/horarios</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/cursos/{id_cursos}/horario/{id_horario}/salas </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>GET</strong>
					</div>
				</ul>
				<li>Crear:</li>
				<ul>
					<li>http://localhost:8000/curso/{id_curso}/sala/{id_sala}/horario </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>POST</strong>
					</div>
				</ul>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/cursos/{id_cursos}/horario/{id_horario}/salas/{id_salas}</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>

				</ul>
				<li>Eliminar:</li>
				<ul>
					<li>http://localhost:8000/cursos/{id_cursos}/horario/{id_horario}/salas/{id_salas}</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>Delete</strong>
					</div>
					<div class="alert alert-info" role="alert">
						<strong>Importante!: Tabla Pivote</strong>
					</div>
				</ul>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Salas</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/salas</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/salas/{id_salas} </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>GET</strong>
					</div>
				</ul>
				<li>Crear: No necesario</li>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/departamentos/{id_departamento}/salas/{id_sala} </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>
				</ul>
				<li>Eliminar: No necesario</li>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Departamento</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/departamentos</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/departamentos/{id_cursos} </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>GET</strong>
					</div>
				</ul>
				<li>Crear:</li>
				<ul>
					<li>http://localhost:8000/departamentos </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>POST</strong>
					</div>
				</ul>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/departamentos/{id_departamentos} </li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>
				</ul>
				<li>Eliminar: No necesario</li>
			</ul>
		</div>
	</div>
	<hr>
@stop