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
						<p style="color: orangered"> con metodo:</p>
						<a href="http://localhost:8000/profesores" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
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
					<li>http://localhost:8000/disponibilidades/{id_disponibilidad}</li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p>
					<a href="http://localhost:8000/disponibilidades" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
				</ul>
				<li>Crear:</li>
				<ul>
					<li>http://localhost:8000/profesor/{id_profesor}/disponibilidad</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>POST</strong>
					</div>
				</ul>
				<li>Actualizar:</li>
				<ul>
					<li>http://localhost:8000/profesor/{id_disponibilidad}/disponibilidad/{id_disponibilidad}</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>PATCH(editar por atributo->SE DEBE USAR)</strong>
					</div>
					<div class="alert alert-success" role="alert">
						<strong>PUT(es necesario editar todos los atributos) </strong>
					</div>				</ul>
				<li>Eliminar:</li>
				<ul>
					<li>http://localhost:8000/profesor/{id_disponibilidad}/disponibilidad/{id_disponibilidad}</li>
					<p style="color: orangered"> con metodo:</p><div class="alert alert-success" role="alert">
						<strong>Delete</strong>
					</div>
				</ul>
			</ul>
		</div>
	</div>
<hr>
	<div class="row-fluid">
		<div class="container">
			<h3>Secciones</h3>
			<h5 style="color: orangered">Rutas</h5>
			<ul>
				<li>Mostrar:</li>
				<ul>
					<li>http://localhost:8000/secciones</li>
					<p style="color: orangered"> Todos los registros </p>
					<li>http://localhost:8000/profesores/{id_profesor}/seccion/{id_seccion}/cursos </li>
					<p style="color: orangered"> Por "id"</p>
					<p style="color: orangered"> con metodo:</p>
					<a href="http://localhost:8000/secciones" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
				</ul>
				<div class="alert alert-info" role="alert">
					<strong>Tabla Pivote</strong>
				</div>
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
					<p style="color: orangered"> con metodo:</p>
					<a href="http://localhost:8000/cursos" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
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
					<p style="color: orangered"> con metodo:</p>
					<a href="http://localhost:8000/horarios" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
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
					<p style="color: orangered"> con metodo:</p>
					<a href="http://localhost:8000/salas" class="btn btn-primary btn-lg active" role="button">GET</a>					</ul>
				</ul>
			</ul>
		</div>
	</div>
<hr>
@stop