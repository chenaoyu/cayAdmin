<template>
    <div class="one-page">
        <div class="card">
            <div class="stripe">
                <div class="text">Uiverse Homepod</div>
            </div>
            <div class="frame"></div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.card {
    height: 385px;
}

.card .text {
    text-align: center;
    background-color: #bebebe;
    width: 190px;
    padding: 3px 0;
    margin: auto;
    margin-top: 150px;
    border: solid 2px;
    border-radius: 10px;
    font-weight: bold;
    color: #3d3d3d;
    box-shadow: 0px 1px, inset 0 0 4px #000, 3px 3px 3px #000000a6;
}

.stripe {
    background: repeating-linear-gradient(45deg,
            rgba(141, 143, 149, 0.35) 0,
            rgba(141, 143, 149, 0.35) 2px,
            transparent 2px,
            transparent 6px),
        repeating-linear-gradient(135deg,
            rgba(141, 143, 149, 0.35) 0,
            rgba(141, 143, 149, 0.35) 2px,
            transparent 2px,
            transparent 6px),
        repeating-linear-gradient(45deg,
            transparent 0,
            transparent 2px,
            rgba(29, 30, 32, 0.35) 2px,
            rgba(29, 30, 32, 0.35) 4px,
            transparent 4px,
            transparent 6px),
        repeating-linear-gradient(135deg,
            transparent 0,
            transparent 2px,
            rgba(29, 30, 32, 0.35) 2px,
            rgba(29, 30, 32, 0.35) 4px,
            transparent 4px,
            transparent 6px);
    border-radius: 80px;
    box-shadow: inset 0 0 0 2px #36373a, inset 0 0 40px 1px #1d1e20,
        inset 0 12px 24px 1px #9b9ca1, inset 0 -12px 24px 1px #050505;
    height: 385px;
    left: calc(50% - 160px);
    overflow: hidden;
    position: absolute;
    top: 5px;
    width: 320px;
    z-index: 9;
    color: #404040;
}

.frame {
    background: linear-gradient(to right,
            #36373a 0,
            #8d8f95 25%,
            #1d1e20 60%,
            #111112 90%,
            #1d1e20 100%);
    border-radius: 80px;
    box-shadow: inset 0 0 0 2px #36373a, inset 0 0 40px 1px #1d1e20,
        inset 0 12px 40px 1px #fff, inset 0 -24px 40px 1px #000;
    height: 385px;
    margin: 5px auto;
    position: absolute;
    width: 320px;
    left: calc(50% - 160px);
}

.frame::after,
.frame::before {
    content: "";
    position: absolute;
    border-radius: 50% 50% 8px 8px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10px;
    width: 170px;
    background-color: #404040;
}

.frame::after {
    bottom: 0;
    border-radius: 0 0 10% 10% / 0 0 8px 8px;
    transform: translate(-50%, 50%);
    background-color: #131313;
}
</style>