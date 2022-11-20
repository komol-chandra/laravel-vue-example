<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Example Component</div>

					<div class="card-body">I'm an example component.</div>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="alert alert-primary d-flex justify-content-between" role="alert">
				<h5>List is Here</h5>
				<!-- <button @click="createTask" id="addModal" class="btn btn-dark" data-bs-target="#addModal" data-bs-toggle="modal" type="button">Create TasK</button> -->
				<button @click="createTask" class="btn btn-dark" id="addModal" type="button">Create TasK</button>
			</div>
		</div>
		<!-- --------------- modal start ----------------------- -->
		<!-- Button trigger modal -->

		<!-- Modal -->
		<div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="addModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Create New Student</h5>
						<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="mb-3 col-12">
								<label class="form-label" for="name">Name</label>
								<input class="form-control" id="name" type="text" v-model="modalData.name" />
								<span class="text-danger" v-show="modalErrors.name">Name Field is required</span>
							</div>
							<div class="mb-3 col-12">
								<label class="form-label" for="phone">Phone</label>
								<input class="form-control" id="phone" type="text" v-model="modalData.phone" />
								<span class="text-danger" v-show="modalErrors.phone">Phone Field is required</span>
							</div>
							<div class="mb-3 col-12">
								<label class="form-label" for="email">Email</label>
								<input class="form-control" id="email" type="text" v-model="modalData.email" />
								<span class="text-danger" v-show="modalErrors.email">Email Field is required</span>
							</div>
							<div class="mb-3 col-12">
								<label class="form-label" for="gender">Gender</label>
								<select aria-label=".form-select example" class="form-select form-select mb-12" v-model="modalData.gender">
									<option selected>Open this select menu</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
								<span class="text-danger" v-show="modalErrors.gender">Gender Field is required</span>
							</div>
							<div class="mb-3 col-12">
								<label class="form-label" for="details">Details</label>
								<textarea class="form-control" id="details" rows="3" v-model="modalData.details"></textarea>
								<span class="text-danger" v-show="modalErrors.details">Gender Field is required</span>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
						<button @click="storeModal" class="btn btn-primary" type="button">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	setup: () => ({
		title: "all tasks",
	}),
	data() {
		return {
			modalData: {
				name: "",
				phone: "",
				email: "",
				gender: "",
				details: "",
			},
			modalErrors: {
				name: false,
				phone: false,
				email: false,
				gender: false,
				details: false,
			},
		};
	},
	methods: {
		createTask() {
			// console.log("object");
			console.log($);
			$("#addModal").modal("show");
		},
		storeModal() {
			console.log("hi");
			this.modalData.name == ""
				? (this.modalErrors.name = true)
				: (this.modalErrors.name = false);

			this.modalData.phone == ""
				? (this.modalErrors.phone = true)
				: (this.modalErrors.phone = false);

			this.modalData.email == ""
				? (this.modalErrors.email = true)
				: (this.modalErrors.email = false);
			this.modalData.gender == ""
				? (this.modalErrors.gender = true)
				: (this.modalErrors.gender = false);
			this.modalData.details == ""
				? (this.modalErrors.details = true)
				: (this.modalErrors.details = false);

			if (
				this.modalData.name &&
				this.modalData.phone &&
				this.modalData.email &&
				this.modalData.gender &&
				this.modalData.details
			) {
				axios
					.post("/student", this.modalData)
					.then((response) => {
						console.log(response.data);
					})
					.catch((errors) => {
						console.log(object);
					})
					.finally(() => {
						$("#addModal").modal("hide");
					});
			} else {
				console.log("error");
			}
		},
	},
};
</script>
