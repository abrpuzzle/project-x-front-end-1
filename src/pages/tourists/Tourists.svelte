<script>
    import axios from "axios";
    import { onMount } from "svelte";
    let tourists = [];
    onMount(() => {
        getTourists();
    });
    function getTourists() {
        axios
            .get("http://localhost:8080/projectx/tourists")
            .then((response) => {
                tourists = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Tourists</h1>
    <a href="#/createtourist">+ Add Tourist</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {#each tourists as tourist}
                <tr>
                    <td>
                        <a href={"#/tourists/" + tourist.id}>
                            {tourist.id}
                        </a>
                    </td>
                    <td>
                        {tourist.name}
                    </td>
                    <td>
                        {tourist.email}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
