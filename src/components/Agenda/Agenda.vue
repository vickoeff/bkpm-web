<template>
    <div class="body-agenda">
    <ul class="ul-agenda">
    <li v-for="item in items" :key="item.id" style="--accent-color:#41516C">
        <div class="date">{{item.tanggal_mulai}}-{{item.tanggal_selesai}}</div>
        <div class="title">{{item.agenda}}</div>
    </li>
</ul>
</div>
</template>

<script>
    import getAgenda from '../../../api/getAgenda';
    export default {
        name: 'Agenda',
        data: () => ({
            items: null
        }),
        mounted () {
            this.getData()
        },
        methods: {
            async getData() {
            const agenda = await getAgenda()
            this.items = agenda.data
        }
        }
    }
</script>


<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

.body-agenda {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.h1-agenda {
  text-align: center;
}

.ul-agenda {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
.ul-agenda::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
.ul-agenda li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
.ul-agenda li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
.ul-agenda li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
.ul-agenda li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
.ul-agenda li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
.ul-agenda li .title,
.ul-agenda li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
.ul-agenda li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
.ul-agenda li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
.ul-agenda li .title::before,
.ul-agenda li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
.ul-agenda li .title::before {
  bottom: calc(100% + 0.125rem);
}

.ul-agenda li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  .ul-agenda {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  .ul-agenda::before {
    grid-column: 2;
  }
  .ul-agenda li:nth-child(odd) {
    grid-column: 1;
  }
  .ul-agenda li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  .ul-agenda li:nth-child(2) {
    grid-row: 2/4;
  }

  .ul-agenda li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  .ul-agenda li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  .ul-agenda li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

</style>