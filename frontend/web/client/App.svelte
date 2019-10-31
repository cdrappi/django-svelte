<script>
  import API_HOST from "./api_config";
  import Auth from "./components/Auth.svelte";
  import LoggedInApp from "./components/LoggedInApp.svelte";
  import LoggedOutApp from "./components/LoggedOutApp.svelte";
  import { getToken } from "./utils";

  let isLoggedIn = false;
</script>

<Auth bind:isLoggedIn />
{#if isLoggedIn}
  <LoggedInApp />
{:else}
  <LoggedOutApp />
{/if}
