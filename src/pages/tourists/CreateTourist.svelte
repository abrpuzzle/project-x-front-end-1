<script>
  import axios from "axios";
  let tourist = {
    name: "",
    email: "",
  };
  function addTourist() {
    axios
      .post("http://localhost:8080/projectx/tourists", tourist)
      .then((response) => {
        alert("Tourist added");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
</script>

<div class="mb-5">
  <h1 class="mt-3">Add a Tourist</h1>

  <form>
    <div class="mb-3">
      <label for="" class="form-label">Name</label>
      <input class="form-control" type="text" bind:value={tourist.name} />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">email</label>
      <input class="form-control" type="email" bind:value={tourist.email} />
    </div>
    <button on:click={addTourist} type="button" class="btn btn-primary">
      Add Tourist
    </button>
  </form>
</div>
