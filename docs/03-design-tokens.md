---
title: Design Tokens
status: published
---
<p>Design Tokens are an agnostic way to store variables such as typography, color, and spacing. They are the critical ingredients of a UI, but are not exactly functional on their own.</p>

<p>This UI component library features the following tokens:</p>

<h2>🎨 Colour Palette</h2>
<h3>Basic</h3>
<div class="swatches">
    <div class="color-swatch c-white" style="background-color:#000000;">
        Black<br>
        <small>rgba(0, 0, 0, 1) - #000000</small>
    </div>
    <div class="color-swatch c-white" style="background-color:#616161;">
        Lighter Black<br>
        <small>rgba(97, 97, 97, 1) - #616161</small>
    </div>
    <div class="color-swatch c-white" style="background-color:#9E9E9E;">
        Grey<br>
        <small>rgba(158, 158, 158, 1) - #9E9E9E</small>
    </div>
    <div class="color-swatch" style="background-color:#E0E0E0;">
        Grey Alt<br>
        <small>rgba(224, 224, 224, 1) - #E0E0E0</small>
    </div>
    <div class="color-swatch" style="background-color:#EEEEEE;">
        Darker White<br>
        <small>rgba(238, 238, 238, 1) - #EEEEEE</small>
    </div>
    <div class="color-swatch" style="background-color:#FAFAFA;">
        White<br>
        <small>rgba(250, 250, 250, 1) - #FAFAFA</small>
    </div>
</div>
<h3>Primary</h3>
<div class="swatches">
    <div class="color-swatch c-white" style="background-color:#2A2660;">
        Deep blue<br>
        <small>rgba(42, 38, 96, 1) - #2A2660</small>
    </div>
    <div class="color-swatch c-white" style="background-color:#312C83;">
        Dark blue<br>
        <small>rgba(49, 44, 131, 1) - #312C83</small>
    </div>
    <div class="color-swatch" style="background-color:#00DE97;">
        Vert<br>
        <small>rgba(0, 222, 151, 1) - #00DE97</small>
    </div>
</div>
<h3>Gradient</h3>
<div class="swatches">
    <div class="color-swatch c-white" style="background: linear-gradient(180deg, #00DE97 0%, #312C83 100%);">
        Green Blue<br>
        <small>linear-gradient(180deg, #00DE97 0%, #312C83 100%)</small>
    </div>
    <div class="color-swatch c-white" style="background: linear-gradient(180deg, #312C83 0%, #1B1B1B 100.61%);">
        Blue Black<br>
        <small>linear-gradient(180deg, #312C83 0%, #1B1B1B 100.61%)</small>
    </div>
</div>

___

<h2>✒️ Fonts</h2>
<dl>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:100;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans Thin</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:200;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans ExtraLight</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:300;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans Light</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:400;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans Regular</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:500;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans Medium</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:600;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans SemiBold</small></dd>
    <dt style="font-size:21px; font-family:'IBM Plex Sans'; font-weight:bold;">The quick brown fox jumps over the lazy dog</dt>
    <dd><small>IBM Plex Sans Bold</small></dd>
</dl>

___

<h2>📌 Iconography</h2>
<p>Detail any icon fonts or libraries used within this UI component library...</p>

___

<h2>💻 Media Queries</h2>

Breakpoints  | Use
------------ | -------------
$bp-tablet-down: 767px;         | @media screen and (max-width: $bp-tablet-down) {}
$bp-tablet-up: 768px;           | @media screen and (min-width: $bp-tablet-up) {}
$bp-desktop-down: 1149px;       | @media screen and (max-width: $bp-desktop-down) {}
$bp-desktop-up: 1150px;         | @media screen and (min-width: $bp-desktop-up) {}
$bp-desktop-large-down: 1399px; | @media screen and (max-width: $bp-desktop-large-down) {}
$bp-desktop-large-up: 1400px;   | @media screen and (min-width: $bp-desktop-large-up) {}

___

<h2>🛠 Mixins / Functions</h2>
<p>List your sass mixins and function here</p>

___

<h2>🔜 Variables</h2>
<p>Detail any other variables and their values used within this UI component library...</p>
