<script>
    import Grid from './MemoryGrid.svelte'
  </script>
  
  <main>
    <h1>Match up the meeting rooms as quickly as possible!</h1>
  
    <Grid />
  </main>
  
  <style>
    :root {
      font-family: Arial, Helvetica, sans-serif;
    }
  
    main {
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }
  
    h1 {
      color: #050a6f;
      font-size: 2rem;
      font-weight: 100;
      line-height: 1.1;
      margin: 2rem auto;
      max-width: none;
    }
  
    p {
      max-width: 14rem;
      margin: 1rem auto;
      line-height: 1.35;
    }
  

  </style>
  