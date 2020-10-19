<template>
  <div class="inline">
        <time :datetime="date" class="icon">
            <em>{{ date | moment("ddd") }}</em>
            <strong>{{ date | moment("MMM")}}</strong>
            <span>{{ date | moment("D") }}</span>
        </time>
  </div>
</template>

<script>
export default {
    props: ['date']
}
</script>

<style>
time.icon
{
    font-size: 1em; /* change icon size */
    display: block;
    position: relative;
    width: 3em;
    height: 3em;
    background-color: #fff;
    border-radius: 0.3em;
    box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
    overflow: hidden;
}

time.icon *
{
    display: block;
    width: 100%;
    font-size: 0.4em;
    font-weight: bold;
    font-style: normal;
    text-align: center;
}

time.icon strong
{
    position: absolute;
    top: 0;
    padding: 0.1em 0;
    color: #fff;
    background-color: #fd9f1b;
    border-bottom: 1px dashed #f37302;
    box-shadow: 0 2px 0 #fd9f1b;
}

time.icon em
{
    position: absolute;
    bottom: 3em;
    color: #fd9f1b;
}

time.icon span
{
    font-size: 1.3em;
    letter-spacing: -0.05em;
    padding-top: 1em;
    color: #2f2f2f;
}

div.inline{
    display: inline-block;
}
</style>