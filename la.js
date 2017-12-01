/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * https://github.com/twbs/bootstrap-sass/tree/v3.3.7 
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html {
	font-family: sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%
}

body {
	margin: 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
	display: block
}

audio,canvas,progress,video {
	display: inline-block;
	vertical-align: baseline
}

audio:not([controls]) {
	display: none;
	height: 0
}[hidden],template {
	display: none
}

a {
	background-color: transparent
}

a:active,a:hover {
	outline: 0
}

abbr[title] {
	border-bottom: 1px dotted
}

b,strong {
	font-weight: bold
}

dfn {
	font-style: italic
}

h1 {
	font-size: 2em;
	margin: 0.67em 0
}

mark {
	background: #ff0;
	color: #000
}

small {
	font-size: 80%
}

sub,sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sup {
	top: -0.5em
}

sub {
	bottom: -0.25em
}

img {
	border: 0
}

svg:not(:root) {
	overflow: hidden
}

figure {
	margin: 1em 40px
}

hr {
	box-sizing: content-box;
	height: 0
}

pre {
	overflow: auto
}

code,kbd,pre,samp {
	font-family: monospace, monospace;
	font-size: 1em
}

button,input,optgroup,select,textarea {
	color: inherit;
	font: inherit;
	margin: 0
}

button {
	overflow: visible
}

button,select {
	text-transform: none
}

button,html input[type="button"],input[type="reset"],input[type="submit"] {
	-webkit-appearance: button;
	cursor: pointer
}

button[disabled],html input[disabled] {
	cursor: default
}

button::-moz-focus-inner,input::-moz-focus-inner {
	border: 0;
	padding: 0
}

input {
	line-height: normal
}

input[type="checkbox"],input[type="radio"] {
	box-sizing: border-box;
	padding: 0
}

input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {
	height: auto
}

input[type="search"] {
	-webkit-appearance: textfield;
	box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none
}

fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em
}

legend {
	border: 0;
	padding: 0
}

textarea {
	overflow: auto
}

optgroup {
	font-weight: bold
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

td,th {
	padding: 0
}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print {
	*,*:before,*:after {
		background: transparent !important;
		color: #000 !important;
		box-shadow: none !important;
		text-shadow: none !important
	}

	a,a:visited {
		text-decoration: underline
	}

	a[href]:after {
		content: " (" attr(href) ")"
	}

	abbr[title]:after {
		content: " (" attr(title) ")"
	}

	a[href^="#"]:after,a[href^="javascript:"]:after {
		content: ""
	}

	pre,blockquote {
		border: 1px solid #999;
		page-break-inside: avoid
	}

	thead {
		display: table-header-group
	}

	tr,img {
		page-break-inside: avoid
	}

	img {
		max-width: 100% !important
	}

	p,h2,h3 {
		orphans: 3;
		widows: 3
	}

	h2,h3 {
		page-break-after: avoid
	}

	.navbar {
		display: none
	}

	.btn>.caret,.button>.caret,.dropup>.btn>.caret,.dropup>.button>.caret {
		border-top-color: #000 !important
	}

	.label {
		border: 1px solid #000
	}

	.table {
		border-collapse: collapse !important
	}

	.table td,.table th {
		background-color: #fff !important
	}

	.table-bordered th,.table-bordered td {
		border: 1px solid #ddd !important
	}
}

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

*:before,*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

html {
	font-size: 10px;
	-webkit-tap-highlight-color: transparent
}

body {
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	font-size: 14px;
	line-height: 1.42857;
	color: #333;
	background-color: #fff
}

input,button,select,textarea {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit
}

a {
	color: #337ab7;
	text-decoration: none
}

a:hover,a:focus {
	color: #23527c;
	text-decoration: underline
}

a:focus {
	outline: 5px auto -webkit-focus-ring-color;
	outline-offset: -2px
}

figure {
	margin: 0
}

img {
	vertical-align: middle
}

.img-responsive {
	display: block;
	max-width: 100%;
	height: auto
}

.img-rounded {
	border-radius: 6px
}

.img-thumbnail {
	padding: 4px;
	line-height: 1.42857;
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 4px;
	-webkit-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	display: inline-block;
	max-width: 100%;
	height: auto
}

.img-circle {
	border-radius: 50%
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
	border: 0;
	border-top: 1px solid #eee
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0
}

.sr-only-focusable:active,.sr-only-focusable:focus {
	position: static;
	width: auto;
	height: auto;
	margin: 0;
	overflow: visible;
	clip: auto
}[role="button"] {
	cursor: pointer
}

h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
	font-family: inherit;
	font-weight: 500;
	line-height: 1.1;
	color: inherit
}

h1 small,h1 .small,h2 small,h2 .small,h3 small,h3 .small,h4 small,h4 .small,h5 small,h5 .small,h6 small,h6 .small,.h1 small,.h1 .small,.h2 small,.h2 .small,.h3 small,.h3 .small,.h4 small,.h4 .small,.h5 small,.h5 .small,.h6 small,.h6 .small {
	font-weight: normal;
	line-height: 1;
	color: #777
}

h1,.h1,h2,.h2,h3,.h3 {
	margin-top: 20px;
	margin-bottom: 10px
}

h1 small,h1 .small,.h1 small,.h1 .small,h2 small,h2 .small,.h2 small,.h2 .small,h3 small,h3 .small,.h3 small,.h3 .small {
	font-size: 65%
}

h4,.h4,h5,.h5,h6,.h6 {
	margin-top: 10px;
	margin-bottom: 10px
}

h4 small,h4 .small,.h4 small,.h4 .small,h5 small,h5 .small,.h5 small,.h5 .small,h6 small,h6 .small,.h6 small,.h6 .small {
	font-size: 75%
}

h1,.h1 {
	font-size: 36px
}

h2,.h2 {
	font-size: 30px
}

h3,.h3 {
	font-size: 24px
}

h4,.h4 {
	font-size: 18px
}

h5,.h5 {
	font-size: 14px
}

h6,.h6 {
	font-size: 12px
}

p {
	margin: 0 0 10px
}

.lead {
	margin-bottom: 20px;
	font-size: 16px;
	font-weight: 300;
	line-height: 1.4
}

@media (min-width: 768px) {
	.lead {
		font-size: 21px
	}
}

small,.small {
	font-size: 85%
}

mark,.mark {
	background-color: #fcf8e3;
	padding: .2em
}

.text-left {
	text-align: left
}

.text-right {
	text-align: right
}

.text-center {
	text-align: center
}

.text-nowrap {
	white-space: nowrap
}

.text-lowercase {
	text-transform: lowercase
}

.text-uppercase,.initialism {
	text-transform: uppercase
}

.text-capitalize {
	text-transform: capitalize
}

.text-muted {
	color: #777
}

.text-primary {
	color: #337ab7
}

a.text-primary:hover,a.text-primary:focus {
	color: #286090
}

.text-success {
	color: #3c763d
}

a.text-success:hover,a.text-success:focus {
	color: #2b542c
}

.text-info {
	color: #31708f
}

a.text-info:hover,a.text-info:focus {
	color: #245269
}

.text-warning {
	color: #8a6d3b
}

a.text-warning:hover,a.text-warning:focus {
	color: #66512c
}

.text-danger {
	color: #a94442
}

a.text-danger:hover,a.text-danger:focus {
	color: #843534
}

.bg-primary {
	color: #fff
}

.bg-primary {
	background-color: #337ab7
}

a.bg-primary:hover,a.bg-primary:focus {
	background-color: #286090
}

.bg-success {
	background-color: #dff0d8
}

a.bg-success:hover,a.bg-success:focus {
	background-color: #c1e2b3
}

.bg-info {
	background-color: #d9edf7
}

a.bg-info:hover,a.bg-info:focus {
	background-color: #afd9ee
}

.bg-warning {
	background-color: #fcf8e3
}

a.bg-warning:hover,a.bg-warning:focus {
	background-color: #f7ecb5
}

.bg-danger {
	background-color: #f2dede
}

a.bg-danger:hover,a.bg-danger:focus {
	background-color: #e4b9b9
}

.page-header {
	padding-bottom: 9px;
	margin: 40px 0 20px;
	border-bottom: 1px solid #eee
}

ul,ol {
	margin-top: 0;
	margin-bottom: 10px
}

ul ul,ul ol,ol ul,ol ol {
	margin-bottom: 0
}

.list-unstyled {
	padding-left: 0;
	list-style: none
}

.list-inline {
	padding-left: 0;
	list-style: none;
	margin-left: -5px
}

.list-inline>li {
	display: inline-block;
	padding-left: 5px;
	padding-right: 5px
}

dl {
	margin-top: 0;
	margin-bottom: 20px
}

dt,dd {
	line-height: 1.42857
}

dt {
	font-weight: bold
}

dd {
	margin-left: 0
}

.dl-horizontal dd:before,.dl-horizontal dd:after {
	content: " ";
	display: table
}

.dl-horizontal dd:after {
	clear: both
}

@media (min-width: 768px) {
	.dl-horizontal dt {
		float: left;
		width: 160px;
		clear: left;
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.dl-horizontal dd {
		margin-left: 180px
	}
}

abbr[title],abbr[data-original-title] {
	cursor: help;
	border-bottom: 1px dotted #777
}

.initialism {
	font-size: 90%
}

blockquote {
	padding: 10px 20px;
	margin: 0 0 20px;
	font-size: 17.5px;
	border-left: 5px solid #eee
}

blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child {
	margin-bottom: 0
}

blockquote footer,blockquote small,blockquote .small {
	display: block;
	font-size: 80%;
	line-height: 1.42857;
	color: #777
}

blockquote footer:before,blockquote small:before,blockquote .small:before {
	content: '\2014 \00A0'
}

.blockquote-reverse,blockquote.pull-right {
	padding-right: 15px;
	padding-left: 0;
	border-right: 5px solid #eee;
	border-left: 0;
	text-align: right
}

.blockquote-reverse footer:before,.blockquote-reverse small:before,.blockquote-reverse .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before,blockquote.pull-right .small:before {
	content: ''
}

.blockquote-reverse footer:after,.blockquote-reverse small:after,.blockquote-reverse .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after,blockquote.pull-right .small:after {
	content: '\00A0 \2014'
}

address {
	margin-bottom: 20px;
	font-style: normal;
	line-height: 1.42857
}

code,kbd,pre,samp {
	font-family: Menlo,Monaco,Consolas,"Courier New",monospace
}

code {
	padding: 2px 4px;
	font-size: 90%;
	color: #c7254e;
	background-color: #f9f2f4;
	border-radius: 4px
}

kbd {
	padding: 2px 4px;
	font-size: 90%;
	color: #fff;
	background-color: #333;
	border-radius: 3px;
	box-shadow: inset 0 -1px 0 rgba(0,0,0,0.25)
}

kbd kbd {
	padding: 0;
	font-size: 100%;
	font-weight: bold;
	box-shadow: none
}

pre {
	display: block;
	padding: 9.5px;
	margin: 10px 0;
	font-size: 13px;
	line-height: 1.42857;
	word-break: break-all;
	word-wrap: break-word;
	color: #333;
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 4px
}

pre code {
	padding: 0;
	font-size: inherit;
	color: inherit;
	white-space: pre-wrap;
	background-color: transparent;
	border-radius: 0
}

.pre-scrollable {
	max-height: 340px;
	overflow-y: scroll
}

.container {
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px
}

.container:before,.container:after {
	content: " ";
	display: table
}

.container:after {
	clear: both
}

@media (min-width: 768px) {
	.container {
		width: 750px
	}
}

@media (min-width: 992px) {
	.container {
		width: 970px
	}
}

@media (min-width: 1440px) {
	.container {
		width: 1170px
	}
}

.container-fluid {
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px
}

.container-fluid:before,.container-fluid:after {
	content: " ";
	display: table
}

.container-fluid:after {
	clear: both
}

.row {
	margin-left: -15px;
	margin-right: -15px
}

.row:before,.row:after {
	content: " ";
	display: table
}

.row:after {
	clear: both
}

.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12 {
	position: relative;
	min-height: 1px;
	padding-left: 15px;
	padding-right: 15px
}

.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12 {
	float: left
}

.col-xs-1 {
	width: 8.33333%
}

.col-xs-2 {
	width: 16.66667%
}

.col-xs-3 {
	width: 25%
}

.col-xs-4 {
	width: 33.33333%
}

.col-xs-5 {
	width: 41.66667%
}

.col-xs-6 {
	width: 50%
}

.col-xs-7 {
	width: 58.33333%
}

.col-xs-8 {
	width: 66.66667%
}

.col-xs-9 {
	width: 75%
}

.col-xs-10 {
	width: 83.33333%
}

.col-xs-11 {
	width: 91.66667%
}

.col-xs-12 {
	width: 100%
}

.col-xs-pull-0 {
	right: auto
}

.col-xs-pull-1 {
	right: 8.33333%
}

.col-xs-pull-2 {
	right: 16.66667%
}

.col-xs-pull-3 {
	right: 25%
}

.col-xs-pull-4 {
	right: 33.33333%
}

.col-xs-pull-5 {
	right: 41.66667%
}

.col-xs-pull-6 {
	right: 50%
}

.col-xs-pull-7 {
	right: 58.33333%
}

.col-xs-pull-8 {
	right: 66.66667%
}

.col-xs-pull-9 {
	right: 75%
}

.col-xs-pull-10 {
	right: 83.33333%
}

.col-xs-pull-11 {
	right: 91.66667%
}

.col-xs-pull-12 {
	right: 100%
}

.col-xs-push-0 {
	left: auto
}

.col-xs-push-1 {
	left: 8.33333%
}

.col-xs-push-2 {
	left: 16.66667%
}

.col-xs-push-3 {
	left: 25%
}

.col-xs-push-4 {
	left: 33.33333%
}

.col-xs-push-5 {
	left: 41.66667%
}

.col-xs-push-6 {
	left: 50%
}

.col-xs-push-7 {
	left: 58.33333%
}

.col-xs-push-8 {
	left: 66.66667%
}

.col-xs-push-9 {
	left: 75%
}

.col-xs-push-10 {
	left: 83.33333%
}

.col-xs-push-11 {
	left: 91.66667%
}

.col-xs-push-12 {
	left: 100%
}

.col-xs-offset-0 {
	margin-left: 0%
}

.col-xs-offset-1 {
	margin-left: 8.33333%
}

.col-xs-offset-2 {
	margin-left: 16.66667%
}

.col-xs-offset-3 {
	margin-left: 25%
}

.col-xs-offset-4 {
	margin-left: 33.33333%
}

.col-xs-offset-5 {
	margin-left: 41.66667%
}

.col-xs-offset-6 {
	margin-left: 50%
}

.col-xs-offset-7 {
	margin-left: 58.33333%
}

.col-xs-offset-8 {
	margin-left: 66.66667%
}

.col-xs-offset-9 {
	margin-left: 75%
}

.col-xs-offset-10 {
	margin-left: 83.33333%
}

.col-xs-offset-11 {
	margin-left: 91.66667%
}

.col-xs-offset-12 {
	margin-left: 100%
}

@media (min-width: 768px) {
	.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12 {
		float: left
	}

	.col-sm-1 {
		width: 8.33333%
	}

	.col-sm-2 {
		width: 16.66667%
	}

	.col-sm-3 {
		width: 25%
	}

	.col-sm-4 {
		width: 33.33333%
	}

	.col-sm-5 {
		width: 41.66667%
	}

	.col-sm-6 {
		width: 50%
	}

	.col-sm-7 {
		width: 58.33333%
	}

	.col-sm-8 {
		width: 66.66667%
	}

	.col-sm-9 {
		width: 75%
	}

	.col-sm-10 {
		width: 83.33333%
	}

	.col-sm-11 {
		width: 91.66667%
	}

	.col-sm-12 {
		width: 100%
	}

	.col-sm-pull-0 {
		right: auto
	}

	.col-sm-pull-1 {
		right: 8.33333%
	}

	.col-sm-pull-2 {
		right: 16.66667%
	}

	.col-sm-pull-3 {
		right: 25%
	}

	.col-sm-pull-4 {
		right: 33.33333%
	}

	.col-sm-pull-5 {
		right: 41.66667%
	}

	.col-sm-pull-6 {
		right: 50%
	}

	.col-sm-pull-7 {
		right: 58.33333%
	}

	.col-sm-pull-8 {
		right: 66.66667%
	}

	.col-sm-pull-9 {
		right: 75%
	}

	.col-sm-pull-10 {
		right: 83.33333%
	}

	.col-sm-pull-11 {
		right: 91.66667%
	}

	.col-sm-pull-12 {
		right: 100%
	}

	.col-sm-push-0 {
		left: auto
	}

	.col-sm-push-1 {
		left: 8.33333%
	}

	.col-sm-push-2 {
		left: 16.66667%
	}

	.col-sm-push-3 {
		left: 25%
	}

	.col-sm-push-4 {
		left: 33.33333%
	}

	.col-sm-push-5 {
		left: 41.66667%
	}

	.col-sm-push-6 {
		left: 50%
	}

	.col-sm-push-7 {
		left: 58.33333%
	}

	.col-sm-push-8 {
		left: 66.66667%
	}

	.col-sm-push-9 {
		left: 75%
	}

	.col-sm-push-10 {
		left: 83.33333%
	}

	.col-sm-push-11 {
		left: 91.66667%
	}

	.col-sm-push-12 {
		left: 100%
	}

	.col-sm-offset-0 {
		margin-left: 0%
	}

	.col-sm-offset-1 {
		margin-left: 8.33333%
	}

	.col-sm-offset-2 {
		margin-left: 16.66667%
	}

	.col-sm-offset-3 {
		margin-left: 25%
	}

	.col-sm-offset-4 {
		margin-left: 33.33333%
	}

	.col-sm-offset-5 {
		margin-left: 41.66667%
	}

	.col-sm-offset-6 {
		margin-left: 50%
	}

	.col-sm-offset-7 {
		margin-left: 58.33333%
	}

	.col-sm-offset-8 {
		margin-left: 66.66667%
	}

	.col-sm-offset-9 {
		margin-left: 75%
	}

	.col-sm-offset-10 {
		margin-left: 83.33333%
	}

	.col-sm-offset-11 {
		margin-left: 91.66667%
	}

	.col-sm-offset-12 {
		margin-left: 100%
	}
}

@media (min-width: 992px) {
	.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12 {
		float: left
	}

	.col-md-1 {
		width: 8.33333%
	}

	.col-md-2 {
		width: 16.66667%
	}

	.col-md-3 {
		width: 25%
	}

	.col-md-4 {
		width: 33.33333%
	}

	.col-md-5 {
		width: 41.66667%
	}

	.col-md-6 {
		width: 50%
	}

	.col-md-7 {
		width: 58.33333%
	}

	.col-md-8 {
		width: 66.66667%
	}

	.col-md-9 {
		width: 75%
	}

	.col-md-10 {
		width: 83.33333%
	}

	.col-md-11 {
		width: 91.66667%
	}

	.col-md-12 {
		width: 100%
	}

	.col-md-pull-0 {
		right: auto
	}

	.col-md-pull-1 {
		right: 8.33333%
	}

	.col-md-pull-2 {
		right: 16.66667%
	}

	.col-md-pull-3 {
		right: 25%
	}

	.col-md-pull-4 {
		right: 33.33333%
	}

	.col-md-pull-5 {
		right: 41.66667%
	}

	.col-md-pull-6 {
		right: 50%
	}

	.col-md-pull-7 {
		right: 58.33333%
	}

	.col-md-pull-8 {
		right: 66.66667%
	}

	.col-md-pull-9 {
		right: 75%
	}

	.col-md-pull-10 {
		right: 83.33333%
	}

	.col-md-pull-11 {
		right: 91.66667%
	}

	.col-md-pull-12 {
		right: 100%
	}

	.col-md-push-0 {
		left: auto
	}

	.col-md-push-1 {
		left: 8.33333%
	}

	.col-md-push-2 {
		left: 16.66667%
	}

	.col-md-push-3 {
		left: 25%
	}

	.col-md-push-4 {
		left: 33.33333%
	}

	.col-md-push-5 {
		left: 41.66667%
	}

	.col-md-push-6 {
		left: 50%
	}

	.col-md-push-7 {
		left: 58.33333%
	}

	.col-md-push-8 {
		left: 66.66667%
	}

	.col-md-push-9 {
		left: 75%
	}

	.col-md-push-10 {
		left: 83.33333%
	}

	.col-md-push-11 {
		left: 91.66667%
	}

	.col-md-push-12 {
		left: 100%
	}

	.col-md-offset-0 {
		margin-left: 0%
	}

	.col-md-offset-1 {
		margin-left: 8.33333%
	}

	.col-md-offset-2 {
		margin-left: 16.66667%
	}

	.col-md-offset-3 {
		margin-left: 25%
	}

	.col-md-offset-4 {
		margin-left: 33.33333%
	}

	.col-md-offset-5 {
		margin-left: 41.66667%
	}

	.col-md-offset-6 {
		margin-left: 50%
	}

	.col-md-offset-7 {
		margin-left: 58.33333%
	}

	.col-md-offset-8 {
		margin-left: 66.66667%
	}

	.col-md-offset-9 {
		margin-left: 75%
	}

	.col-md-offset-10 {
		margin-left: 83.33333%
	}

	.col-md-offset-11 {
		margin-left: 91.66667%
	}

	.col-md-offset-12 {
		margin-left: 100%
	}
}

@media (min-width: 1440px) {
	.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12 {
		float: left
	}

	.col-lg-1 {
		width: 8.33333%
	}

	.col-lg-2 {
		width: 16.66667%
	}

	.col-lg-3 {
		width: 25%
	}

	.col-lg-4 {
		width: 33.33333%
	}

	.col-lg-5 {
		width: 41.66667%
	}

	.col-lg-6 {
		width: 50%
	}

	.col-lg-7 {
		width: 58.33333%
	}

	.col-lg-8 {
		width: 66.66667%
	}

	.col-lg-9 {
		width: 75%
	}

	.col-lg-10 {
		width: 83.33333%
	}

	.col-lg-11 {
		width: 91.66667%
	}

	.col-lg-12 {
		width: 100%
	}

	.col-lg-pull-0 {
		right: auto
	}

	.col-lg-pull-1 {
		right: 8.33333%
	}

	.col-lg-pull-2 {
		right: 16.66667%
	}

	.col-lg-pull-3 {
		right: 25%
	}

	.col-lg-pull-4 {
		right: 33.33333%
	}

	.col-lg-pull-5 {
		right: 41.66667%
	}

	.col-lg-pull-6 {
		right: 50%
	}

	.col-lg-pull-7 {
		right: 58.33333%
	}

	.col-lg-pull-8 {
		right: 66.66667%
	}

	.col-lg-pull-9 {
		right: 75%
	}

	.col-lg-pull-10 {
		right: 83.33333%
	}

	.col-lg-pull-11 {
		right: 91.66667%
	}

	.col-lg-pull-12 {
		right: 100%
	}

	.col-lg-push-0 {
		left: auto
	}

	.col-lg-push-1 {
		left: 8.33333%
	}

	.col-lg-push-2 {
		left: 16.66667%
	}

	.col-lg-push-3 {
		left: 25%
	}

	.col-lg-push-4 {
		left: 33.33333%
	}

	.col-lg-push-5 {
		left: 41.66667%
	}

	.col-lg-push-6 {
		left: 50%
	}

	.col-lg-push-7 {
		left: 58.33333%
	}

	.col-lg-push-8 {
		left: 66.66667%
	}

	.col-lg-push-9 {
		left: 75%
	}

	.col-lg-push-10 {
		left: 83.33333%
	}

	.col-lg-push-11 {
		left: 91.66667%
	}

	.col-lg-push-12 {
		left: 100%
	}

	.col-lg-offset-0 {
		margin-left: 0%
	}

	.col-lg-offset-1 {
		margin-left: 8.33333%
	}

	.col-lg-offset-2 {
		margin-left: 16.66667%
	}

	.col-lg-offset-3 {
		margin-left: 25%
	}

	.col-lg-offset-4 {
		margin-left: 33.33333%
	}

	.col-lg-offset-5 {
		margin-left: 41.66667%
	}

	.col-lg-offset-6 {
		margin-left: 50%
	}

	.col-lg-offset-7 {
		margin-left: 58.33333%
	}

	.col-lg-offset-8 {
		margin-left: 66.66667%
	}

	.col-lg-offset-9 {
		margin-left: 75%
	}

	.col-lg-offset-10 {
		margin-left: 83.33333%
	}

	.col-lg-offset-11 {
		margin-left: 91.66667%
	}

	.col-lg-offset-12 {
		margin-left: 100%
	}
}

table {
	background-color: transparent
}

caption {
	padding-top: 8px;
	padding-bottom: 8px;
	color: #777;
	text-align: left
}

th {
	text-align: left
}

.table {
	width: 100%;
	max-width: 100%;
	margin-bottom: 20px
}

.table>thead>tr>th,.table>thead>tr>td,.table>tbody>tr>th,.table>tbody>tr>td,.table>tfoot>tr>th,.table>tfoot>tr>td {
	padding: 8px;
	line-height: 1.42857;
	vertical-align: top;
	border-top: 1px solid #ddd
}

.table>thead>tr>th {
	vertical-align: bottom;
	border-bottom: 2px solid #ddd
}

.table>caption+thead>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>th,.table>thead:first-child>tr:first-child>td {
	border-top: 0
}

.table>tbody+tbody {
	border-top: 2px solid #ddd
}

.table .table {
	background-color: #fff
}

.table-condensed>thead>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>tfoot>tr>td {
	padding: 5px
}

.table-bordered {
	border: 1px solid #ddd
}

.table-bordered>thead>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>tfoot>tr>td {
	border: 1px solid #ddd
}

.table-bordered>thead>tr>th,.table-bordered>thead>tr>td {
	border-bottom-width: 2px
}

.table-striped>tbody>tr:nth-of-type(odd) {
	color: #000000;
	background-color: #f9f9f9
}

.table-hover>tbody>tr:hover {
	background-color: #f5f5f5
}

table col[class*="col-"] {
	position: static;
	float: none;
	display: table-column
}

table td[class*="col-"],table th[class*="col-"] {
	position: static;
	float: none;
	display: table-cell
}

.table>thead>tr>td.active,.table>thead>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th {
	background-color: #f5f5f5
}

.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th {
	background-color: #e8e8e8
}

.table>thead>tr>td.success,.table>thead>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th {
	background-color: #dff0d8
}

.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th {
	background-color: #d0e9c6
}

.table>thead>tr>td.info,.table>thead>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th {
	background-color: #d9edf7
}

.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th {
	background-color: #c4e3f3
}

.table>thead>tr>td.warning,.table>thead>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th {
	background-color: #fcf8e3
}

.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th {
	background-color: #faf2cc
}

.table>thead>tr>td.danger,.table>thead>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th {
	background-color: #f2dede
}

.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th {
	background-color: #ebcccc
}

.table-responsive {
	overflow-x: auto;
	min-height: 0.01%
}

@media screen and (max-width: 767px) {
	.table-responsive {
		width: 100%;
		margin-bottom: 15px;
		overflow-y: hidden;
		-ms-overflow-style: -ms-autohiding-scrollbar;
		border: 1px solid #ddd
	}

	.table-responsive>.table {
		margin-bottom: 0
	}

	.table-responsive>.table>thead>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>tfoot>tr>td {
		white-space: nowrap
	}

	.table-responsive>.table-bordered {
		border: 0
	}

	.table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child {
		border-left: 0
	}

	.table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child {
		border-right: 0
	}

	.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td {
		border-bottom: 0
	}
}

fieldset {
	padding: 0;
	margin: 0;
	border: 0;
	min-width: 0
}

legend {
	display: block;
	width: 100%;
	padding: 0;
	margin-bottom: 20px;
	font-size: 21px;
	line-height: inherit;
	color: #333;
	border: 0;
	border-bottom: 1px solid #e5e5e5
}

label {
	display: inline-block;
	max-width: 100%;
	margin-bottom: 5px;
	font-weight: bold
}

input[type="search"] {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

input[type="radio"],input[type="checkbox"] {
	margin: 4px 0 0;
	margin-top: 1px \9;
	line-height: normal
}

input[type="file"] {
	display: block
}

input[type="range"] {
	display: block;
	width: 100%
}

select[multiple],select[size] {
	height: auto
}

output {
	display: block;
	padding-top: 7px;
	font-size: 14px;
	line-height: 1.42857;
	color: #555
}

.form-control {
	display: block;
	width: 100%;
	height: 34px;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.42857;
	color: #555;
	background-color: #fff;
	background-image: none;
	border: 1px solid #ccc;
	border-radius: 4px;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	-webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
	-o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
	transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s
}

.form-control:focus {
	border-color: #66afe9;
	outline: 0;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)
}

.form-control:-moz-placeholder,.form-control::-moz-placeholder {
	color: #999;
	opacity: 1
}

.form-control:-ms-input-placeholder {
	color: #999
}

.form-control::-webkit-input-placeholder {
	color: #999
}

.form-control::-ms-expand {
	border: 0;
	background-color: transparent
}

.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control {
	background-color: #eee;
	opacity: 1
}

.form-control[disabled],fieldset[disabled] .form-control {
	cursor: not-allowed
}

textarea.form-control {
	height: auto
}

input[type="search"] {
	-webkit-appearance: none
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
	input[type="date"].form-control,input[type="time"].form-control,input[type="datetime-local"].form-control,input[type="month"].form-control {
		line-height: 34px
	}

	input[type="date"].input-sm,.input-group-sm input[type="date"],input[type="time"].input-sm,.input-group-sm input[type="time"],input[type="datetime-local"].input-sm,.input-group-sm input[type="datetime-local"],input[type="month"].input-sm,.input-group-sm input[type="month"] {
		line-height: 30px
	}

	input[type="date"].input-lg,.input-group-lg input[type="date"],input[type="time"].input-lg,.input-group-lg input[type="time"],input[type="datetime-local"].input-lg,.input-group-lg input[type="datetime-local"],input[type="month"].input-lg,.input-group-lg input[type="month"] {
		line-height: 46px
	}
}

.form-group {
	margin-bottom: 15px
}

.radio,.checkbox {
	position: relative;
	display: block;
	margin-top: 10px;
	margin-bottom: 10px
}

.radio label,.checkbox label {
	min-height: 20px;
	padding-left: 20px;
	margin-bottom: 0;
	font-weight: normal;
	cursor: pointer
}

.radio input[type="radio"],.radio-inline input[type="radio"],.checkbox input[type="checkbox"],.checkbox-inline input[type="checkbox"] {
	position: absolute;
	margin-left: -20px;
	margin-top: 4px \9
}

.radio+.radio,.checkbox+.checkbox {
	margin-top: -5px
}

.radio-inline,.checkbox-inline {
	position: relative;
	display: inline-block;
	padding-left: 20px;
	margin-bottom: 0;
	vertical-align: middle;
	font-weight: normal;
	cursor: pointer
}

.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline {
	margin-top: 0;
	margin-left: 10px
}

input[type="radio"][disabled],input[type="radio"].disabled,fieldset[disabled] input[type="radio"],input[type="checkbox"][disabled],input[type="checkbox"].disabled,fieldset[disabled] input[type="checkbox"] {
	cursor: not-allowed
}

.radio-inline.disabled,fieldset[disabled] .radio-inline,.checkbox-inline.disabled,fieldset[disabled] .checkbox-inline {
	cursor: not-allowed
}

.radio.disabled label,fieldset[disabled] .radio label,.checkbox.disabled label,fieldset[disabled] .checkbox label {
	cursor: not-allowed
}

.form-control-static {
	padding-top: 7px;
	padding-bottom: 7px;
	margin-bottom: 0;
	min-height: 34px
}

.form-control-static.input-lg,.form-control-static.input-sm {
	padding-left: 0;
	padding-right: 0
}

.input-sm {
	height: 30px;
	padding: 5px 10px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px
}

select.input-sm {
	height: 30px;
	line-height: 30px
}

textarea.input-sm,select[multiple].input-sm {
	height: auto
}

.form-group-sm .form-control {
	height: 30px;
	padding: 5px 10px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px
}

.form-group-sm select.form-control {
	height: 30px;
	line-height: 30px
}

.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control {
	height: auto
}

.form-group-sm .form-control-static {
	height: 30px;
	min-height: 32px;
	padding: 6px 10px;
	font-size: 12px;
	line-height: 1.5
}

.input-lg {
	height: 46px;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33333;
	border-radius: 6px
}

select.input-lg {
	height: 46px;
	line-height: 46px
}

textarea.input-lg,select[multiple].input-lg {
	height: auto
}

.form-group-lg .form-control {
	height: 46px;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33333;
	border-radius: 6px
}

.form-group-lg select.form-control {
	height: 46px;
	line-height: 46px
}

.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control {
	height: auto
}

.form-group-lg .form-control-static {
	height: 46px;
	min-height: 38px;
	padding: 11px 16px;
	font-size: 18px;
	line-height: 1.33333
}

.has-feedback {
	position: relative
}

.has-feedback .form-control {
	padding-right: 42.5px
}

.form-control-feedback {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	display: block;
	width: 34px;
	height: 34px;
	line-height: 34px;
	text-align: center;
	pointer-events: none
}

.input-lg+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback {
	width: 46px;
	height: 46px;
	line-height: 46px
}

.input-sm+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback {
	width: 30px;
	height: 30px;
	line-height: 30px
}

.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label {
	color: #3c763d
}

.has-success .form-control {
	border-color: #3c763d;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.has-success .form-control:focus {
	border-color: #2b542c;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168
}

.has-success .input-group-addon {
	color: #3c763d;
	border-color: #3c763d;
	background-color: #dff0d8
}

.has-success .form-control-feedback {
	color: #3c763d
}

.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label {
	color: #8a6d3b
}

.has-warning .form-control {
	border-color: #8a6d3b;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.has-warning .form-control:focus {
	border-color: #66512c;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b
}

.has-warning .input-group-addon {
	color: #8a6d3b;
	border-color: #8a6d3b;
	background-color: #fcf8e3
}

.has-warning .form-control-feedback {
	color: #8a6d3b
}

.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label {
	color: #a94442
}

.has-error .form-control {
	border-color: #a94442;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075)
}

.has-error .form-control:focus {
	border-color: #843534;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483
}

.has-error .input-group-addon {
	color: #a94442;
	border-color: #a94442;
	background-color: #f2dede
}

.has-error .form-control-feedback {
	color: #a94442
}

.has-feedback label ~ .form-control-feedback {
	top: 25px
}

.has-feedback label.sr-only ~ .form-control-feedback {
	top: 0
}

.help-block {
	display: block;
	margin-top: 5px;
	margin-bottom: 10px;
	color: #737373
}

@media (min-width: 768px) {
	.form-inline .form-group {
		display: inline-block;
		margin-bottom: 0;
		vertical-align: middle
	}

	.form-inline .form-control {
		display: inline-block;
		width: auto;
		vertical-align: middle
	}

	.form-inline .form-control-static {
		display: inline-block
	}

	.form-inline .input-group {
		display: inline-table;
		vertical-align: middle
	}

	.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control {
		width: auto
	}

	.form-inline .input-group>.form-control {
		width: 100%
	}

	.form-inline .control-label {
		margin-bottom: 0;
		vertical-align: middle
	}

	.form-inline .radio,.form-inline .checkbox {
		display: inline-block;
		margin-top: 0;
		margin-bottom: 0;
		vertical-align: middle
	}

	.form-inline .radio label,.form-inline .checkbox label {
		padding-left: 0
	}

	.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"] {
		position: relative;
		margin-left: 0
	}

	.form-inline .has-feedback .form-control-feedback {
		top: 0
	}
}

.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline {
	margin-top: 0;
	margin-bottom: 0;
	padding-top: 7px
}

.form-horizontal .radio,.form-horizontal .checkbox {
	min-height: 27px
}

.form-horizontal .form-group {
	margin-left: -15px;
	margin-right: -15px
}

.form-horizontal .form-group:before,.form-horizontal .form-group:after {
	content: " ";
	display: table
}

.form-horizontal .form-group:after {
	clear: both
}

@media (min-width: 768px) {
	.form-horizontal .control-label {
		text-align: right;
		margin-bottom: 0;
		padding-top: 7px
	}
}

.form-horizontal .has-feedback .form-control-feedback {
	right: 15px
}

@media (min-width: 768px) {
	.form-horizontal .form-group-lg .control-label {
		padding-top: 11px;
		font-size: 18px
	}
}

@media (min-width: 768px) {
	.form-horizontal .form-group-sm .control-label {
		padding-top: 6px;
		font-size: 12px
	}
}

.btn,.button {
	display: inline-block;
	margin-bottom: 0;
	font-weight: normal;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.42857;
	border-radius: 4px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.btn:focus,.button:focus,.btn.focus,.focus.button,.btn:active:focus,.button:active:focus,.btn:active.focus,.button:active.focus,.btn.active:focus,.active.button:focus,.btn.active.focus,.active.focus.button {
	outline: 5px auto -webkit-focus-ring-color;
	outline-offset: -2px
}

.btn:hover,.button:hover,.btn:focus,.button:focus,.btn.focus,.focus.button {
	color: #333;
	text-decoration: none
}

.btn:active,.button:active,.btn.active,.active.button {
	outline: 0;
	background-image: none;
	-webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
	box-shadow: inset 0 3px 5px rgba(0,0,0,0.125)
}

.btn.disabled,.disabled.button,.btn[disabled],[disabled].button,fieldset[disabled] .btn,fieldset[disabled] .button {
	cursor: not-allowed;
	opacity: .65;
	filter: alpha(opacity=65);
	-webkit-box-shadow: none;
	box-shadow: none
}

a.btn.disabled,a.disabled.button,fieldset[disabled] a.btn,fieldset[disabled] a.button {
	pointer-events: none
}

.btn-default {
	color: #333;
	background-color: #fff;
	border-color: #ccc
}

.btn-default:focus,.btn-default.focus {
	color: #333;
	background-color: #e6e6e6;
	border-color: #8c8c8c
}

.btn-default:hover {
	color: #333;
	background-color: #e6e6e6;
	border-color: #adadad
}

.btn-default:active,.btn-default.active,.open>.btn-default.dropdown-toggle {
	color: #333;
	background-color: #e6e6e6;
	border-color: #adadad
}

.btn-default:active:hover,.btn-default:active:focus,.btn-default:active.focus,.btn-default.active:hover,.btn-default.active:focus,.btn-default.active.focus,.open>.btn-default.dropdown-toggle:hover,.open>.btn-default.dropdown-toggle:focus,.open>.btn-default.dropdown-toggle.focus {
	color: #333;
	background-color: #d4d4d4;
	border-color: #8c8c8c
}

.btn-default:active,.btn-default.active,.open>.btn-default.dropdown-toggle {
	background-image: none
}

.btn-default.disabled:hover,.btn-default.disabled:focus,.btn-default.disabled.focus,.btn-default[disabled]:hover,.btn-default[disabled]:focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default:hover,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default.focus {
	background-color: #fff;
	border-color: #ccc
}

.btn-default .badge {
	color: #fff;
	background-color: #333
}

.btn-primary {
	color: #fff;
	background-color: #337ab7;
	border-color: #2e6da4
}

.btn-primary:focus,.btn-primary.focus {
	color: #fff;
	background-color: #286090;
	border-color: #122b40
}

.btn-primary:hover {
	color: #fff;
	background-color: #286090;
	border-color: #204d74
}

.btn-primary:active,.btn-primary.active,.open>.btn-primary.dropdown-toggle {
	color: #fff;
	background-color: #286090;
	border-color: #204d74
}

.btn-primary:active:hover,.btn-primary:active:focus,.btn-primary:active.focus,.btn-primary.active:hover,.btn-primary.active:focus,.btn-primary.active.focus,.open>.btn-primary.dropdown-toggle:hover,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle.focus {
	color: #fff;
	background-color: #204d74;
	border-color: #122b40
}

.btn-primary:active,.btn-primary.active,.open>.btn-primary.dropdown-toggle {
	background-image: none
}

.btn-primary.disabled:hover,.btn-primary.disabled:focus,.btn-primary.disabled.focus,.btn-primary[disabled]:hover,.btn-primary[disabled]:focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary:hover,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary.focus {
	background-color: #337ab7;
	border-color: #2e6da4
}

.btn-primary .badge {
	color: #337ab7;
	background-color: #fff
}

.btn-success {
	color: #fff;
	background-color: #5cb85c;
	border-color: #4cae4c
}

.btn-success:focus,.btn-success.focus {
	color: #fff;
	background-color: #449d44;
	border-color: #255625
}

.btn-success:hover {
	color: #fff;
	background-color: #449d44;
	border-color: #398439
}

.btn-success:active,.btn-success.active,.open>.btn-success.dropdown-toggle {
	color: #fff;
	background-color: #449d44;
	border-color: #398439
}

.btn-success:active:hover,.btn-success:active:focus,.btn-success:active.focus,.btn-success.active:hover,.btn-success.active:focus,.btn-success.active.focus,.open>.btn-success.dropdown-toggle:hover,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle.focus {
	color: #fff;
	background-color: #398439;
	border-color: #255625
}

.btn-success:active,.btn-success.active,.open>.btn-success.dropdown-toggle {
	background-image: none
}

.btn-success.disabled:hover,.btn-success.disabled:focus,.btn-success.disabled.focus,.btn-success[disabled]:hover,.btn-success[disabled]:focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success:hover,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success.focus {
	background-color: #5cb85c;
	border-color: #4cae4c
}

.btn-success .badge {
	color: #5cb85c;
	background-color: #fff
}

.btn-info {
	color: #fff;
	background-color: #5bc0de;
	border-color: #46b8da
}

.btn-info:focus,.btn-info.focus {
	color: #fff;
	background-color: #31b0d5;
	border-color: #1b6d85
}

.btn-info:hover {
	color: #fff;
	background-color: #31b0d5;
	border-color: #269abc
}

.btn-info:active,.btn-info.active,.open>.btn-info.dropdown-toggle {
	color: #fff;
	background-color: #31b0d5;
	border-color: #269abc
}

.btn-info:active:hover,.btn-info:active:focus,.btn-info:active.focus,.btn-info.active:hover,.btn-info.active:focus,.btn-info.active.focus,.open>.btn-info.dropdown-toggle:hover,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle.focus {
	color: #fff;
	background-color: #269abc;
	border-color: #1b6d85
}

.btn-info:active,.btn-info.active,.open>.btn-info.dropdown-toggle {
	background-image: none
}

.btn-info.disabled:hover,.btn-info.disabled:focus,.btn-info.disabled.focus,.btn-info[disabled]:hover,.btn-info[disabled]:focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info:hover,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info.focus {
	background-color: #5bc0de;
	border-color: #46b8da
}

.btn-info .badge {
	color: #5bc0de;
	background-color: #fff
}

.btn-warning {
	color: #fff;
	background-color: #f0ad4e;
	border-color: #eea236
}

.btn-warning:focus,.btn-warning.focus {
	color: #fff;
	background-color: #ec971f;
	border-color: #985f0d
}

.btn-warning:hover {
	color: #fff;
	background-color: #ec971f;
	border-color: #d58512
}

.btn-warning:active,.btn-warning.active,.open>.btn-warning.dropdown-toggle {
	color: #fff;
	background-color: #ec971f;
	border-color: #d58512
}

.btn-warning:active:hover,.btn-warning:active:focus,.btn-warning:active.focus,.btn-warning.active:hover,.btn-warning.active:focus,.btn-warning.active.focus,.open>.btn-warning.dropdown-toggle:hover,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle.focus {
	color: #fff;
	background-color: #d58512;
	border-color: #985f0d
}

.btn-warning:active,.btn-warning.active,.open>.btn-warning.dropdown-toggle {
	background-image: none
}

.btn-warning.disabled:hover,.btn-warning.disabled:focus,.btn-warning.disabled.focus,.btn-warning[disabled]:hover,.btn-warning[disabled]:focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning:hover,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning.focus {
	background-color: #f0ad4e;
	border-color: #eea236
}

.btn-warning .badge {
	color: #f0ad4e;
	background-color: #fff
}

.btn-danger {
	color: #fff;
	background-color: #d9534f;
	border-color: #d43f3a
}

.btn-danger:focus,.btn-danger.focus {
	color: #fff;
	background-color: #c9302c;
	border-color: #761c19
}

.btn-danger:hover {
	color: #fff;
	background-color: #c9302c;
	border-color: #ac2925
}

.btn-danger:active,.btn-danger.active,.open>.btn-danger.dropdown-toggle {
	color: #fff;
	background-color: #c9302c;
	border-color: #ac2925
}

.btn-danger:active:hover,.btn-danger:active:focus,.btn-danger:active.focus,.btn-danger.active:hover,.btn-danger.active:focus,.btn-danger.active.focus,.open>.btn-danger.dropdown-toggle:hover,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle.focus {
	color: #fff;
	background-color: #ac2925;
	border-color: #761c19
}

.btn-danger:active,.btn-danger.active,.open>.btn-danger.dropdown-toggle {
	background-image: none
}

.btn-danger.disabled:hover,.btn-danger.disabled:focus,.btn-danger.disabled.focus,.btn-danger[disabled]:hover,.btn-danger[disabled]:focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger:hover,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger.focus {
	background-color: #d9534f;
	border-color: #d43f3a
}

.btn-danger .badge {
	color: #d9534f;
	background-color: #fff
}

.btn-link {
	color: #337ab7;
	font-weight: normal;
	border-radius: 0
}

.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link {
	background-color: transparent;
	-webkit-box-shadow: none;
	box-shadow: none
}

.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active {
	border-color: transparent
}

.btn-link:hover,.btn-link:focus {
	color: #23527c;
	text-decoration: underline;
	background-color: transparent
}

.btn-link[disabled]:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:hover,fieldset[disabled] .btn-link:focus {
	color: #777;
	text-decoration: none
}

.btn-lg {
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33333;
	border-radius: 6px
}

.btn-sm {
	padding: 5px 10px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px
}

.btn-xs {
	padding: 1px 5px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px
}

.btn-block {
	display: block;
	width: 100%
}

.btn-block+.btn-block {
	margin-top: 5px
}

input[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block {
	width: 100%
}

.caret {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 2px;
	vertical-align: middle;
	border-top: 4px dashed;
	border-top: 4px solid \9;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent
}

.dropup,.dropdown {
	position: relative
}

.dropdown-toggle:focus {
	outline: 0
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1000;
	display: none;
	float: left;
	min-width: 160px;
	padding: 5px 0;
	margin: 2px 0 0;
	list-style: none;
	font-size: 14px;
	text-align: left;
	background-color: #fff;
	border: 1px solid #ccc;
	border: 1px solid rgba(0,0,0,0.15);
	border-radius: 4px;
	-webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	background-clip: padding-box
}

.dropdown-menu.pull-right {
	right: 0;
	left: auto
}

.dropdown-menu .divider {
	height: 1px;
	margin: 9px 0;
	overflow: hidden;
	background-color: #e5e5e5
}

.dropdown-menu>li>a {
	display: block;
	padding: 3px 20px;
	clear: both;
	font-weight: normal;
	line-height: 1.42857;
	color: #333;
	white-space: nowrap
}

.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus {
	text-decoration: none;
	color: #262626;
	background-color: #f5f5f5
}

.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus {
	color: #fff;
	text-decoration: none;
	outline: 0;
	background-color: #337ab7
}

.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus {
	color: #777
}

.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus {
	text-decoration: none;
	background-color: transparent;
	background-image: none;
	filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
	cursor: not-allowed
}

.open>.dropdown-menu {
	display: block
}

.open>a {
	outline: 0
}

.dropdown-menu-right {
	left: auto;
	right: 0
}

.dropdown-menu-left {
	left: 0;
	right: auto
}

.dropdown-header {
	display: block;
	padding: 3px 20px;
	font-size: 12px;
	line-height: 1.42857;
	color: #777;
	white-space: nowrap
}

.dropdown-backdrop {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	z-index: 990
}

.pull-right>.dropdown-menu {
	right: 0;
	left: auto
}

.dropup .caret,.navbar-fixed-bottom .dropdown .caret {
	border-top: 0;
	border-bottom: 4px dashed;
	border-bottom: 4px solid \9;
	content: ""
}

.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu {
	top: auto;
	bottom: 100%;
	margin-bottom: 2px
}

@media (min-width: 768px) {
	.navbar-right .dropdown-menu {
		right: 0;
		left: auto
	}

	.navbar-right .dropdown-menu-left {
		left: 0;
		right: auto
	}
}

.fade {
	opacity: 0;
	-webkit-transition: opacity 0.15s linear;
	-o-transition: opacity 0.15s linear;
	transition: opacity 0.15s linear
}

.fade.in {
	opacity: 1
}

.collapse {
	display: none
}

.collapse.in {
	display: block
}

tr.collapse.in {
	display: table-row
}

tbody.collapse.in {
	display: table-row-group
}

.collapsing {
	position: relative;
	height: 0;
	overflow: hidden;
	-webkit-transition-property: height,visibility;
	transition-property: height,visibility;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
	-webkit-transition-timing-function: ease;
	transition-timing-function: ease
}

.clearfix:before,.clearfix:after {
	content: " ";
	display: table
}

.clearfix:after {
	clear: both
}

.center-block {
	display: block;
	margin-left: auto;
	margin-right: auto
}

.pull-right {
	float: right !important
}

.pull-left {
	float: left !important
}

.hide {
	display: none !important
}

.show {
	display: block !important
}

.invisible {
	visibility: hidden
}

.text-hide {
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0
}

.hidden {
	display: none !important
}

.affix {
	position: fixed
}

@-ms-viewport {
	width:device-width
}

.visible-xs {
	display: none !important
}

.visible-sm {
	display: none !important
}

.visible-md {
	display: none !important
}

.visible-lg {
	display: none !important
}

.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block {
	display: none !important
}

@media (max-width: 767px) {
	.visible-xs {
		display: block !important
	}

	table.visible-xs {
		display: table !important
	}

	tr.visible-xs {
		display: table-row !important
	}

	th.visible-xs,td.visible-xs {
		display: table-cell !important
	}
}

@media (max-width: 767px) {
	.visible-xs-block {
		display: block !important
	}
}

@media (max-width: 767px) {
	.visible-xs-inline {
		display: inline !important
	}
}

@media (max-width: 767px) {
	.visible-xs-inline-block {
		display: inline-block !important
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	.visible-sm {
		display: block !important
	}

	table.visible-sm {
		display: table !important
	}

	tr.visible-sm {
		display: table-row !important
	}

	th.visible-sm,td.visible-sm {
		display: table-cell !important
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	.visible-sm-block {
		display: block !important
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	.visible-sm-inline {
		display: inline !important
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	.visible-sm-inline-block {
		display: inline-block !important
	}
}

@media (min-width: 992px) and (max-width: 1439px) {
	.visible-md {
		display: block !important
	}

	table.visible-md {
		display: table !important
	}

	tr.visible-md {
		display: table-row !important
	}

	th.visible-md,td.visible-md {
		display: table-cell !important
	}
}

@media (min-width: 992px) and (max-width: 1439px) {
	.visible-md-block {
		display: block !important
	}
}

@media (min-width: 992px) and (max-width: 1439px) {
	.visible-md-inline {
		display: inline !important
	}
}

@media (min-width: 992px) and (max-width: 1439px) {
	.visible-md-inline-block {
		display: inline-block !important
	}
}

@media (min-width: 1440px) {
	.visible-lg {
		display: block !important
	}

	table.visible-lg {
		display: table !important
	}

	tr.visible-lg {
		display: table-row !important
	}

	th.visible-lg,td.visible-lg {
		display: table-cell !important
	}
}

@media (min-width: 1440px) {
	.visible-lg-block {
		display: block !important
	}
}

@media (min-width: 1440px) {
	.visible-lg-inline {
		display: inline !important
	}
}

@media (min-width: 1440px) {
	.visible-lg-inline-block {
		display: inline-block !important
	}
}

@media (max-width: 767px) {
	.hidden-xs {
		display: none !important
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	.hidden-sm {
		display: none !important
	}
}

@media (min-width: 992px) and (max-width: 1439px) {
	.hidden-md {
		display: none !important
	}
}

@media (min-width: 1440px) {
	.hidden-lg {
		display: none !important
	}
}

.visible-print {
	display: none !important
}

@media print {
	.visible-print {
		display: block !important
	}

	table.visible-print {
		display: table !important
	}

	tr.visible-print {
		display: table-row !important
	}

	th.visible-print,td.visible-print {
		display: table-cell !important
	}
}

.visible-print-block {
	display: none !important
}

@media print {
	.visible-print-block {
		display: block !important
	}
}

.visible-print-inline {
	display: none !important
}

@media print {
	.visible-print-inline {
		display: inline !important
	}
}

.visible-print-inline-block {
	display: none !important
}

@media print {
	.visible-print-inline-block {
		display: inline-block !important
	}
}

@media print {
	.hidden-print {
		display: none !important
	}
}

.events-calendar .find-event__headline,.events-calendar .find-event__filter-title {
	letter-spacing: 0.05rem
}

.news-feed__title {
	text-transform: uppercase
}

.content-style-grey-light h1,.content-style-light h1,.content-style-light-texture h1,.content-style-grey-light h2,.content-style-light h2,.content-style-light-texture h2,.content-style-grey-light h3,.content-style-light h3,.content-style-light-texture h3,.content-style-grey-light h4,.content-style-light h4,.content-style-light-texture h4,.content-style-grey-light h5,.content-style-light h5,.content-style-light-texture h5,.content-style-grey-light h6,.content-style-light h6,.content-style-light-texture h6,.content-style-grey-light p,.content-style-light p,.content-style-light-texture p,.content-style-grey-light small,.content-style-light small,.content-style-light-texture small,.content-style-grey-light ul,.content-style-light ul,.content-style-light-texture ul,.content-style-grey-light li,.content-style-light li,.content-style-light-texture li,.content-style-grey-light a,.content-style-light a,.content-style-light-texture a,.content-style-grey-light sub,.content-style-light sub,.content-style-light-texture sub,.content-style-grey-light sup,.content-style-light sup,.content-style-light-texture sup {
	color: #000
}

.content-style-grey-light a:hover,.content-style-light a:hover,.content-style-light-texture a:hover {
	color: #f60
}

.content-style-grey-light select,.content-style-light select,.content-style-light-texture select {
	background-color: #fff;
	border: 2px solid #000
}

.content-style-dark h1,.content-style-grey-dark h1,.content-style-grey h1,.content-style-image h1,.content-style-dark h2,.content-style-grey-dark h2,.content-style-grey h2,.content-style-image h2,.content-style-dark h3,.content-style-grey-dark h3,.content-style-grey h3,.content-style-image h3,.content-style-dark h4,.content-style-grey-dark h4,.content-style-grey h4,.content-style-image h4,.content-style-dark h5,.content-style-grey-dark h5,.content-style-grey h5,.content-style-image h5,.content-style-dark h6,.content-style-grey-dark h6,.content-style-grey h6,.content-style-image h6,.content-style-dark p,.content-style-grey-dark p,.content-style-grey p,.content-style-image p,.content-style-dark small,.content-style-grey-dark small,.content-style-grey small,.content-style-image small,.content-style-dark ul,.content-style-grey-dark ul,.content-style-grey ul,.content-style-image ul,.content-style-dark li,.content-style-grey-dark li,.content-style-grey li,.content-style-image li,.content-style-dark a,.content-style-grey-dark a,.content-style-grey a,.content-style-image a,.content-style-dark sub,.content-style-grey-dark sub,.content-style-grey sub,.content-style-image sub,.content-style-dark sup,.content-style-grey-dark sup,.content-style-grey sup,.content-style-image sup {
	color: #fff
}

.content-style-dark a:hover,.content-style-grey-dark a:hover,.content-style-grey a:hover,.content-style-image a:hover {
	color: #f60
}

.content-style-dark select,.content-style-grey-dark select,.content-style-grey select,.content-style-image select {
	background-color: #000;
	border: 1px solid #fff
}

.content-style-grey-light .cta-btn,.content-style-light .cta-btn,.content-style-light-texture .cta-btn {
	background-color: #000;
	color: #fff
}

.content-style-grey-light .cta-btn:hover,.content-style-light .cta-btn:hover,.content-style-light-texture .cta-btn:hover,.content-style-grey-light .cta-btn:focus,.content-style-light .cta-btn:focus,.content-style-light-texture .cta-btn:focus {
	color: #fff
}

.content-style-dark .cta-btn,.content-style-grey-dark .cta-btn,.content-style-grey .cta-btn,.content-style-image .cta-btn {
	background-color: #fff;
	color: #000
}

.content-style-dark .cta-btn:hover,.content-style-grey-dark .cta-btn:hover,.content-style-grey .cta-btn:hover,.content-style-image .cta-btn:hover,.content-style-dark .cta-btn:focus,.content-style-grey-dark .cta-btn:focus,.content-style-grey .cta-btn:focus,.content-style-image .cta-btn:focus {
	color: #000
}

.content-style-grey-light .cta-link,.content-style-light .cta-link,.content-style-light-texture .cta-link {
	color: #000
}

.content-style-grey-light .cta-link:hover,.content-style-light .cta-link:hover,.content-style-light-texture .cta-link:hover,.content-style-grey-light .cta-link:focus,.content-style-light .cta-link:focus,.content-style-light-texture .cta-link:focus {
	color: #000;
	text-decoration: none
}

.content-style-dark .cta-link,.content-style-grey-dark .cta-link,.content-style-grey .cta-link,.content-style-image .cta-link {
	color: #fff
}

.content-style-dark .cta-link:hover,.content-style-grey-dark .cta-link:hover,.content-style-grey .cta-link:hover,.content-style-image .cta-link:hover,.content-style-dark .cta-link:focus,.content-style-grey-dark .cta-link:focus,.content-style-grey .cta-link:focus,.content-style-image .cta-link:focus {
	color: #fff;
	text-decoration: none
}

* {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

html {
	font-size: 10px;
	height: 100%;
	background: #000
}

html.rtl h1,html.rtl h2,html.rtl h3,html.rtl h4,html.rtl h5,html.rtl h6,html.rtl span,html.rtl u,html.rtl i,html.rtl a,html.rtl p,html.rtl li,html.rtl label,html.rtl button,html.rtl textarea {
	direction: rtl
}

html.rtl li {
	text-align: right
}

html.ie {
	overflow-x: hidden
}

body {
	font-family: "NotoSans-Regular",sans;
	background: #000
}

hr {
	border-top: 1px solid #202020;
	margin-top: 30px;
	margin-bottom: 30px
}

sup {
	font-size: 60%
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	sup {
		top: -0.7em
	}
}

a,button {
	-webkit-transition: .2s;
	-moz-transition: .2s;
	-ms-transition: .2s;
	-o-transition: .2s;
	transition: .2s
}

a:focus,button:focus {
	color: #f60;
	text-decoration: none
}

.site-container {
	position: relative;
	background-color: #000;
	color: #000;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	max-width: 1440px
}

.container {
	padding-left: 20px;
	padding-right: 20px
}

.email-template .error-text {
	color: #a8000a !important
}

.ie select::-ms-expand {
	display: none
}

.ie html,.ie body {
	-ms-overflow-style: scrollbar
}

.cw {
	font-size: 1rem
}

.center {
	text-align: center
}

.scrollbar-measure {
	position: absolute;
	top: -9999px;
	width: 50px;
	height: 50px;
	overflow: scroll
}

.fixed-wrapper {
	height: 100%;
	position: fixed;
	width: 100%;
	max-height: 100%
}

.fixed-wrapper .overthrow {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	max-height: 100%;
	overflow-y: scroll
}

.fixed-wrapper .overthrow.horizontal {
	overflow-x: auto
}

.ios .fixed-wrapper .overthrow {
	-webkit-overflow-scrolling: touch;
	-webkit-backface-visibility: hidden
}

.row-eq-height {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex
}

.block--sm-full {
	overflow: hidden
}

.block--sm-full .container-fluid {
	margin: 0 -15px
}

.bring-to-front {
	position: relative;
	z-index: 2
}

.bring-to-back {
	position: relative;
	z-index: 1
}[sticky-with-header].sticky--unpinned {
	opacity: 0
}[sticky-with-header].sticky--not-top {
	position: fixed;
	margin-top: 0;
	opacity: 1;
	transition: all 300ms cubic-bezier(0.42, 0, 0.42, 1.03)
}

@media (max-width: 767px) {
[	sticky-with-header].sticky--not-top {
		transition: none
	}
}

.disclaimer {
	font-family: Helvetica,Arial,sans-serif;
	font-size: 10px;
	font-weight: normal;
	color: #999;
	text-align: left
}

@keyframes orbit {
	0% {
		opacity: 1;
		z-index: 99;
		transform: rotate(180deg);
		animation-timing-function: ease-out
	}

	7% {
		opacity: 1;
		transform: rotate(300deg);
		animation-timing-function: linear;
		origin: 0%
	}

	30% {
		opacity: 1;
		transform: rotate(410deg);
		animation-timing-function: ease-in-out;
		origin: 7%
	}

	39% {
		opacity: 1;
		transform: rotate(645deg);
		animation-timing-function: linear;
		origin: 30%
	}

	70% {
		opacity: 1;
		transform: rotate(770deg);
		animation-timing-function: ease-out;
		origin: 39%
	}

	75% {
		opacity: 1;
		transform: rotate(900deg);
		animation-timing-function: ease-out;
		origin: 70%
	}

	76% {
		opacity: 0;
		transform: rotate(900deg)
	}

	100% {
		opacity: 0;
		transform: rotate(900deg)
	}
}

@-o-keyframes orbit {
	0% {
		-webkit-transform: 1.22s;
		-moz-transform: 1.22s;
		-ms-transform: 1.22s;
		-o-transform: 1.22s;
		transform: 1.22s;
		opacity: 1;
		z-index: 99;
		-o-transform: rotate(180deg);
		-o-animation-timing-function: ease-out
	}

	7% {
		opacity: 1;
		-o-transform: rotate(300deg);
		-o-animation-timing-function: linear;
		-o-origin: 0%
	}

	30% {
		opacity: 1;
		-o-transform: rotate(410deg);
		-o-animation-timing-function: ease-in-out;
		-o-origin: 7%
	}

	39% {
		opacity: 1;
		-o-transform: rotate(645deg);
		-o-animation-timing-function: linear;
		-o-origin: 30%
	}

	70% {
		opacity: 1;
		-o-transform: rotate(770deg);
		-o-animation-timing-function: ease-out;
		-o-origin: 39%
	}

	75% {
		opacity: 1;
		-o-transform: rotate(900deg);
		-o-animation-timing-function: ease-out;
		-o-origin: 70%
	}

	76% {
		opacity: 0;
		-o-transform: rotate(900deg)
	}

	100% {
		opacity: 0;
		-o-transform: rotate(900deg)
	}
}

@-ms-keyframes orbit {
	0% {
		opacity: 1;
		z-index: 99;
		-ms-transform: rotate(180deg);
		-ms-animation-timing-function: ease-out
	}

	7% {
		opacity: 1;
		-ms-transform: rotate(300deg);
		-ms-animation-timing-function: linear;
		-ms-origin: 0%
	}

	30% {
		opacity: 1;
		-ms-transform: rotate(410deg);
		-ms-animation-timing-function: ease-in-out;
		-ms-origin: 7%
	}

	39% {
		opacity: 1;
		-ms-transform: rotate(645deg);
		-ms-animation-timing-function: linear;
		-ms-origin: 30%
	}

	70% {
		opacity: 1;
		-ms-transform: rotate(770deg);
		-ms-animation-timing-function: ease-out;
		-ms-origin: 39%
	}

	75% {
		opacity: 1;
		-ms-transform: rotate(900deg);
		-ms-animation-timing-function: ease-out;
		-ms-origin: 70%
	}

	76% {
		opacity: 0;
		-ms-transform: rotate(900deg)
	}

	100% {
		opacity: 0;
		-ms-transform: rotate(900deg)
	}
}

@-webkit-keyframes orbit {
	0% {
		opacity: 1;
		z-index: 99;
		-webkit-transform: rotate(180deg);
		-webkit-animation-timing-function: ease-out
	}

	7% {
		opacity: 1;
		-webkit-transform: rotate(300deg);
		-webkit-animation-timing-function: linear;
		-webkit-origin: 0%
	}

	30% {
		opacity: 1;
		-webkit-transform: rotate(410deg);
		-webkit-animation-timing-function: ease-in-out;
		-webkit-origin: 7%
	}

	39% {
		opacity: 1;
		-webkit-transform: rotate(645deg);
		-webkit-animation-timing-function: linear;
		-webkit-origin: 30%
	}

	70% {
		opacity: 1;
		-webkit-transform: rotate(770deg);
		-webkit-animation-timing-function: ease-out;
		-webkit-origin: 39%
	}

	75% {
		opacity: 1;
		-webkit-transform: rotate(900deg);
		-webkit-animation-timing-function: ease-out;
		-webkit-origin: 70%
	}

	76% {
		opacity: 0;
		-webkit-transform: rotate(900deg)
	}

	100% {
		opacity: 0;
		-webkit-transform: rotate(900deg)
	}
}

@-moz-keyframes orbit {
	0% {
		opacity: 1;
		z-index: 99;
		-moz-transform: rotate(180deg);
		-moz-animation-timing-function: ease-out
	}

	7% {
		opacity: 1;
		-moz-transform: rotate(300deg);
		-moz-animation-timing-function: linear;
		-moz-origin: 0%
	}

	30% {
		opacity: 1;
		-moz-transform: rotate(410deg);
		-moz-animation-timing-function: ease-in-out;
		-moz-origin: 7%
	}

	39% {
		opacity: 1;
		-moz-transform: rotate(645deg);
		-moz-animation-timing-function: linear;
		-moz-origin: 30%
	}

	70% {
		opacity: 1;
		-moz-transform: rotate(770deg);
		-moz-animation-timing-function: ease-out;
		-moz-origin: 39%
	}

	75% {
		opacity: 1;
		-moz-transform: rotate(900deg);
		-moz-animation-timing-function: ease-out;
		-moz-origin: 70%
	}

	76% {
		opacity: 0;
		-moz-transform: rotate(900deg)
	}

	100% {
		opacity: 0;
		-moz-transform: rotate(900deg)
	}
}

@-webkit-keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		-moz-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		-o-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none
	}
}

@-moz-keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		-moz-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		-o-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none
	}
}

@-o-keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		-moz-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		-o-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none
	}
}

@-ms-keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		-moz-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		-o-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		-moz-transform: translate3d(0, 100%, 0);
		-ms-transform: translate3d(0, 100%, 0);
		-o-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}

	to {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none
	}
}

@keyframes swing {
	0%,36%,52%,100% {
		transform: rotate(0deg);
		animation-timing-function: ease-out
	}

	2%,10%,18%,26%,32%,48% {
		transform: rotate(2deg);
		animation-timing-function: ease-out
	}

	6%,14%,20%,28%,34%,50% {
		transform: rotate(-2deg);
		animation-timing-function: ease-out
	}

	38%,40% {
		transform: rotate(3deg);
		animation-timing-function: ease-out
	}

	42%,44% {
		transform: rotate(-3deg);
		animation-timing-function: ease-out
	}
}

@-o-keyframes swing {
	0%,36%,52%,100% {
		-o-transform: rotate(0deg);
		-o-animation-timing-function: ease-out
	}

	2%,10%,18%,26%,32%,48% {
		-o-transform: rotate(2deg);
		-o-animation-timing-function: ease-out
	}

	6%,14%,20%,28%,34%,50% {
		-o-transform: rotate(-2deg);
		-o-animation-timing-function: ease-out
	}

	38%,40% {
		-o-transform: rotate(3deg);
		-o-animation-timing-function: ease-out
	}

	42%,44% {
		-o-transform: rotate(-3deg);
		-o-animation-timing-function: ease-out
	}
}

@-ms-keyframes swing {
	0%,36%,52%,100% {
		-ms-transform: rotate(0deg);
		-ms-animation-timing-function: ease-out
	}

	2%,10%,18%,26%,32%,48% {
		-ms-transform: rotate(2deg);
		-ms-animation-timing-function: ease-out
	}

	6%,14%,20%,28%,34%,50% {
		-ms-transform: rotate(-2deg);
		-ms-animation-timing-function: ease-out
	}

	38%,40% {
		-ms-transform: rotate(3deg);
		-ms-animation-timing-function: ease-out
	}

	42%,44% {
		-ms-transform: rotate(-3deg);
		-ms-animation-timing-function: ease-out
	}
}

@-webkit-keyframes swing {
	0%,36%,52%,100% {
		-webkit-transform: rotate(0deg);
		-webkit-animation-timing-function: ease-out
	}

	2%,10%,18%,26%,32%,48% {
		-webkit-transform: rotate(2deg);
		-webkit-animation-timing-function: ease-out
	}

	6%,14%,20%,28%,34%,50% {
		-webkit-transform: rotate(-2deg);
		-webkit-animation-timing-function: ease-out
	}

	38%,40% {
		-webkit-transform: rotate(3deg);
		-webkit-animation-timing-function: ease-out
	}

	42%,44% {
		-webkit-transform: rotate(-3deg);
		-webkit-animation-timing-function: ease-out
	}
}

@-moz-keyframes swing {
	0%,36%,52%,100% {
		-moz-transform: rotate(0deg);
		-moz-animation-timing-function: ease-out
	}

	2%,10%,18%,26%,32%,48% {
		-moz-transform: rotate(2deg);
		-moz-animation-timing-function: ease-out
	}

	6%,14%,20%,28%,34%,50% {
		-moz-transform: rotate(-2deg);
		-moz-animation-timing-function: ease-out
	}

	38%,40% {
		-moz-transform: rotate(3deg);
		-moz-animation-timing-function: ease-out
	}

	42%,44% {
		-moz-transform: rotate(-3deg);
		-moz-animation-timing-function: ease-out
	}
}

.bg--white {
	background-color: #fff
}

.bg--black {
	background-color: #000
}

.bg--grey {
	background-color: #7c7c7c
}

@font-face {
	font-family:"NotoSans-Bold";src:url("../../fonts/notosans/NotoSans-Bold.eot?") format("eot"),url("../../fonts/notosans/NotoSans-Bold.woff2") format("woff2"),url("../../fonts/notosans/NotoSans-Bold.woff") format("woff"),url("../../fonts/notosans/NotoSans-Bold.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSans-BoldItalic";src:url("../../fonts/notosans/NotoSans-BoldItalic.eot?") format("eot"),url("../../fonts/notosans/NotoSans-BoldItalic.woff2") format("woff2"),url("../../fonts/notosans/NotoSans-BoldItalic.woff") format("woff"),url("../../fonts/notosans/NotoSans-BoldItalic.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSans-Italic";src:url("../../fonts/notosans/NotoSans-Italic.eot?") format("eot"),url("../../fonts/notosans/NotoSans-Italic.woff2") format("woff2"),url("../../fonts/notosans/NotoSans-Italic.woff") format("woff"),url("../../fonts/notosans/NotoSans-Italic.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSans-Regular";src:url("../../fonts/notosans/NotoSans-Regular.eot?") format("eot"),url("../../fonts/notosans/NotoSans-Regular.woff2") format("woff2"),url("../../fonts/notosans/NotoSans-Regular.woff") format("woff"),url("../../fonts/notosans/NotoSans-Regular.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSerif-Bold";src:url("../../fonts/notosans/NotoSerif-Bold.eot?") format("eot"),url("../../fonts/notosans/NotoSerif-Bold.woff2") format("woff2"),url("../../fonts/notosans/NotoSerif-Bold.woff") format("woff"),url("../../fonts/notosans/NotoSerif-Bold.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSerif-BoldItalic";src:url("../../fonts/notosans/NotoSerif-BoldItalic.eot?") format("eot"),url("../../fonts/notosans/NotoSerif-BoldItalic.woff2") format("woff2"),url("../../fonts/notosans/NotoSerif-BoldItalic.woff") format("woff"),url("../../fonts/notosans/NotoSerif-BoldItalic.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSerif-Italic";src:url("../../fonts/notosans/NotoSerif-Italic.eot?") format("eot"),url("../../fonts/notosans/NotoSerif-Italic.woff2") format("woff2"),url("../../fonts/notosans/NotoSerif-Italic.woff") format("woff"),url("../../fonts/notosans/NotoSerif-Italic.ttf") format("truetype")
}

@font-face {
	font-family:"NotoSerif-Regular";src:url("../../fonts/notosans/NotoSerif-Regular.eot?") format("eot"),url("../../fonts/notosans/NotoSerif-Regular.woff2") format("woff2"),url("../../fonts/notosans/NotoSerif-Regular.woff") format("woff"),url("../../fonts/notosans/NotoSerif-Regular.ttf") format("truetype")
}

@font-face {
	font-family:"Webdings";src:url("../../fonts/Webdings.eot?") format("eot"),url("../../fonts/Webdings.woff2") format("woff2"),url("../../fonts/Webdings.woff") format("woff"),url("../../fonts/Webdings.ttf") format("truetype")
}

.accordion {
	padding: 1rem 0
}

.accordion-item-title {
	text-transform: uppercase;
	padding: 1rem 0rem
}

.accordion-item-expand {
	height: 2.2rem;
	width: 2.2rem;
	cursor: pointer;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	display: inline-block;
	margin-right: 3rem;
	position: relative;
	top: 0.5rem;
	left: 1rem
}

.accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.accordion-item-content {
	display: none;
	padding: 1rem 0rem;
	overflow-x: auto
}

.form-control {
	border: 2px solid #000;
	font-size: 1.6rem;
	padding: 1rem;
	width: 100%;
	border-radius: 0;
	color: #000;
	height: auto;
	outline: none
}

@media screen and (min-width: 320px) {
	.form-control {
		font-size: 1.2rem
	}
}

.form-control::-ms-clear {
	display: none
}

.form-control:-moz-placeholder,.form-control::-moz-placeholder {
	color: #a3a3a3;
	opacity: 1
}

.form-control:-ms-input-placeholder {
	color: #a3a3a3
}

.form-control::-webkit-input-placeholder {
	color: #a3a3a3
}

.form-control:focus {
	border-color: #000;
	box-shadow: none
}

.form-control:focus:-moz-placeholder,.form-control:focus::-moz-placeholder {
	color: transparent;
	opacity: 1
}

.form-control:focus:-ms-input-placeholder {
	color: transparent
}

.form-control:focus::-webkit-input-placeholder {
	color: transparent
}

@media screen and (min-width: 768px) {
	.form-control {
		padding: 1.5rem
	}
}

.form-control--error {
	border-color: #ad181f !important
}

.form-control--error:focus {
	border-color: #ad181f !important
}

.form__label--error {
	color: #ad181f;
	padding-left: 1.3rem;
	position: relative;
	display: none;
	font-size: 1.2rem;
	margin-top: 1rem;
	text-transform: capitalize
}

.form__label--error:before {
	content: '';
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url(../../images/find-a-dealer/error-icon.png);
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.form__label--error {
		margin-top: 2rem;
		padding-left: 1.5rem
	}

	.form__label--error:before {
		width: 1rem;
		height: 1rem
	}
}

h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
	display: inline-block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

h1,.h1 {
	font-size: 5.2rem;
	line-height: 6rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h1,.h1 {
		font-size: 5.2rem;
		line-height: 6rem
	}
}

@media screen and (min-width: 768px) {
	h1,.h1 {
		font-size: 5.2rem;
		line-height: 6rem
	}
}

@media screen and (min-width: 992px) {
	h1,.h1 {
		font-size: 9rem;
		line-height: 10rem
	}
}

@media screen and (min-width: 1440px) {
	h1,.h1 {
		font-size: 9rem;
		line-height: 10rem
	}
}

h2,.h2 {
	font-size: 4rem;
	line-height: 5rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h2,.h2 {
		font-size: 4rem;
		line-height: 5rem
	}
}

@media screen and (min-width: 768px) {
	h2,.h2 {
		font-size: 4rem;
		line-height: 5rem
	}
}

@media screen and (min-width: 992px) {
	h2,.h2 {
		font-size: 5.2rem;
		line-height: 6rem
	}
}

@media screen and (min-width: 1440px) {
	h2,.h2 {
		font-size: 5.2rem;
		line-height: 6rem
	}
}

h3,.h3 {
	font-size: 3rem;
	line-height: 3.8rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h3,.h3 {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 768px) {
	h3,.h3 {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 992px) {
	h3,.h3 {
		font-size: 4rem;
		line-height: 5rem
	}
}

@media screen and (min-width: 1440px) {
	h3,.h3 {
		font-size: 4rem;
		line-height: 5rem
	}
}

h4,.h4 {
	font-size: 2.4rem;
	line-height: 3.2rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h4,.h4 {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

@media screen and (min-width: 768px) {
	h4,.h4 {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

@media screen and (min-width: 992px) {
	h4,.h4 {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 1440px) {
	h4,.h4 {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

h5,.h5 {
	font-size: 1.6rem;
	line-height: 2.4rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h5,.h5 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	h5,.h5 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 992px) {
	h5,.h5 {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

@media screen and (min-width: 1440px) {
	h5,.h5 {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

h6,.h6 {
	font-size: 1.6rem;
	line-height: 2.4rem;
	margin: 0
}

@media screen and (min-width: 320px) {
	h6,.h6 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	h6,.h6 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 992px) {
	h6,.h6 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 1440px) {
	h6,.h6 {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

p,.body-copy {
	font-family: "NotoSans-Regular",sans;
	font-size: 14px;
	line-height: 2.2rem
}

@media screen and (min-width: 320px) {
	p,.body-copy {
		font-size: 14px;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	p,.body-copy {
		font-size: 14px;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 992px) {
	p,.body-copy {
		font-size: 14px;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 1440px) {
	p,.body-copy {
		font-size: 14px;
		line-height: 2.2rem
	}
}

.button {
	background: #000;
	border-color: #f60;
	border-radius: 0;
	color: #f60;
	font-family: "NotoSans-Bold",sans;
	font-size: 1.6rem;
	letter-spacing: 1px;
	outline: none !important;
	padding: 15px;
	text-transform: uppercase;
	width: 90%
}

.button:hover,a .button:hover,.button:focus,a .button:focus,.button:active,a .button:active,.button.active {
	background-color: #f60;
	color: #000;
	text-decoration: none
}

.button--orange {
	background-color: #f60;
	border-color: #f60;
	color: #000
}

.button--orange [class^="icon-"] {
	color: #000
}

.button--dark-grey {
	background: #202020;
	border-color: #f60;
	color: #f60
}

.button--dark-grey:hover,a .button--dark-grey:hover,.button--dark-grey:focus,a .button--dark-grey:focus,.button--dark-grey:active,a .button--dark-grey:active,.button--dark-grey.active {
	background-color: #f60;
	color: #000;
	text-decoration: none
}

.button--light-grey {
	background: #ccc;
	border-color: #fff;
	color: #fff
}

.button--light-grey:hover,a .button--light-grey:hover,.button--light-grey:focus,a .button--light-grey:focus,.button--light-grey:active,a .button--light-grey:active,.button--light-grey.active {
	background-color: #fff;
	border-color: #fff;
	color: #000;
	text-decoration: none
}

.button--light-grey-2 {
	background: #d8d8d8;
	border-color: #d8d8d8;
	color: #777
}

.button--white {
	background: #fff;
	border-color: #000;
	color: #000
}

.button--white [class^="icon-"] {
	color: #000
}

.button--white:hover,a .button--white:hover,.button--white:focus,a .button--white:focus,.button--white:active,a .button--white:active,.button--white.active {
	background-color: #fff;
	border-color: #000;
	color: #000;
	text-decoration: none
}

.button--black {
	background: #000;
	border-color: #fff;
	color: #fff
}

.button--black [class^="icon-"] {
	color: #fff
}

.button--black:hover,a .button--black:hover,.button--black:focus,a .button--black:focus,.button--black:active,a .button--black:active,.button--black.active {
	background-color: #000;
	border-color: #fff;
	color: #fff;
	text-decoration: none
}

.button--arrow {
	position: relative;
	min-width: 254px;
	width: auto;
	text-align: left
}

.button--arrow .icon--long-arrow-right {
	font-size: 1.2rem;
	float: right;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%)
}

.button--arrow-orange {
	background: transparent;
	border-color: #f60;
	color: #f60
}

.button--arrow-orange:hover,a .button--arrow-orange:hover,.button--arrow-orange:focus,a .button--arrow-orange:focus,.button--arrow-orange:active,a .button--arrow-orange:active,.button--arrow-orange.active {
	background: transparent;
	border-color: #f60;
	color: #f60;
	text-decoration: none
}

.button--arrow-orange:after {
	display: inline-block;
	content: '4';
	font-family: "Webdings";
	position: relative;
	top: -1px
}

.button--animate-wrapper {
	position: relative;
	width: 100%;
	display: inline-block;
	text-align: center
}

.button--animate-icon [class^="icon-"] {
	position: absolute;
	top: 0;
	right: 1.5px;
	width: 35px;
	height: 100%;
	overflow: hidden
}

.button--animate-icon [class^="icon-"]:before {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%)
}

.button--animate-icon:hover {
	min-width: 256px
}

.button--animate-icon:hover [class^="icon-"]:before {
	-webkit-animation: arrowEffect 0.7s;
	-moz-animation: arrowEffect 0.7s;
	-ms-animation: arrowEffect 0.7s;
	-o-animation: arrowEffect 0.7s;
	animation: arrowEffect 0.7s;
	-webkit-animation-iteration-count: 1;
	-moz-animation-iteration-count: 1;
	-ms-animation-iteration-count: 1;
	-o-animation-iteration-count: 1;
	animation-iteration-count: 1
}

.firefox .button {
	font-family: "NotoSans-Regular",sans
}

.link {
	display: inline-block;
	color: #f60;
	font-family: "NotoSans-Bold",sans;
	font-size: 14px
}

.link:hover,a .link:hover,.link:focus,a .link:focus,.link:active,a .link:active,.link.active {
	color: #f60
}

.link--white {
	color: #fff
}

.link--white:hover,a .link--white:hover,.link--white:focus,a .link--white:focus,.link--white:active,a .link--white:active,.link--white.active {
	color: #fff;
	text-decoration: none
}

.link--black {
	color: #000
}

.link--black:hover,a .link--black:hover,.link--black:focus,a .link--black:focus,.link--black:active,a .link--black:active,.link--black.active {
	color: #000;
	text-decoration: none
}

.link--no-border {
	border: none
}

.link--lowercase {
	text-transform: lowercase
}

.link--underline {
	text-decoration: underline
}

@-webkit-keyframes arrowEffect {
	0% {
		left: 0px
	}

	50% {
		left: 40px
	}

	51% {
		left: -28px
	}

	100% {
		left: 0px
	}
}

@keyframes arrowEffect {
	0% {
		left: 0px
	}

	50% {
		left: 40px
	}

	51% {
		left: -28px
	}

	100% {
		left: 0px
	}
}

@media only screen and (max-width: 480px) {
	.button--full-width {
		width: 100%
	}
}

@font-face {
	font-family:'icomoon';src:url("../../fonts/icomoon/icomoon.woff") format("woff");font-weight:normal;font-style:normal
}[class^="icon-"],[class*=" icon-"] {
	display: inline-block;
	position: relative;
	font-family: 'icomoon' !important;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	margin-right: 10px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.icon--close {
	top: 7px;
	margin-left: 5px;
	margin-right: 0
}

.icon--close:before {
	content: "\e918";
	font-size: 250%
}

.icon--shopping-tools {
	top: 7px
}

.icon--shopping-tools:before {
	content: "\e900";
	font-size: 216%
}

.icon--arrow {
	top: 1px;
	margin-left: 5px;
	margin-right: 0
}

.icon--arrow:before {
	content: "\e901";
	font-size: 100%
}

.icon--arrow-down {
	-ms-transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg)
}

.icon--arrow-back {
	top: 6px;
	margin-left: 0;
	-ms-transform: rotate(-180deg);
	-webkit-transform: rotate(-180deg);
	transform: rotate(-180deg)
}

.icon--arrow-back:before {
	content: "\e901";
	font-size: 200%
}

.icon--link-out {
	top: 2px;
	margin-left: 5px;
	margin-right: 0
}

.icon--link-out:before {
	content: "\e902";
	font-size: 120%
}

.icon--compare-motorcycles {
	top: 6px
}

.icon--compare-motorcycles:before {
	content: "\e903";
	font-size: 200%
}

.icon--motorcycle {
	top: 7px
}

.icon--motorcycle:before {
	content: "\e904";
	font-size: 250%
}

.icon--play {
	top: 1px;
	margin-left: 2px;
	margin-right: 0
}

.icon--play:before {
	content: "\e905";
	font-size: 100%
}

.icon--shopping-cart:before {
	content: "\e906"
}

.icon--build-your-own {
	top: 5px
}

.icon--build-your-own:before {
	content: "\e907";
	font-size: 180%
}

.icon--calendar-pencil {
	top: 5px
}

.icon--calendar-pencil:before {
	content: "\e908";
	font-size: 200%
}

.icon--hamburger {
	top: 7px;
	margin-left: 28px;
	margin-right: 0
}

.icon--hamburger:before {
	content: "";
	font-size: 250%;
	background: transparent url("../../svg/h-d-menu-white.svg") no-repeat 0 0;
	width: 2.2rem;
	height: 3rem;
	position: absolute;
	top: -19px;
	left: -15px
}

.icon--search:before {
	content: "\e90a"
}

.icon--skull:before {
	content: "\e90b"
}

.icon--find-a-dealer {
	top: 5px
}

.icon--find-a-dealer:before {
	content: "\e90c";
	font-size: 200%
}

.icon--helmet:before {
	content: "\e90d"
}

.icon--apply-for-credit {
	top: 5px
}

.icon--apply-for-credit:before {
	content: "\e90e";
	font-size: 200%
}

.icon--estimate-payment {
	top: 5px
}

.icon--estimate-payment:before {
	content: "\e90f";
	font-size: 200%
}

.icon--get-a-catalog {
	top: 5px
}

.icon--get-a-catalog:before {
	content: "\e910";
	font-size: 200%
}

.icon--warning-sign:before {
	content: "\e911"
}

.icon--calendar-date:before {
	content: "\e912"
}

.icon--calendar-event:before {
	content: "\e913"
}

.icon--calendar:before {
	content: "\e914"
}

.icon--speed-dial:before {
	content: "\e915"
}

.icon--controls:before {
	content: "\e916"
}

.icon--flag:before {
	content: "\e917"
}

.icon--long-arrow-right:before {
	content: "\e91a"
}

.icon--double-down-arrow:before {
	content: "\e919"
}

.star-line {
	text-align: center
}

.icon--star {
	margin-left: 6px;
	margin-right: 6px;
	width: 1rem;
	height: 1.2rem;
	background: url("../../images/star.png") no-repeat center;
	background-size: contain
}

.icon-H-D-Share-to-Facebook:before {
	content: "\e948"
}

.icon-H-D-Share-to-Twitter:before {
	content: "\e949"
}

.table-striped>tbody>tr:nth-of-type(odd) {
	background-color: #e1e1e1
}

.text-lowercase {
	text-transform: lowercase !important
}

.text-orange {
	color: #f60 !important
}

.text-orange:focus,.text-orange:hover {
	color: #f60
}

.text-black {
	color: #000 !important
}

.text-white {
	color: #fff !important
}

.text-grey {
	color: #7c7c7c !important
}

.iScrollHorizontalScrollbar {
	position: absolute;
	z-index: 1;
	height: 0.9rem;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden
}

.iScrollVerticalScrollbar {
	position: absolute;
	z-index: 1;
	width: 0.9rem;
	bottom: 0;
	top: 0;
	right: 0;
	overflow: hidden
}

.iScrollHorizontalScrollbar.iScrollBothScrollbars,.iScrollVerticalScrollbar.iScrollBothScrollbars {
	right: 1.8rem
}

.iScrollIndicator {
	position: absolute;
	background: #494949;
	border: none
}

.iScrollHorizontalScrollbar .iScrollIndicator {
	height: 100%
}

.iScrollVerticalScrollbar .iScrollIndicator {
	width: 100%
}

.iScrollVerticalScrollbar .iScrollIndicator,.iScrollHorizontalScrollbar .iScrollIndicator {
	background: #494949;
	opacity: 0.5
}

.event-marquee {
	width: 100%;
	padding: 3rem 2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	background: #000;
	font-size: 1.8rem;
	line-height: 3.2rem
}

.event-marquee,.event-marquee * {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 1.8rem;
	line-height: 3.2rem
}

.event-marquee sup,.event-marquee * sup {
	font-size: 60%;
	line-height: 1
}

.event-marquee sup {
	font-size: 60%;
	line-height: 1
}

.event-marquee--title {
	font-size: 3.2rem;
	line-height: 3.8rem
}

.event-marquee *:last-child {
	margin-bottom: 0
}

.event-marquee--disclaimer {
	text-align: center
}

.event-marquee--disclaimer p {
	display: inline-block;
	color: #ccc;
	font-size: 1rem;
	text-transform: none;
	font-family: "NotoSans-Regular",sans;
	line-height: 1.6
}

@media screen and (max-width: 768px) {
	.event-marquee--disclaimer p {
		font-size: 1.2rem
	}
}

@media screen and (max-width: 321px) {
	.event-marquee {
		width: 100%;
		padding: 2rem 2rem
	}
}

@media screen and (min-width: 321px) and (max-width: 767px) {
	.event-marquee {
		width: 100%;
		padding: 2rem 2rem
	}

	.event-marquee--disclaimer {
		margin-top: .65rem !important
	}
}

@media screen and (max-width: 768px) {
	.event-marquee * {
		display: inline-block
	}

	.event-marquee br {
		display: none
	}
}

@media screen and (min-width: 768px) {
	.event-marquee {
		padding: 5rem 10rem
	}

	.event-marquee--title {
		font-size: 3.2rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 992px) {
	.event-marquee {
		padding: 7.3rem 16rem
	}

	.event-marquee--title {
		font-size: 3.2rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 1440px) {
	.event-marquee {
		padding: 6.2rem 33rem
	}

	.event-marquee--disclaimer {
		padding: 2.5rem 33rem
	}

	.event-marquee--title {
		margin-bottom: 10px
	}

	.event-marquee--title {
		font-size: 3.2rem;
		line-height: 3.8rem
	}
}

.global-overlay {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: none;
	position: fixed;
	z-index: 10000;
	background-color: #fff;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}

@media only screen and (min-width: 768px) {
	.global-overlay {
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: auto;
		height: auto
	}
}

@media only screen and (max-width: 767px) {
	.global-overlay {
		padding-bottom: 6rem
	}
}

.global-overlay__close {
	font-size: 1.1rem;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 33px;
	position: absolute;
	right: 20px;
	top: 23px
}

.global-overlay__close-label {
	height: 15px;
	display: block
}

.global-overlay__close:after {
	content: '';
	width: 2.2rem;
	height: 2.2rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../svg/h-d-close.svg") no-repeat;
	background-size: 100%
}

.global-overlay__heading {
	position: relative;
	top: 1.5rem;
	left: 1.5rem;
	font-size: 2.5rem;
	line-height: 3.9rem;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.global-overlay__top-bar {
	background-color: #000;
	color: #fff;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 6rem
}

.global-overlay__body {
	margin: 0 1.5rem;
	padding: 1.5rem 0;
	background-color: #fff;
	color: #000;
	max-height: 100%;
	overflow-y: scroll
}

@media only screen and (min-width: 768px) {
	.global-overlay__body {
		min-height: 25rem;
		max-height: 45rem;
		width: 40rem
	}
}

.global-overlay__background-overlay {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background-color: rgba(0,0,0,0.7);
	left: 0;
	right: 0
}

.global-overlay.active {
	display: block
}

.loading-wrapper {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 10001;
	background-color: rgba(0,0,0,0.7);
	left: 0;
	right: 0
}

.loading-img,.loading-text {
	position: relative;
	top: 50%;
	left: 50%;
	max-width: 100px;
	width: 100px;
	margin-top: -70px
}

.loading-text {
	margin-top: 2rem;
	color: #fff;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	letter-spacing: 2px;
	font-size: 1.6rem;
	text-align: center;
	transform: translateX(-50%)
}

.loading-img {
	margin-left: -50px;
	-webkit-transform: rotate(0);
	-moz-transform: rotate(0);
	-ms-transform: rotate(0);
	-o-transform: rotate(0);
	transform: rotate(0);
	-webkit-animation-delay: 4s;
	-moz-animation-delay: 4s;
	-ms-animation-delay: 4s;
	-o-animation-delay: 4s;
	animation-delay: 4s;
	-webkit-animation: swing 3s infinite;
	-moz-animation: swing 3s infinite;
	-ms-animation: swing 3s infinite;
	-o-animation: swing 3s infinite;
	animation: swing 3s infinite;
	transform-origin: 50% 69%;
	opacity: 1;
	z-index: 99
}

.loading-img:after {
	content: url("../../svg/loader-icon.svg")
}

.loading-cercle {
	position: relative;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	width: 54px;
	height: 54px
}

.loading-cercle .wBall {
	-webkit-transform: rotate(225deg);
	-moz-transform: rotate(225deg);
	-ms-transform: rotate(225deg);
	-o-transform: rotate(225deg);
	transform: rotate(225deg);
	-webkit-animation: orbit 6.96s infinite;
	-moz-animation: orbit 6.96s infinite;
	-ms-animation: orbit 6.96s infinite;
	-o-animation: orbit 6.96s infinite;
	animation: orbit 6.96s infinite;
	position: absolute;
	width: 54px;
	height: 54px;
	opacity: 0
}

.loading-cercle .wBall .wInnerBall {
	position: absolute;
	width: 7px;
	height: 7px;
	background: #fff;
	left: 0px;
	top: 0px;
	border-radius: 7px
}

.loading-cercle .wBall_1 {
	-webkit-animation-delay: 1.52s;
	-moz-animation-delay: 1.52s;
	-ms-animation-delay: 1.52s;
	-o-animation-delay: 1.52s;
	animation-delay: 1.52s
}

.loading-cercle .wBall_2 {
	-webkit-animation-delay: .3s;
	-moz-animation-delay: .3s;
	-ms-animation-delay: .3s;
	-o-animation-delay: .3s;
	animation-delay: .3s
}

.loading-cercle .wBall_3 {
	-webkit-animation-delay: .61s;
	-moz-animation-delay: .61s;
	-ms-animation-delay: .61s;
	-o-animation-delay: .61s;
	animation-delay: .61s
}

.loading-cercle .wBall_4 {
	-webkit-animation-delay: .91s;
	-moz-animation-delay: .91s;
	-ms-animation-delay: .91s;
	-o-animation-delay: .91s;
	animation-delay: .91s
}

.loading-cercle .wBall_5 {
	-webkit-animation-delay: 1.22s;
	-moz-animation-delay: 1.22s;
	-ms-animation-delay: 1.22s;
	-o-animation-delay: 1.22s;
	animation-delay: 1.22s
}

.scroll-disabled,.no-scroll {
	overflow: hidden
}

.ios.no-scroll,.ios .no-scroll,.iosscroll-disabled,.ios .scroll-disabled {
	position: fixed;
	max-width: 100%;
	height: 100%;
	max-height: 100%
}

.ie .scroll-disabled,.ie .no-scroll {
	overflow: auto;
	-ms-overflow-style: none !important
}

.disable-video-scroll {
	overflow: hidden !important
}

.no-scroll--story-board {
	position: relative !important
}

@media (min-width: 768px) {
	.block--sm-full {
		padding-left: 15px;
		padding-right: 15px
	}

	.block--sm-full .container-fluid {
		margin: 0 auto
	}

	.video-js .vjs-loading-spinner {
		border: 0;
		background: url("../../images/hero-marquee/HD_Loader_300x300.gif") no-repeat center;
		width: 300px;
		height: 300px;
		transform: translate(-50%, -50%);
		margin: 0
	}
}

.video-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.9);
	visibility: hidden;
	z-index: 99999
}

.video-wrapper.active {
	visibility: visible
}

.video-wrapper.active .vjs-tech {
	display: block
}

.video-wrapper .vjs-tech {
	display: none
}

.video-wrapper .video-body {
	width: 100%;
	height: 100%
}

.video-title {
	position: absolute;
	padding: 0 15px;
	width: 100%
}

.video-body {
	position: relative
}

.video-container {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100%;
	background: #000;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	backface-visibility: hidden;
	z-index: 11
}

.video-js {
	width: 100%;
	height: auto;
	outline: none
}

.video-js .vjs-loading-spinner {
	border: 0;
	background: url("../../images/hero-marquee/HD_Loader_150x150.gif") no-repeat center;
	width: 150px;
	height: 150px;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	margin: 0
}

.video-js .vjs-tech {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%)
}

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
	width: 60px;
	height: 60px;
	font: 1rem/5 "NotoSans-Bold",sans;
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;
	background: rgba(0,0,0,0.3);
	z-index: 1;
	cursor: pointer
}

.close-btn__label {
	display: none
}

.close-btn .icon--close {
	position: absolute;
	width: 28px;
	height: 28px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
}

.close-btn .icon--close:before {
	content: "\e907";
	font-family: "cta-icon"
}

.close-btn:focus,.close-btn:hover {
	color: #f60
}

.play-button {
	display: block;
	position: absolute;
	box-sizing: border-box;
	left: 50%;
	top: 50%;
	border: 2px solid #ffffff;
	width: 74px;
	height: 74px;
	border-radius: 50%;
	background-color: rgba(0,0,0,0.35);
	color: transparent;
	cursor: pointer;
	transform: translate(-50%, -50%)
}

.play-button:focus {
	outline: none;
	color: transparent
}

.play-button::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 21px;
	height: 25px;
	background: url("../../images/play-arrow.png") no-repeat center;
	background-size: contain;
	transform: translate(-40%, -50%)
}

video::-webkit-media-controls-start-playback-button {
	display: none !important;
	-webkit-appearance: none
}

video::-webkit-media-controls-start-playback-button {
	display: none !important;
	-webkit-appearance: none
}

.video-js .vjs-control-bar {
	height: 9rem;
	max-width: 136rem;
	margin: 0 auto;
	background: transparent;
	transform: none !important;
	padding: 0 1rem
}

@media (min-width: 768px) {
	.video-js .vjs-control-bar {
		padding: 0
	}
}

.video-js .vjs-control-bar:before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	right: -100%;
	height: 9rem;
	margin: 0 auto;
	background: rgba(0,0,0,0.3)
}

.video-js .vjs-control {
	font-size: 1rem
}

.video-js .vjs-control:before {
	font-size: 3.5rem;
	line-height: 9rem;
	width: 4rem
}

@media (min-width: 768px) {
	.video-js .vjs-control:before {
		font-size: 4.4rem;
		width: 6rem
	}
}

.vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu .vjs-menu-content,.vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content {
	height: 9rem !important
}

.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
	width: 12em
}

.video-js .vjs-volume-bar {
	margin: 4.3rem 0.45em
}

.vjs-slider-horizontal .vjs-volume-level {
	height: 0.4rem
}

.vjs-volume-bar.vjs-slider-horizontal {
	height: 0.4rem
}

.vjs-menu-button-inline .vjs-menu {
	left: 5rem
}

.vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu .vjs-menu-content,.vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content {
	height: 9rem
}

.vjs-control {
	min-width: 4rem
}

@media (min-width: 768px) {
	.vjs-control {
		min-width: 6rem
	}
}

.video-js .vjs-dock-text,.video-js .vjs-dock-description {
	display: none !important
}

.video-js .vjs-progress-control {
	position: relative;
	height: 100% !important;
	top: 0 !important;
	margin-left: 1.8rem;
	margin-right: 0.8rem
}

.video-js .vjs-progress-control .vjs-progress-holder {
	position: absolute;
	width: 100%;
	height: 0.4rem;
	top: 50%;
	transform: translateY(-50%);
	transform: none
}

.video-js .vjs-progress-control .vjs-progress-holder .vjs-load-progress>div {
	transform: none;
	outline: none
}

.video-js .vjs-progress-holder .vjs-play-progress,.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-tooltip-progress-bar,.video-js .vjs-progress-holder .vjs-load-progress div {
	height: 0.3rem
}

.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-item.vjs-selected,.video-js:active .vjs-big-play-button,.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:active,.video-js .vjs-big-play-button:focus,.video-js .vjs-play-progress,.video-js .vjs-volume-level {
	background-color: #f60 !important
}

button.vjs-play-control.vjs-control.vjs-button.vjs-paused {
	max-width: 6rem;
	overflow: hidden;
	display: inline-block;
	position: relative;
	border: 0;
	outline: none
}

.video-js .vjs-time-control {
	position: relative;
	font-family: "NotoSerif-Regular",sans-serif;
	font-size: 1.4rem;
	letter-spacing: 1px;
	padding-left: 0;
	padding-right: 0
}

.video-js .vjs-time-control.vjs-current-time {
	margin-left: 0;
	min-width: 5rem
}

.video-js .vjs-time-control.vjs-duration,.video-js .vjs-time-control.vjs-current-time {
	min-width: 4.2rem
}

.video-js .vjs-time-control .vjs-duration-display,.video-js .vjs-time-control .vjs-current-time-display,.video-js .vjs-time-control.vjs-time-divider>div {
	position: absolute;
	display: inherit;
	width: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
}

.video-js .vjs-time-control.vjs-time-divider {
	min-width: 0.8rem;
	width: 0.2rem
}

.video-js .vjs-dock-shelf {
	padding: 0 4.6em 0 0
}

.video-js .vjs-share-control {
	visibility: visible !important;
	position: relative;
	width: 60px;
	height: 60px;
	color: #ffffff;
	background: rgba(0,0,0,0.3);
	font-size: 2.3rem
}

.video-js .vjs-control.vjs-close-button {
	right: 4rem;
	top: -1.6rem
}

.video-js .vjs-share-control>span {
	display: none
}

.video-js .vjs-share-control:focus:before,.video-js .vjs-share-control:hover:before,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before {
	text-shadow: none !important
}

.video-js .vjs-share-control:focus:before,.video-js .vjs-control:focus:before {
	color: #f60
}

.video-js .vjs-share-control:hover:before,.video-js .vjs-control:hover:before {
	color: #f60
}

.video-js .vjs-modal-dialog {
	background: rgba(0,0,0,0.9);
	background: -webkit-linear-gradient(-90deg, rgba(0,0,0,0.9), rgba(255,255,255,0));
	background: linear-gradient(180deg, rgba(0,0,0,0.9), rgba(255,255,255,0))
}

.vjs-has-started.not-hover .vjs-dock-shelf,.vjs-has-started.not-hover .vjs-dock-text {
	opacity: 1 !important
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
	bottom: 5rem
}

@keyframes fadeOut {
	20%,90%,95% {
		opacity: 1
	}

	100% {
		opactity: 0
	}
}

@keyframes fadeOutTwo {
	0%,10% {
		opacity: 0
	}

	30%,85% {
		opacity: 1
	}

	90%,100% {
		opactity: 0
	}
}

@keyframes moveArrow {
	5%,10%,20%,40% {
		transform: translate(0, -1px)
	}

	95%,100% {
		transform: translate(0, 12px)
	}
}

@keyframes moveArrowTwo {
	5%,10%,20%,40% {
		transform: translate(0, -3px)
	}

	95%,100% {
		transform: translate(0, 10px)
	}
}

.cta.cta-btn.cta-animation-expand:hover {
	padding-right: 6.72rem
}

.cta.cta-btn.cta-animation-expand[disabled]:hover,.cta.cta-btn.cta-animation-expand[disabled]:focus {
	padding-right: 5.6rem !important;
	cursor: not-allowed
}

.cta.cta-btn.cta-animation-expand-right::after {
	content: "";
	display: block;
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 40px;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	z-index: 1
}

.cta.cta-btn.cta-animation-expand-right:hover::after,.cta.cta-btn.cta-animation-expand-right:focus::after {
	margin-right: 0px
}

@media screen and (min-width: 768px) {
	.cta.cta-btn.cta-animation-expand-right:hover::after,.cta.cta-btn.cta-animation-expand-right:focus::after {
		margin-right: -11px
	}
}

.cta.cta-btn.cta-animation-expand-right:hover .cta-icon,.cta.cta-btn.cta-animation-expand-right:focus .cta-icon {
	margin-right: -11px
}

.cta.cta-btn.cta-animation-expand-right .cta-icon {
	z-index: 2
}

.cta.cta-btn.cta-animation-expand-right.cta-btn-primary::after {
	background-color: #f60
}

.cta.cta-btn.cta-animation-expand-right.cta-btn-secondary::after {
	background-color: #fff
}

.cta.cta-btn.cta-animation-enlarge:hover,.cta.cta-btn.cta-animation-enlarge:focus {
	-webkit-transform: scale(1.2);
	-moz-transform: scale(1.2);
	-ms-transform: scale(1.2);
	-o-transform: scale(1.2);
	transform: scale(1.2)
}

.cta.cta-link.cta-animation-expand:hover .cta-icon,.cta.cta-link.cta-animation-expand:focus .cta-icon {
	-webkit-transform: translate(1rem, 0);
	-moz-transform: translate(1rem, 0);
	-ms-transform: translate(1rem, 0);
	-o-transform: translate(1rem, 0);
	transform: translate(1rem, 0)
}

.cta.cta-link.cta-animation-expand-left:hover .cta-icon,.cta.cta-link.cta-animation-expand-left:focus .cta-icon {
	-webkit-transform: translate(-1rem, 0);
	-moz-transform: translate(-1rem, 0);
	-ms-transform: translate(-1rem, 0);
	-o-transform: translate(-1rem, 0);
	transform: translate(-1rem, 0)
}

.cta.cta-link.cta-animation-expand-left.cta-icon__arrow-left:hover .cta-icon,.cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow-left:hover .cta-icon,.cta.cta-link.cta-animation-expand-left.cta-icon__arrow-left:focus .cta-icon,.cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow-left:focus .cta-icon {
	-webkit-transform: translate(-1rem, 0) rotate(180deg);
	-moz-transform: translate(-1rem, 0) rotate(180deg);
	-ms-transform: translate(-1rem, 0) rotate(180deg);
	-o-transform: translate(-1rem, 0) rotate(180deg);
	transform: translate(-1rem, 0) rotate(180deg)
}

.cta.cta-animation-icon-swipe-around .cta-icon {
	background: none
}

.cta.cta-animation-icon-swipe-around:hover .cta-icon:after,.cta.cta-animation-icon-swipe-around:focus .cta-icon:after {
	-webkit-animation: swipe-around 0.6s;
	-moz-animation: swipe-around 0.6s;
	-ms-animation: swipe-around 0.6s;
	-o-animation: swipe-around 0.6s;
	animation: swipe-around 0.6s
}

.cta.cta-animation-icon-swipe-around[disabled]:hover .cta-icon:after,.cta.cta-animation-icon-swipe-around[disabled]:focus .cta-icon:after {
	animation: none
}

.cta.cta-animation-icon-location-pin:hover .cta-icon::after,.cta.cta-animation-icon-location-pin:focus .cta-icon::after {
	-webkit-animation: swipe-right 0.7s ease forwards;
	-moz-animation: swipe-right 0.7s ease forwards;
	-ms-animation: swipe-right 0.7s ease forwards;
	-o-animation: swipe-right 0.7s ease forwards;
	animation: swipe-right 0.7s ease forwards
}

.cta.cta-animation-icon-location-pin[disabled]:hover .cta-icon::after,.cta.cta-animation-icon-location-pin[disabled]:focus .cta-icon::after {
	animation: none
}

.cta.cta-animation-icon-left-to-top .cta-icon::before {
	content: "";
	display: block;
	width: 100%;
	height: 40px;
	background: inherit;
	position: absolute;
	bottom: -40px;
	left: -100%;
	z-index: 2
}

.cta.cta-animation-icon-left-to-top:hover .cta-icon::before,.cta.cta-animation-icon-left-to-top:focus .cta-icon::before {
	-webkit-animation: left-to-top 1s ease forwards;
	-moz-animation: left-to-top 1s ease forwards;
	-ms-animation: left-to-top 1s ease forwards;
	-o-animation: left-to-top 1s ease forwards;
	animation: left-to-top 1s ease forwards
}

.cta.cta-animation-icon-left-to-top[disabled]:hover .cta-icon::after,.cta.cta-animation-icon-left-to-top[disabled]:focus .cta-icon::after {
	animation: none
}

.cta.cta-animation-icon-left-to-right .cta-icon::before {
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	background: inherit;
	position: absolute;
	top: 0;
	bottom: auto;
	left: -100%;
	z-index: 2;
	background: inherit
}

.cta.cta-animation-icon-left-to-right:hover .cta-icon:before,.cta.cta-animation-icon-left-to-right:focus .cta-icon:before {
	-webkit-animation: left-to-right 0.7s;
	-moz-animation: left-to-right 0.7s;
	-ms-animation: left-to-right 0.7s;
	-o-animation: left-to-right 0.7s;
	animation: left-to-right 0.7s
}

.cta.cta-animation-icon-step:hover .cta-icon:after,.cta.cta-animation-icon-step:focus .cta-icon:after {
	-webkit-animation: cta-step-in 1s steps(1);
	-moz-animation: cta-step-in 1s steps(1);
	-ms-animation: cta-step-in 1s steps(1);
	-o-animation: cta-step-in 1s steps(1);
	animation: cta-step-in 1s steps(1)
}

.cta.cta-animation-icon-enlarge:hover .cta-icon,.cta.cta-animation-icon-enlarge:focus .cta-icon {
	animation: cta-zoom-in 1s ease forwards
}

.cta.cta-animation-icon-explore .cta-icon::before {
	animation: 4s infinite normal fadeOut, 4s infinite normal moveArrow;
	opacity: 0;
	animation-delay: 1.5s
}

.cta.cta-animation-icon-explore .cta-icon::after {
	animation: 4s infinite normal fadeOutTwo, 4s infinite normal moveArrowTwo;
	opacity: 0;
	animation-delay: 1.5s
}

.cta.cta-animation-icon-explore:hover {
	color: #fff;
	text-decoration: none
}

.cta.cta-animation-icon-explore-storyboard {
	color: #fff;
	text-decoration: none
}

.cta.cta-animation-icon-explore-right:after .cta-icon {
	animation: 4s infinite normal fadeOutTwo, 4s infinite normal moveArrowTwo
}

@media screen and (max-width: 768px) {
	.cta.cta-animation-icon-explore-right:after .cta-icon {
		animation: none
	}
}

.cta.cta-animation-icon-swipe-out-and-in:hover .cta-icon:after {
	-webkit-animation: swipeOutIn 0.7s;
	-moz-animation: swipeOutIn 0.7s;
	-ms-animation: swipeOutIn 0.7s;
	-o-animation: swipeOutIn 0.7s;
	animation: swipeOutIn 0.7s;
	-webkit-animation-iteration-count: 1;
	-moz-animation-iteration-count: 1;
	-ms-animation-iteration-count: 1;
	-o-animation-iteration-count: 1;
	animation-iteration-count: 1
}

.cta.cta-animation-icon-swipe-out-and-in[disabled]:hover .cta-icon:after,.cta.cta-animation-icon-swipe-out-and-in[disabled]:focus .cta-icon:after {
	animation: none
}

.cta.cta-icon__play.cta-animation-enlarge:hover,.cta.cta-icon__play.cta-animation-enlarge:focus {
	-webkit-transform: scale(1.2) translate(-40%, -40%);
	-moz-transform: scale(1.2) translate(-40%, -40%);
	-ms-transform: scale(1.2) translate(-40%, -40%);
	-o-transform: scale(1.2) translate(-40%, -40%);
	transform: scale(1.2) translate(-40%, -40%);
	background-color: rgba(0,0,0,0.3)
}

.cta.cta-icon__play-horizontal-center.cta-animation-enlarge:hover,.cta.cta-icon__play-horizontal-center.cta-animation-enlarge:focus {
	-webkit-transform: scale(1.2) translate(-40%, 0%);
	-moz-transform: scale(1.2) translate(-40%, 0%);
	-ms-transform: scale(1.2) translate(-40%, 0%);
	-o-transform: scale(1.2) translate(-40%, 0%);
	transform: scale(1.2) translate(-40%, 0%)
}

.rtl .cta.cta-link.cta-animation-expand-left:hover .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left:focus .cta-icon {
	-webkit-transform: translate(-1rem, 0) rotate(0deg);
	-moz-transform: translate(-1rem, 0) rotate(0deg);
	-ms-transform: translate(-1rem, 0) rotate(0deg);
	-o-transform: translate(-1rem, 0) rotate(0deg);
	transform: translate(-1rem, 0) rotate(0deg)
}

.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__arrow-left:hover .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow:hover .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow-left:hover .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__arrow-left:focus .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow:focus .cta-icon,.rtl .cta.cta-link.cta-animation-expand-left.cta-icon__long-arrow-left:focus .cta-icon {
	-webkit-transform: translate(1rem, 0) rotate(180deg);
	-moz-transform: translate(1rem, 0) rotate(180deg);
	-ms-transform: translate(1rem, 0) rotate(180deg);
	-o-transform: translate(1rem, 0) rotate(180deg);
	transform: translate(1rem, 0) rotate(180deg)
}

.rtl .cta.cta-link.cta-animation-expand.cta-icon__H-D-Nav-Dropdown-Directive-1:focus .cta-icon,.rtl .cta.cta-link.cta-animation-expand.cta-icon__H-D-Nav-Dropdown-Directive-1:hover .cta-icon {
	-webkit-transform: translate(-1rem, 0) rotate(180deg);
	-moz-transform: translate(-1rem, 0) rotate(180deg);
	-ms-transform: translate(-1rem, 0) rotate(180deg);
	-o-transform: translate(-1rem, 0) rotate(180deg);
	transform: translate(-1rem, 0) rotate(180deg)
}

.rtl .cta.cta-link.cta-animation-expand.cta-icon__long-arrow:focus .cta-icon,.rtl .cta.cta-link.cta-animation-expand.cta-icon__long-arrow:hover .cta-icon {
	-webkit-transform: translate(-1rem, 0) rotate(180deg);
	-moz-transform: translate(-1rem, 0) rotate(180deg);
	-ms-transform: translate(-1rem, 0) rotate(180deg);
	-o-transform: translate(-1rem, 0) rotate(180deg);
	transform: translate(-1rem, 0) rotate(180deg)
}

.rtl .cta.cta-btn.cta-animation-expand:hover,.rtl .cta.cta-btn.cta-animation-expand:focus {
	padding-left: 6.72rem;
	padding-right: 1.5rem
}

.rtl .cta.cta-btn.cta-animation-expand[disabled]:hover,.rtl .cta.cta-btn.cta-animation-expand[disabled]:focus {
	padding-left: 5.6rem !important;
	padding-right: 1.5rem
}

.rtl .cta.cta-btn.cta-animation-icon-location-pin:hover .cta-icon::after,.rtl .cta.cta-btn.cta-animation-icon-location-pin:focus .cta-icon::after {
	-webkit-animation: swipe-left 0.7s ease forwards;
	-moz-animation: swipe-left 0.7s ease forwards;
	-ms-animation: swipe-left 0.7s ease forwards;
	-o-animation: swipe-left 0.7s ease forwards;
	animation: swipe-left 0.7s ease forwards
}

.cta-icon__explore-right>.cta-icon:before {
	animation: 4s infinite normal fadeOut, 4s infinite normal moveArrow;
	animation-delay: 1.5s;
	opacity: 0
}

.cta-icon__explore-down>.cta-icon:before {
	animation: 4s infinite normal fadeOut, 4s infinite normal moveArrow;
	animation-delay: 1.5s;
	opacity: 0
}

.cta-icon__explore-right>.cta-icon:after {
	animation: 4s infinite normal fadeOutTwo, 4s infinite normal moveArrowTwo;
	animation-delay: 1.5s;
	opacity: 0
}

.cta-icon__explore-down>.cta-icon:after {
	animation: 4s infinite normal fadeOutTwo, 4s infinite normal moveArrowTwo;
	animation-delay: 1.5s;
	opacity: 0
}

@keyframes left-to-top {
	0% {
		left: 0;
		bottom: -40px
	}

	100% {
		left: 0;
		bottom: 100%
	}
}

@keyframes swipe-right {
	0% {
		clip: rect(0 1.6em 1.3em 0)
	}

	50% {
		clip: rect(0 1.6em 1.3em 1.6em)
	}

	50.1% {
		clip: rect(0 0 1.3em 0)
	}

	100% {
		clip: rect(0 1.6em 1.3em 0)
	}
}

@keyframes swipe-left {
	from {
		clip: rect(0 1.6em 1.3em 0)
	}

	to {
		clip: rect(0 0 0 0)
	}
}

@keyframes left-to-right {
	0% {
		left: -100%
	}

	100% {
		left: 100%
	}
}

@keyframes swipe-around {
	0% {
		clip: rect(0 3rem 3rem 0)
	}

	50% {
		clip: rect(0 3rem 3rem 3rem)
	}

	50.1% {
		clip: rect(0 -3rem 3rem 0)
	}

	100% {
		clip: rect(0 3rem 3rem 0)
	}
}

@keyframes cta-step-in {
	0% {
		transform: translate(-50%, -50%) rotate(0deg)
	}

	25% {
		transform: translate(-50%, -50%) rotate(90deg)
	}

	50% {
		transform: translate(-50%, -50%) rotate(180deg)
	}

	75% {
		transform: translate(-50%, -50%) rotate(270deg)
	}

	100% {
		transform: translate(-50%, -50%) rotate(360deg)
	}
}

@keyframes cta-explore-expand-right {
	0% {
		right: -30px
	}

	100% {
		right: -40px
	}
}

@keyframes cta-explore-expand-down {
	0% {
		bottom: -25px
	}

	100% {
		bottom: -35px
	}
}

@keyframes cta-couple-arrow-down-out {
	0% {
		opacity: 1
	}

	50% {
		opacity: 1
	}

	80% {
		opacity: 1
	}

	100% {
		opacity: 0
	}
}

@keyframes cta-couple-arrow-down-in {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

@keyframes swipeOutIn {
	0% {
		left: 0px
	}

	50% {
		left: 40px
	}

	51% {
		left: -28px
	}

	100% {
		left: 0px
	}
}

@keyframes cta-zoom-in {
	0% {
		transform: scale(1)
	}

	50% {
		transform: scale(1.2)
	}

	100% {
		transform: scale(1)
	}
}

.cta-icon {
	position: absolute;
	top: 0;
	right: 15px;
	width: 25px;
	height: 100%;
	overflow: hidden;
	background: inherit;
	color: inherit !important
}

.cta-icon:focus {
	outline: none
}

.cta-icon--small .cta-icon:after {
	font-size: 70%
}

.cta-icon:after {
	position: absolute;
	right: 22px;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.cta-icon--left {
	padding-right: 0;
	padding-left: 2rem
}

.cta-icon--left .cta-icon {
	transition: all .5s ease;
	right: auto;
	left: 0
}

.cta-icon--bottom .cta-icon {
	right: auto;
	left: 0
}

.rtl .cta-icon:after {
	right: auto
}

.cta.cta-icon__H-D-Share-to-Facebook .cta-icon {
	width: 3rem
}

.cta.cta-icon__H-D-Share-to-Facebook .cta-icon:after {
	font-size: 3rem
}

.cta.cta-icon__H-D-Share-to-Twitter .cta-icon {
	width: 3.6rem
}

.cta.cta-icon__H-D-Share-to-Twitter .cta-icon:after {
	font-size: 3rem
}

.cta.cta-icon__play {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	display: inline-block;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	border: 1px solid #fff;
	background-color: rgba(0,0,0,0.5);
	z-index: 2
}

.cta.cta-icon__play:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	content: "";
	display: block;
	width: 21px;
	height: 25px;
	background: url("../../images/play-arrow.png") no-repeat center;
	background-size: contain
}

.cta.cta-icon__play:hover:after,.cta.cta-icon__play:focus:after {
	-webkit-animation: swipe-around 0.6s;
	-moz-animation: swipe-around 0.6s;
	-ms-animation: swipe-around 0.6s;
	-o-animation: swipe-around 0.6s;
	animation: swipe-around 0.6s
}

.cta.cta-icon__play .cta-icon {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%)
}

.cta.cta-icon__play .cta-icon:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	content: "";
	width: 21px;
	height: 25px;
	background: url("../../images/play-arrow.png") no-repeat center;
	background-size: contain
}

.cta.cta-icon__error:after {
	content: "\e90b";
	position: absolute;
	top: 0;
	left: 0;
	font-family: 'cta-icon'
}

.cta.cta-icon__long-arrow .cta-icon:after {
	content: "\e94d"
}

.cta.cta-icon__long-arrow-left .cta-icon {
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg)
}

.cta.cta-icon__long-arrow-left .cta-icon:after {
	content: "\e94d"
}

.cta.cta-iconmoon__arrow-left .cta-icon {
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg)
}

.cta.cta-iconmoon__arrow-left .cta-icon:after {
	content: "\e901"
}

.cta.cta-icon__zoom {
	position: relative;
	display: inline-block;
	width: 4em;
	height: 4em;
	color: #fff
}

.cta.cta-icon__zoom .cta-icon {
	width: 30px
}

.cta.cta-icon__zoom .cta-icon:after {
	content: "\e951";
	text-indent: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: auto;
	font-size: 3.2rem;
	transform: translate3d(-50%, -50%, 0)
}

.cta.cta-icon__info {
	display: inline-block;
	width: 4em;
	height: 4em;
	color: #fff
}

.cta.cta-icon__info .cta-icon {
	right: 5px
}

.cta.cta-icon__info .cta-icon:after {
	content: "\e952";
	text-indent: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: auto;
	font-size: 2.2rem;
	transform: translate3d(-50%, -50%, 0)
}

.cta.cta-icon__motorcycle {
	transition: none;
	margin-left: 2.3rem;
	padding-right: 0;
	padding-left: 3.8rem;
	color: #fff
}

.cta.cta-icon__motorcycle .cta-icon {
	width: 35px;
	height: 35px;
	top: -1rem;
	font-size: 1.6rem;
	transition: none
}

.cta.cta-icon__motorcycle .cta-icon:after {
	font-size: 100%;
	content: "\e938"
}

.cta.cta-icon__motorcycle:hover {
	color: #f60
}

.cta.cta-icon__motorcycle:hover .cta-icon:after {
	color: #f60
}

.cta.cta-icon__selected .cta-icon:after {
	content: "\e947"
}

.cta.cta-icon__shopping-tools {
	transition: none;
	margin-left: 2.3rem;
	padding-right: 0;
	color: #fff
}

.cta.cta-icon__shopping-tools .cta-icon {
	font-size: 1.6rem;
	transition: none;
	top: -3px
}

.cta.cta-icon__shopping-tools .cta-icon:after {
	color: #fff;
	font-size: 100%;
	content: "\e94c"
}

.cta.cta-icon__shopping-tools:hover {
	color: #f60
}

.cta.cta-icon__shopping-tools:hover .cta-icon:after {
	color: #f60
}

.cta.cta-icon__left-icon {
	padding-right: 0;
	padding-left: 3rem
}

.cta.cta-icon__left-icon .cta-icon {
	right: auto;
	left: 0
}

.cta.cta-icon__explore {
	position: relative;
	font-size: 1.2rem;
	line-height: 1;
	color: #fff
}

.cta.cta-icon__explore.cta-icon__explore-large {
	padding-right: 5px;
	font-size: 1.8rem;
	line-height: 2.2;
	font-family: "NotoSans-Regular",sans
}

.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
	overflow: visible !important;
	width: 50px;
	top: 12px;
	height: auto;
	line-height: 1.4
}

@media screen and (min-width: 768px) {
	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
		top: 1px;
		width: 31px
	}
}

.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::after,.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::before {
	font-size: 1rem
}

.cta.cta-icon__explore .cta-icon {
	top: auto;
	right: -34px;
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg)
}

.cta.cta-icon__explore .cta-icon:before,.cta.cta-icon__explore .cta-icon:after {
	content: "\e91b";
	display: block;
	font-family: 'icomoon' !important;
	font-size: 0.8rem;
	position: relative;
	right: auto;
	left: 0
}

.cta.cta-icon__explore .cta-icon:before {
	top: 0
}

.cta.cta-icon__explore .cta-icon:after {
	bottom: -1px;
	top: 1px
}

.cta.cta-icon__explore-down {
	height: 36px
}

.cta.cta-icon__explore-down .cta-icon {
	right: auto;
	bottom: -18px;
	left: 50%;
	transform: translateX(-50%)
}

.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon {
	top: auto;
	width: 28px;
	line-height: 1.1
}

.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon::after,.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon::before {
	font-size: 1rem
}

.cta.cta-icon__share {
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase
}

.cta.cta-icon__share--square {
	position: relative;
	padding-top: 33px;
	width: 60px;
	height: 60px;
	background-color: rgba(0,0,0,0.7);
	border: none;
	color: #fff;
	font-size: 0.9rem
}

.cta.cta-icon__share--square .cta-icon {
	top: 9px;
	width: 22px;
	height: 28px;
	right: auto;
	left: 50%;
	transform: translateX(-50%)
}

.cta.cta-icon__share--square .cta-icon::after {
	height: 100%;
	font-size: 1.9rem
}

.cta.cta-icon__share--square--no-text {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
}

.cta.cta-icon__share--inline {
	position: absolute;
	top: 38px;
	left: 22px;
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-right: 4.5rem;
	background-color: transparent;
	letter-spacing: 0.1rem;
	color: #fff;
	cursor: pointer
}

@media screen and (max-width: 480px) {
	.cta.cta-icon__share--inline {
		padding-right: 2.7rem
	}
}

.cta.cta-icon__share--inline .cta-icon {
	right: 0px;
	width: 35px
}

.cta.cta-icon__share--inline .cta-icon:after {
	font-size: 2.7rem
}

.cta.cta-icon__share--active {
	color: #000;
	background-color: #f60
}

.cta.cta-icon__share .cta-icon:after {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	content: "\e94a";
	width: 100%
}

@media screen and (max-width: 480px) {
	.cta.cta-icon__share .cta-icon:after {
		zoom: 0.9
	}
}

.cta.cta-icon__left-to-top .cta-icon:after {
	content: "\e913"
}

.cta.cta-icon__location-pin .cta-icon {
	width: 2.2em;
	right: 22px
}

.cta.cta-icon__location-pin .cta-icon:after {
	content: "\e93c";
	font-size: 120%;
	width: 100%;
	left: 15px
}

.cta.cta-icon__back {
	padding-left: 15px
}

.cta.cta-icon__back .cta-icon {
	width: 8px;
	top: 0px
}

.cta.cta-icon__back .cta-icon:after {
	content: "\e901"
}

.cta.cta-icon__H-D-Accordion {
	position: relative;
	height: 2.5rem;
	width: 2.5rem;
	background: inherit;
	border: none;
	padding: 0
}

.cta.cta-icon__H-D-Accordion .cta-icon {
	left: 0;
	right: auto
}

.cta.cta-icon__H-D-Accordion .cta-icon:after {
	content: "\e93d";
	font-size: 2.2rem;
	color: inherit
}

.cta.cta-icon__H-D-Accordion--close .cta-icon:after {
	content: "\e906"
}

.cta.cta-icon__H-D-Accordion：hover,.cta.cta-icon__H-D-Accordion:focus {
	color: #000
}

.cta.cta-icon__H-D-Accordion：hover .cta-icon,.cta.cta-icon__H-D-Accordion:focus .cta-icon {
	color: inherit;
	outline: none
}

.cta.cta-icon__close .cta-icon::after {
	content: "\e907";
	font-size: 1.9rem
}

.cta.cta-icon__H-D-Nav-Dropdown-Directive .cta-icon {
	width: 8px
}

.rtl .cta-btn {
	text-align: right
}

.rtl .cta-btn .cta-icon {
	left: 15px;
	right: auto
}

.rtl .cta-btn.cta-icon__left-to-top .cta-icon {
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg);
	margin-top: -6px
}

.rtl .cta-icon__H-D-Nav-Dropdown-Directive-1 .cta-icon,.rtl .cta-icon__long-arrow .cta-icon {
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg)
}

.rtl .cta.cta-icon__location-pin .cta-icon:after {
	left: auto
}

.rtl .cta-link.cta-icon__left-to-top .cta-icon {
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg);
	margin-top: -5px
}

@media screen and (min-width: 321px) and (max-width: 767px) {
	.cta.cta-icon__explore.cta-icon__explore-large {
		padding-right: 18px;
		font-size: 1.8rem;
		line-height: 2.2;
		font-family: "NotoSans-Regular", sans
	}

	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
		top: 6px
	}

	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::after,.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::before {
		font-size: .75rem
	}

	.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon {
		top: 30px;
		width: 50px;
		height: auto;
		line-height: 1.5 !important
	}
}

@media screen and (max-width: 768px) {
	.cta.cta-icon__explore.cta-icon__explore-large {
		padding-right: 12px;
		font-size: 2.8rem;
		line-height: 2.2
	}

	.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon {
		width: 50px
	}

	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
		margin-bottom: -7px;
		width: 50px;
		height: auto;
		line-height: 1.1
	}

	.cta-animation-icon-explore-right.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
		top: 12px;
		width: 50px;
		height: auto;
		line-height: 1.1
	}
}

@media screen and (max-width: 568px) {
	.storyboard--manifesto__item--style-share .cta-icon__share--inline .cta-icon {
		right: -5px !important;
		width: 40px
	}
}

@media screen and (max-width: 321px) {
	.cta-icon__explore-right>.cta-icon {
		top: 8px !important
	}

	.cta-icon__explore-down>.cta-icon {
		top: 22px !important
	}

	.cta-icon__explore-down>.cta-icon:after {
		bottom: 6px !important
	}

	.cta.cta-icon__explore.cta-icon__explore-large {
		padding-right: 18px;
		font-size: 1.8rem;
		line-height: 2.2;
		font-family: "NotoSans-Regular", sans
	}

	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::after,.cta.cta-icon__explore.cta-icon__explore-large .cta-icon::before {
		font-size: .75rem
	}

	.cta.cta-icon__explore-down.cta-icon__explore-large .cta-icon {
		width: 50px;
		height: auto;
		line-height: 1.5 !important
	}
}

@media screen and (min-width: 321px) and (max-width: 400px) {
	.cta-icon__explore-down>.cta-icon {
		top: 22px !important
	}

	.cta-icon__explore-right>.cta-icon {
		top: 6px !important
	}
}

@media screen and (min-width: 399px) and (max-width: 768px) {
	.cta-icon__explore-right>.cta-icon {
		top: 6px !important
	}
}

@media screen and (max-width: 768px) {
	.cta-icon__explore-down>.cta-icon:after {
		bottom: 5px !important
	}
}

@media screen and (max-width: 1024px) {
	.storyboard--manifesto__item--style-share .cta-icon__share--inline .cta-icon {
		right: 0px;
		width: 40px
	}
}

@media screen and (min-width: 1023px) and (max-width: 1440px) {
	.cta-icon__explore-right>.cta-icon {
		top: 10px !important
	}

	.storyboard--campaign .cta-icon__explore-right>.cta-icon {
		top: 3px !important
	}

	.cta.cta-icon__explore.cta-icon__explore-large .cta-icon {
		right: -50px;
		width: 50px;
		height: auto
	}
}

@media screen and (min-width: 1023px) {
	.cta-icon__explore-right>.cta-icon:after {
		bottom: 5px !important
	}

	.cta-icon__explore-down>.cta-icon:after {
		bottom: 3px !important
	}
}

.contextual__icon {
	position: relative;
	top: 1px;
	display: inline-block;
	font-family: 'cta-icon';
	font-style: normal;
	font-weight: 400;
	line-height: 1;
	-webkit-font-smoothing: antialiased
}

.contextual__icon :before {
	width: 100%;
	height: 100%
}

.contextual__icon--H-D-Build-Your_own .contextual__icon:before {
	content: "\e919"
}

.contextual__icon--H-D-Compare-Motorcycles .contextual__icon:before {
	content: "\e92b"
}

.contextual__icon--H-D-Estimate-Payment .contextual__icon:before {
	content: "\e91b"
}

.contextual__icon--H-D-Test-Ride .contextual__icon:before {
	content: "\e915"
}

.contextual__icon--H-D-Apply-for-Credit .contextual__icon:before {
	content: "\e918"
}

.contextual__icon--H-D-Find-A-Dealer .contextual__icon:before {
	content: "\e902"
}

.contextual__icon--H-D-Get-A-Catalog .contextual__icon:before {
	content: "\e921"
}

@font-face {
	font-family:'cta-icon';src:url("../../fonts/cta-icon/cta-icon.woff") format("woff");font-weight:normal;font-style:normal
}

@font-face {
	font-family:'cta-icon-new3';src:url("../../fonts/cta-icon-new3/cta-icon-new3-regular-webfont.woff") format("woff");font-weight:normal;font-style:normal
}

.cta-icon__H-D-Apply-for-Credit .cta-icon:after {
	font-size: 2.6rem;
	content: "\e918"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Apply-for-Credit .cta-icon:after {
		font-size: 1.5rem
	}
}

@media screen and (max-width: 768px) {
	.cta-icon__H-D-Apply-for-Credit .cta-link .cta-icon {
		position: relative;
		left: 10px;
		top: -4px
	}

	.cta-icon__H-D-Apply-for-Credit .cta-link .cta-icon:after {
		font-size: 1.1rem
	}
}

.cta-icon__H-D-Back .cta-icon:after {
	content: "\e901"
}

.cta-icon__H-D-Build-Your_own .cta-icon:after {
	font-size: 2.4rem;
	content: "\e919"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Build-Your_own .cta-icon:after {
		font-size: 1.8rem
	}
}

.cta-icon__H-D-Carousel-Left .cta-icon:after {
	content: "\e903"
}

.cta-icon__H-D-Carousel-Right .cta-icon:after {
	content: "\e904"
}

.cta-icon__H-D-Click-and-Drag .cta-icon:after {
	content: "\e905"
}

.cta-icon__H-D-Close-Accordion .cta-icon:after {
	content: "\e906"
}

.cta-icon__H-D-Close .cta-icon:after {
	content: "\e907"
}

.cta-icon__H-D-Closed-Captioned .cta-icon:after {
	content: "\e908"
}

.cta-icon__H-D-Compare-Motorcycles {
	padding-left: 4rem
}

.cta-icon__H-D-Compare-Motorcycles .cta-icon {
	width: 3rem;
	font-size: 1.6rem
}

.cta-icon__H-D-Compare-Motorcycles .cta-icon:after {
	content: "\e92b"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Compare-Motorcycles .cta-icon:after {
		font-size: 0.9rem
	}
}

.cta-icon__H-D-Editable-Field .cta-icon:after {
	content: "\e90a"
}

.cta-icon__H-D-Error .cta-icon:after {
	content: "\e90b"
}

.cta-icon__H-D-Estimate-Payment .cta-icon:after {
	font-size: 2.6rem;
	content: "\e91b"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Estimate-Payment .cta-icon:after {
		font-size: 1.7rem
	}
}

.cta-icon__H-D-Explore-Down .cta-icon:after {
	content: "\e90d"
}

.cta-icon__H-D-Explore-Right .cta-icon:after {
	content: "\e90e"
}

.cta-icon__H-D-Find-A-Dealer .cta-icon:after {
	font-size: 2.0rem;
	content: "\e902"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Find-A-Dealer .cta-icon:after {
		font-size: 1.7rem
	}
}

.cta-icon__H-D-Full-Screen .cta-icon:after {
	content: "\e910"
}

.cta-icon__H-D-Get-A-Catalog .cta-icon:after {
	font-size: 2.6rem;
	content: "\e921"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Get-A-Catalog .cta-icon:after {
		font-size: 1.9rem
	}
}

.cta-icon__H-D-Learn-to-Ride .cta-icon:after {
	font-size: 2.6rem;
	content: "\e912"
}

.cta-icon__H-D-Link-Out .cta-icon:after {
	content: "\e913"
}

.cta-icon__H-D-Loading-Animated .cta-icon:after {
	content: "\e914"
}

.cta-icon__H-D-Menu .cta-icon:after {
	content: "\e937"
}

.cta-icon__H-D-Motorcycles {
	padding-left: 4rem
}

.cta-icon__H-D-Motorcycles .cta-icon {
	width: 3.4rem
}

.cta-icon__H-D-Motorcycles .cta-icon:after {
	font-size: 1.6rem;
	left: 1px;
	content: "\e916"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Motorcycles .cta-icon:after {
		font-size: 1.5rem
	}
}

.cta-icon__H-D-Nav-Dropdown-Directive-1 .cta-icon:after {
	content: "\e939"
}

.cta-icon__H-D-Nav-Dropdown-Directive-2 .cta-icon:after {
	content: "\e93a"
}

.cta-icon__H-D-Next .cta-icon:after {
	content: "\e93b"
}

.cta-icon__H-D-Numbered-Location-Pin .cta-icon:after {
	content: "\e93c"
}

.cta-icon__H-D-Open-Accordion .cta-icon:after {
	content: "\e93d"
}

.cta-icon__H-D-Open-Panels .cta-icon:after {
	content: "\e93e"
}

.cta-icon__H-D-Overlaid-Experience .cta-icon:after {
	content: "\e93f"
}

.cta-icon__H-D-Pause-Video-Player .cta-icon:after {
	content: "\e940"
}

.cta-icon__H-D-Play-Video-Player .cta-icon:after {
	content: "\e941"
}

.cta-icon__H-D-Play .path1 {
	color: #000;
	opacity: 0.7
}

.cta-icon__H-D-Play .path1 .cta-icon:after {
	content: "\e942"
}

.cta-icon__H-D-Play .path2 {
	margin-left: -1em;
	color: #fff
}

.cta-icon__H-D-Play .path2 .cta-icon:after {
	content: "\e943"
}

.cta-icon__H-D-Play .path3 {
	margin-left: -1em;
	color: #fff
}

.cta-icon__H-D-Play .path3 .cta-icon:after {
	content: "\e944"
}

.cta-icon__H-D-Progress-Loading .cta-icon:after {
	content: "\e945"
}

.cta-icon__H-D-Search .cta-icon:after {
	content: "\e917"
}

.cta-icon__H-D-Selected .cta-icon:after {
	content: "\e947"
}

.cta-icon__H-D-Share-to-Facebook .cta-icon:after {
	content: "\e948"
}

.cta-icon__H-D-Share-to-Twitter .cta-icon:after {
	content: "\e949"
}

.cta-icon__H-D-Share .cta-icon:after {
	content: "\e94a"
}

.cta-icon__H-D-Shop .cta-icon:after {
	content: "\e94b"
}

.cta-icon__H-D-Shopping-Tools {
	padding-left: 4rem
}

.cta-icon__H-D-Shopping-Tools .cta-icon {
	width: 3.3rem;
	height: 2rem;
	top: 8px
}

@media screen and (max-width: 767px) {
	.cta-icon__H-D-Shopping-Tools .cta-icon {
		top: -3px
	}
}

.cta-icon__H-D-Shopping-Tools .cta-icon:after {
	font-size: 1.6rem;
	content: "\e924";
	left: 5px
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Shopping-Tools .cta-icon:after {
		font-size: 1.4rem
	}
}

.cta-icon__H-D-Standard-Button-Directive .cta-icon:after {
	content: "\e94d"
}

.cta-icon__H-D-Star .cta-icon:after {
	content: "\e94e"
}

.cta-icon__H-D-Test-Ride .cta-icon:after {
	font-size: 2.6rem;
	content: "\e915"
}

@media screen and (min-width: 768px) and (max-width: 880px) {
	.cta-icon__H-D-Test-Ride .cta-icon:after {
		font-size: 1.8rem
	}
}

.cta-icon__H-D-Volume-Video-Player .cta-icon:after {
	content: "\e950"
}

.cta-icon__H-D-Zoom .cta-icon:after {
	content: "\e951"
}

.cta-icon__info .cta-icon:after {
	content: "\e952"
}

.cta {
	transition: all .5s ease;
	-webkit-animation-iteration-count: 1;
	-moz-animation-iteration-count: 1;
	-ms-animation-iteration-count: 1;
	-o-animation-iteration-count: 1;
	animation-iteration-count: 1;
	font-size: 1.4rem;
	font-family: "NotoSans-Bold";
	text-transform: uppercase;
	white-space: nowrap
}

.cta::before {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0
}

.cta.cta-play {
	margin: 0
}

.cta.cta-no-uppercase {
	text-transform: none
}

.cta:hover {
	cursor: pointer
}

.cta__share-item {
	cursor: pointer
}

.cta-label {
	display: inline-block;
	max-width: 100%;
	margin: 0;
	margin-bottom: 5px;
	font-weight: bold
}

.cta-btn {
	position: relative;
	padding: 1.55rem 5.6rem 1.55rem 1.5rem;
	border: none;
	text-align: left;
	display: inline-block;
	border-radius: 0
}

.cta-btn:hover {
	text-decoration: none
}

.cta-btn .cta-label {
	min-width: 125px;
	margin: 0;
	cursor: pointer
}

.webkit .cta-btn.cta--ltr:focus {
	outline: 5px auto -webkit-focus-ring-color;
	outline-offset: -2px
}

.cta-btn-primary {
	background-color: #f60 !important;
	color: #000 !important
}

.cta-btn-primary:hover,.cta-btn-primary:focus {
	color: #000
}

.cta-btn-secondary {
	background-color: #fff !important;
	color: #000 !important
}

.cta-btn-secondary:hover,.cta-btn-secondary:focus {
	color: #000
}

.cta-btn-third {
	background-color: #000 !important;
	color: #fff !important
}

.cta-btn-third:hover,.cta-btn-third:focus {
	color: #fff
}

.cta-btn-fourth {
	color: #000 !important;
	background-color: transparent !important;
	border: 2px solid #000 !important
}

.cta-btn-fourth:hover,.cta-btn-fourth:focus {
	color: #000
}

.cta-btn-gray {
	color: #9e9b9b !important;
	background-color: #dfdfdf !important
}

.cta-btn-gray:hover,.cta-btn-gray:focus {
	color: #9e9b9b
}

.cta-btn.cta-disabled,.cta-btn[disabled] {
	color: #9e9b9b !important;
	background-color: #dfdfdf !important;
	cursor: not-allowed !important;
	transition: none !important;
	animation: none !important;
	transform: none !important
}

.cta-btn.cta-disabled::after,.cta-btn[disabled]::after {
	background-color: #dfdfdf !important;
	transition: none !important;
	animation: none !important;
	transform: none !important
}

.cta-btn.cta-disabled:hover,.cta-btn[disabled]:hover {
	color: #9e9b9b !important;
	background-color: #dfdfdf !important;
	transition: none !important;
	padding-right: initial !important
}

.cta-btn.cta-disabled:hover::after,.cta-btn.cta-disabled:hover::before,.cta-btn[disabled]:hover::after,.cta-btn[disabled]:hover::before {
	transition: none !important;
	animation: none !important;
	transform: none !important
}

.cta-btn.cta-disabled:hover::after,.cta-btn[disabled]:hover::after {
	margin-right: 0px !important
}

.cta-btn.cta-disabled:hover .cta-label,.cta-btn[disabled]:hover .cta-label {
	animation: none !important;
	cursor: not-allowed
}

.cta-btn.cta-disabled:hover .cta-icon,.cta-btn[disabled]:hover .cta-icon {
	margin-right: 0 !important;
	animation: none !important
}

.cta-btn.cta-disabled:hover .cta-icon::after,.cta-btn[disabled]:hover .cta-icon::after {
	animation: none !important
}

.cta-btn .cta-icon {
	right: 15px
}

.cta-link {
	display: inline-block;
	position: relative;
	padding-right: 3.5rem;
	width: auto;
	text-decoration: none
}

.cta-link .cta-icon {
	right: 0;
	transition: all .5s ease
}

.cta-link-primary {
	color: #f60 !important
}

.cta-link-primary:hover,.cta-link-primary:focus {
	color: #f60 !important;
	text-decoration: none
}

.cta-link-secondary {
	color: #fff !important
}

.cta-link-secondary:hover,.cta-link-secondary:focus {
	color: #fff !important;
	text-decoration: none
}

.cta-link-third {
	color: #000 !important
}

.cta-link-third:hover,.cta-link-third:focus {
	color: #000 !important;
	text-decoration: none
}

.cta-link--relative .cta-icon {
	position: relative;
	right: -15px
}

@media screen and (max-width: 768px) {
	.cta-link--relative .cta-icon {
		right: -8px;
		top: -1px
	}
}

.cta-font-large {
	font-size: 1.6rem;
	line-height: 2.4rem
}

@media screen and (min-width: 320px) {
	.cta-font-large {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.cta-font-large {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 992px) {
	.cta-font-large {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 1440px) {
	.cta-font-large {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.cta-font-small {
	font-size: 12px;
	line-height: 1.8rem
}

@media screen and (min-width: 320px) {
	.cta-font-small {
		font-size: 12px;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.cta-font-small {
		font-size: 12px;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 992px) {
	.cta-font-small {
		font-size: 12px;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 1440px) {
	.cta-font-small {
		font-size: 12px;
		line-height: 1.8rem
	}
}

.cta-border {
	border: 1px solid #000
}

.cta-border-large {
	border: 2px solid #000
}

.cta-close {
	font-size: 1rem;
	width: 90px;
	background-color: transparent;
	color: #fff
}

.cta-close:hover,.cta-close:focus {
	color: #f60
}

.cta-close .cta-icon {
	right: 0
}

.cta-error {
	color: #a8000a;
	font-size: 1.2rem;
	text-transform: none;
	font-weight: 400;
	font-family: "NotoSans-Regular",sans;
	white-space: normal
}

.firefox .cta {
	font-family: "NotoSans-Regular",sans
}

.firefox .cta-link {
	font-family: "NotoSans-Bold",sans
}

.rtl .cta-btn {
	padding: 1.55rem 1.5rem 1.55rem 5.6rem;
	clear: both
}

.rtl .cta-link {
	padding-left: 3.5rem;
	padding-right: 0
}

.rtl .cta-link .cta-icon {
	left: 0;
	right: auto
}

.disabled-social-share .cta__share-item {
	cursor: default
}

.content-style-dark {
	background-color: #000
}

.content-style-grey-dark {
	background-color: #202020
}

.content-style-grey {
	background-color: #494949
}

.content-style-grey-light {
	background-color: #ededed
}

.content-style-light {
	background-color: #fff
}

.content-style-light-texture {
	background-color: #fff;
	background-image: url("../../images/bike-builder/bg.jpg");
	background-size: cover
}

.content-style-image {
	background-color: rgba(0,0,0,0.4);
	background-size: cover;
	background-position: center center
}

#cookieinfo {
	background: none repeat scroll 0 0 #cbcbcb;
	display: none;
	position: relative;
	z-index: 800
}

#cookieinfo .container {
	margin: 0 auto;
	padding: 1.5rem;
	position: relative;
	max-width: 1440px
}

#cookieinfo .container .closebtn {
	background: url("../../images/close.png") center center no-repeat;
	cursor: pointer;
	padding: .7rem;
	position: absolute;
	right: 1rem;
	top: 1rem;
	width: 1.4rem;
	height: 1.4rem;
	background-color: #494949;
	color: #fff
}

#cookieinfo .container .content {
	padding: 1rem 1rem 0 0
}

#cookieinfo a {
	color: #f60
}

.text-anchor {
	position: relative
}

.text-anchor:before {
	content: '';
	position: absolute;
	height: 1rem;
	width: 100%;
	max-width: 9rem;
	top: -1.8rem;
	background-color: #f60
}

.slick-prev,.slick-next {
	position: absolute;
	display: block;
	height: 20px;
	width: 20px;
	line-height: 0px;
	font-size: 0px;
	cursor: pointer;
	background: transparent;
	color: transparent;
	top: 50%;
	-webkit-transform: translate(0, -50%);
	-ms-transform: translate(0, -50%);
	transform: translate(0, -50%);
	padding: 0;
	border: none;
	outline: none
}

.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus {
	outline: none;
	background: transparent;
	color: transparent
}

.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before {
	opacity: 1
}

.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before {
	opacity: .25
}

.slick-prev:before,.slick-next:before {
	font-family: "slick";
	font-size: 20px;
	line-height: 1;
	color: #fff;
	opacity: .75;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.slick-prev {
	left: -25px
}[dir="rtl"] .slick-prev {
	left: auto;
	right: -25px
}

.slick-prev:before {
	content: "←"
}[dir="rtl"] .slick-prev:before {
	content: "→"
}

.slick-next {
	right: -25px
}[dir="rtl"] .slick-next {
	left: -25px;
	right: auto
}

.slick-next:before {
	content: "→"
}[dir="rtl"] .slick-next:before {
	content: "←"
}

.slick-dotted.slick-slider {
	margin-bottom: 30px
}

.slick-dots {
	position: absolute;
	bottom: -25px;
	list-style: none;
	display: block;
	text-align: center;
	padding: 0;
	margin: 0;
	width: 100%
}

.slick-dots li {
	position: relative;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin: 0 5px;
	padding: 0;
	cursor: pointer
}

.slick-dots li button {
	border: 0;
	background: transparent;
	display: block;
	height: 20px;
	width: 20px;
	outline: none;
	line-height: 0px;
	font-size: 0px;
	color: transparent;
	padding: 5px;
	cursor: pointer
}

.slick-dots li button:hover,.slick-dots li button:focus {
	outline: none
}

.slick-dots li button:hover:before,.slick-dots li button:focus:before {
	opacity: 1
}

.slick-dots li button:before {
	position: absolute;
	top: 0;
	left: 0;
	content: "•";
	width: 20px;
	height: 20px;
	font-family: "slick";
	font-size: 6px;
	line-height: 20px;
	text-align: center;
	color: #000;
	opacity: .25;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.slick-dots li.slick-active button:before {
	color: #000;
	opacity: .75
}

.slick-slider {
	position: relative;
	display: block;
	box-sizing: border-box;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-ms-touch-action: pan-y;
	touch-action: pan-y;
	-webkit-tap-highlight-color: transparent
}

.slick-list {
	position: relative;
	overflow: hidden;
	display: block;
	margin: 0;
	padding: 0
}

.slick-list:focus {
	outline: none
}

.slick-list.dragging {
	cursor: pointer;
	cursor: hand
}

.slick-slider .slick-track,.slick-slider .slick-list {
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	-ms-transform: translate3d(0, 0, 0);
	-o-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0)
}

.slick-track {
	position: relative;
	left: 0;
	top: 0;
	display: block
}

.slick-track:before,.slick-track:after {
	content: "";
	display: table
}

.slick-track:after {
	clear: both
}

.slick-loading .slick-track {
	visibility: hidden
}

.slick-slide {
	float: left;
	height: 100%;
	min-height: 1px;
	display: none
}[dir="rtl"] .slick-slide {
	float: right
}

.slick-slide img {
	display: block
}

.slick-slide.slick-loading img {
	display: none
}

.slick-slide.dragging img {
	pointer-events: none
}

.slick-initialized .slick-slide {
	display: block
}

.slick-loading .slick-slide {
	visibility: hidden
}

.slick-vertical .slick-slide {
	display: block;
	height: auto;
	border: 1px solid transparent
}

.slick-arrow.slick-hidden {
	display: none
}

.slick-prev:before,.slick-next:before {
	font-size: 2rem
}

.slick-arrow.slick-disabled {
	visibility: hidden
}/*!
 * Datepicker for Bootstrap
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Ashley Novak
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */.datepicker {
	padding: 4px;
	border-radius: 4px
}

.datepicker.datepicker-inline {
	width: 220px
}

.datepicker.datepicker-dropdown {
	position: absolute;
	left: 0;
	z-index: 9999
}

.datepicker.datepicker-dropdown:before {
	content: '';
	display: inline-block;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-bottom: 7px solid #ccc;
	border-top: 0;
	border-bottom-color: rgba(0,0,0,0.2);
	position: absolute
}

.datepicker.datepicker-dropdown:after {
	content: '';
	display: inline-block;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 6px solid #fff;
	border-top: 0;
	position: absolute
}

.datepicker.datepicker-dropdown.datepicker-orient-left:before {
	left: 107px
}

.datepicker.datepicker-dropdown.datepicker-orient-left:after {
	left: 108px
}

.datepicker.datepicker-dropdown.datepicker-orient-right:before {
	right: 107px
}

.datepicker.datepicker-dropdown.datepicker-orient-right:after {
	right: 108px
}

.datepicker.datepicker-dropdown.datepicker-orient-top:before {
	top: -7px
}

.datepicker.datepicker-dropdown.datepicker-orient-top:after {
	top: -6px
}

.datepicker.datepicker-dropdown.datepicker-orient-bottom:before {
	bottom: -7px;
	border-bottom: 0;
	border-top: 7px solid #999
}

.datepicker.datepicker-dropdown.datepicker-orient-bottom:after {
	bottom: -6px;
	border-bottom: 0;
	border-top: 6px solid #fff
}

.datepicker>div {
	display: none
}

.datepicker.days div.datepicker-days {
	display: block
}

.datepicker.months div.datepicker-months {
	display: block
}

.datepicker.years div.datepicker-years {
	display: block
}

.datepicker table {
	margin: 0;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.datepicker table tr td,.datepicker table tr th {
	text-align: center;
	width: 30px;
	height: 30px;
	border-radius: 4px;
	border: none
}

.table-striped .datepicker table tr td,.table-striped .datepicker table tr th {
	background-color: transparent
}

.datepicker table tr td.day:hover,.datepicker table tr td.day.focused {
	background: #eee;
	cursor: pointer
}

.datepicker table tr td.old,.datepicker table tr td.new {
	color: #777
}

.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover {
	background: none;
	color: #777;
	cursor: default
}

.datepicker table tr td.today,.datepicker table tr td.today:hover,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover {
	color: #333;
	background-color: #5bc0de;
	border-color: #2390b0
}

.datepicker table tr td.today:focus,.datepicker table tr td.today:active,.datepicker table tr td.today.active,.datepicker table tr td.today:hover:focus,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today.disabled:focus,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:hover:focus,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover.active {
	color: #333;
	background-color: #5bc0de;
	border-color: #19667d
}

.datepicker table tr td.today:hover,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover:hover {
	color: #333;
	background-color: #39b3d7;
	border-color: #19667d
}

.datepicker table tr td.today:hover:hover {
	color: #000
}

.datepicker table tr td.today.active:hover {
	color: #fff
}

.datepicker table tr td.range,.datepicker table tr td.range:hover,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover {
	background: #eee;
	border-radius: 0
}

.datepicker table tr td.range.today,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover {
	color: #000;
	background-color: #5bc0de;
	border-color: #2390b0;
	border-radius: 0
}

.datepicker table tr td.range.today:focus,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today.active,.datepicker table tr td.range.today:hover:focus,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today.disabled:focus,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:hover:focus,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover.active {
	color: #000;
	background-color: #5bc0de;
	border-color: #19667d
}

.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover:hover {
	color: #000;
	background-color: #39b3d7;
	border-color: #19667d
}

.datepicker table tr td.selected,.datepicker table tr td.selected:hover,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover {
	color: #fff;
	background-color: #777;
	border-color: #555;
	text-shadow: 0 -1px 0 rgba(0,0,0,0.25)
}

.datepicker table tr td.selected:focus,.datepicker table tr td.selected:active,.datepicker table tr td.selected.active,.datepicker table tr td.selected:hover:focus,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected.disabled:focus,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:hover:focus,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover.active {
	color: #fff;
	background-color: #777;
	border-color: #373737
}

.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover:hover {
	color: #fff;
	background-color: #636363;
	border-color: #373737
}

.datepicker table tr td.active,.datepicker table tr td.active:hover,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover {
	color: #fff;
	background-color: #337ab7;
	border-color: #337ab7;
	text-shadow: 0 -1px 0 rgba(0,0,0,0.25)
}

.datepicker table tr td.active:focus,.datepicker table tr td.active:active,.datepicker table tr td.active.active,.datepicker table tr td.active:hover:focus,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active.disabled:focus,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:hover:focus,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover.active {
	color: #fff;
	background-color: #337ab7;
	border-color: #265a88
}

.datepicker table tr td.active:hover,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover:hover {
	color: #fff;
	background-color: #2a6598;
	border-color: #265a88
}

.datepicker table tr td span {
	display: block;
	width: 23%;
	height: 54px;
	line-height: 54px;
	float: left;
	margin: 1%;
	cursor: pointer;
	border-radius: 4px
}

.datepicker table tr td span:hover {
	background: #eee
}

.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover {
	background: none;
	color: #777;
	cursor: default
}

.datepicker table tr td span.active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover {
	color: #fff;
	background-color: #337ab7;
	border-color: #2e6da4;
	text-shadow: 0 -1px 0 rgba(0,0,0,0.25)
}

.datepicker table tr td span.active:focus,.datepicker table tr td span.active:active,.datepicker table tr td span.active.active,.datepicker table tr td span.active:hover:focus,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active.disabled:focus,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:hover:focus,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover.active {
	color: #fff;
	background-color: #337ab7;
	border-color: #204d74
}

.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover:hover {
	color: #fff;
	background-color: #2a6598;
	border-color: #204d74
}

.datepicker table tr td span.old,.datepicker table tr td span.new {
	color: #777
}

.datepicker th.datepicker-switch {
	width: 145px
}

.datepicker thead tr:first-child th,.datepicker tfoot tr th {
	cursor: pointer;
	color: #337ab7
}

.datepicker thead tr:first-child th:hover,.datepicker tfoot tr th:hover {
	background: #eee
}

.datepicker .cw {
	font-size: 10px;
	width: 12px;
	padding: 0 2px 0 5px;
	vertical-align: middle
}

.datepicker thead tr:first-child th.cw {
	cursor: default;
	background-color: transparent
}

.input-group.date .input-group-addon i {
	cursor: pointer;
	width: 16px;
	height: 16px
}

.input-daterange input {
	text-align: center
}

.input-daterange input:first-child {
	border-radius: 3px 0 0 3px
}

.input-daterange input:last-child {
	border-radius: 0 3px 3px 0
}

.input-daterange .input-group-addon {
	width: auto;
	min-width: 16px;
	padding: 4px 5px;
	font-weight: normal;
	line-height: 1.42857;
	text-align: center;
	text-shadow: 0 1px 0 #fff;
	vertical-align: middle;
	background-color: #eee;
	border: solid #ccc;
	border-width: 1px 0;
	margin-left: -5px;
	margin-right: -5px
}

.de-de .three60-overlay__close-container .cta-close {
	width: 105px
}

.ru-ru .three60-overlay__close-container .cta-close {
	width: 95px
}

.ru-ru .cta.cta-icon__share--square {
	width: 77px
}

img {
	max-width: 100%
}

.three60-overlay {
	height: 100%;
	background-color: #fff;
	overflow-x: hidden
}

.three60-overlay>.row {
	margin-left: 0;
	margin-right: 0
}

.three60-overlay__main-container {
	position: relative;
	overflow: hidden
}

.three60-overlay__close-wrapper {
	background-color: #000
}

@media screen and (min-width: 768px) {
	.three60-overlay__close-wrapper {
		background-color: transparent
	}
}

.three60-overlay__header {
	background-color: #000;
	max-height: 6rem;
	position: relative
}

.three60-overlay__header p,.three60-overlay__header span {
	color: #fff
}

.three60-overlay__title {
	min-height: 60px;
	display: inline-table
}

.three60-overlay__title .cta-icon__share--square {
	background-color: #202020
}

.three60-overlay__title .cta-icon__share--active {
	background-color: #f60
}

.three60-overlay__bikename {
	display: table-cell;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 1.6rem;
	line-height: 1;
	margin-left: 1.7rem;
	text-transform: uppercase;
	max-width: 45%;
	width: 100%;
	padding-top: 2px;
	vertical-align: middle
}

.three60-overlay__bikename span {
	display: block;
	padding: 0 2rem
}

.three60-overlay .drag-arrow {
	position: absolute;
	width: 100%;
	height: 100%
}

.three60-overlay .navigation-container {
	width: 100%;
	height: 100%;
	z-index: 10;
	position: absolute;
	top: 0;
	left: 0;
	cursor: none
}

.three60-overlay__rotate {
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
	pointer-events: none;
	display: none;
	text-align: center
}

.three60-overlay__rotate-icon {
	max-width: 63px;
	width: 63px;
	height: 63px
}

.three60-overlay__rotate-label {
	color: #fff;
	font-size: 1rem;
	font-family: "NotoSans-Bold",sans;
	text-align: center
}

.three60-overlay__share .share-icon {
	background-color: #202020;
	padding: 1.1rem 1.3rem;
	background-image: url("../../images/360-overlay/share-icon.png");
	background-repeat: no-repeat;
	position: relative;
	background-size: 2.2rem;
	background-position-x: 53%;
	background-position-y: 31%;
	text-align: center;
	cursor: pointer;
	width: 6rem;
	margin-left: 15px
}

.three60-overlay__share .share-icon span {
	font-size: 0.9rem;
	display: inline-block;
	margin: 2.9rem auto 0 auto;
	font-family: "NotoSans-Bold",sans
}

.three60-overlay__share .cta-icon__share {
	height: 66px
}

.three60-overlay__share .share-icon:hover,.three60-overlay__share .share-icon.share-open {
	background-color: #ff6600;
	background-image: url("../../images/360-overlay/share-icon-black.png")
}

.three60-overlay__share .share-icon:hover span,.three60-overlay__share .share-icon.share-open span {
	color: #000
}

.three60-overlay__sharepanel {
	background: #fff;
	background-image: url("../../images/360-overlay/share-bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 6rem;
	z-index: 900;
	display: none;
	left: 0
}

.three60-overlay__sharepanel p {
	color: #000
}

.three60-overlay__sharepanel .share-close {
	text-align: right;
	padding: 0.5rem 1.5rem
}

@media screen and (min-width: 768px) {
	.three60-overlay__sharepanel .share-close .cta-label {
		display: none
	}
}

.three60-overlay__sharepanel .share-close .cta-close {
	width: 80px
}

.three60-overlay__sharepanel .share-close .cta-icon {
	left: auto;
	right: 0
}

@media screen and (min-width: 768px) {
	.three60-overlay__sharepanel .share-close .cta-icon::after {
		color: #000
	}
}

.three60-overlay__social-icon {
	display: inline-block;
	position: relative;
	width: 5rem;
	height: 5rem;
	color: #000
}

.three60-overlay__social-icon:hover,.three60-overlay__social-icon:focus {
	color: #000
}

.three60-overlay__share-wrapper {
	padding: 10rem 5rem
}

@media screen and (min-width: 768px) {
	.three60-overlay__share-wrapper {
		padding: 0 6rem 7rem 6rem
	}
}

.three60-overlay__share-title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 2.4rem;
	text-transform: uppercase;
	margin: 0.8rem 0 1rem 0
}

.three60-overlay__share-desc {
	font-family: "NotoSans-Regular",sans;
	font-size: 2rem;
	font-size: 1.4rem;
	line-height: 1.8rem;
	margin-bottom: 2rem
}

.three60-overlay__share-text {
	margin-bottom: 0;
	text-transform: uppercase;
	font-size: 1.2rem;
	line-height: 1
}

.three60-overlay__bike {
	background-color: #fff;
	position: relative;
	z-index: 5;
	-webkit-backface-visibility: hidden
}

.three60-overlay__bike ul {
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%
}

.three60-overlay__bike li {
	height: 100%
}

.three60-overlay__bike img {
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	position: absolute;
	left: 50%;
	top: 50%;
	max-width: initial;
	width: auto;
	height: 100%
}

.three60-overlay__direct-link {
	outline: #000;
	border: 1px solid #000;
	padding: 0.5rem;
	width: 100%
}

.three60-overlay__color-options {
	z-index: 200
}

.three60-overlay__color-options img {
	opacity: 1
}

.three60-overlay__wheels-options {
	z-index: 400
}

.three60-overlay__wheels-options img {
	opacity: 1
}

.three60-overlay__bottom {
	position: relative;
	background-color: #fff;
	background-image: url("../../images/360-overlay/color-options-bg.jpg");
	background-size: 100%;
	background-repeat: no-repeat;
	padding-bottom: 3rem
}

.three60-overlay__bottom ul {
	list-style: none;
	float: none;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 1.9rem;
	overflow: hidden
}

.three60-overlay__bottom ul li {
	display: inline-block;
	position: relative;
	margin-left: 28px;
	margin-right: 28px;
	float: none
}

.three60-overlay__paint-name {
	margin: 0 auto;
	padding: 4rem 1rem 0 1rem;
	float: none;
	text-align: center
}

.three60-overlay__paint-name p {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.three60-overlay__paint-name p {
		font-size: 1.4rem;
		line-height: 1.57rem
	}
}

@media screen and (min-width: 768px) {
	.three60-overlay__paint-name p {
		font-size: 1.577rem;
		line-height: 1.5rem
	}
}

.three60-overlay__paint-name span {
	font-family: "NotoSans-Regular",sans;
	margin: 0rem 0 0 1rem;
	font-size: 1.2rem;
	text-transform: initial
}

.three60-overlay__paint-options {
	z-index: 400
}

.three60-overlay__paint-options li {
	position: relative;
	cursor: pointer;
	overflow: hidden;
	text-align: center
}

.three60-overlay__paint-options span {
	display: inline-block;
	border-bottom: 6px solid transparent;
	bottom: 0.7rem;
	height: 6px;
	width: 100%;
	margin: 0 auto
}

.three60-overlay__paint-options li:hover span,.three60-overlay__paint-options li.selected span {
	border-bottom: 6px solid #f60
}

.three60-overlay__paint-img {
	width: 4.4rem;
	height: auto
}

@media only screen and (min-width: 768px) {
	.three60-overlay__paint-img {
		width: 6.7rem
	}
}

.three60-overlay__closebutton {
	display: table-cell;
	vertical-align: middle;
	right: 15px;
	position: relative;
	top: -2px
}

.three60-overlay__close-container .cta-close {
	width: 80px
}

.three60-overlay__close-container--style-2 {
	padding-right: 0px;
	padding-top: 0px;
	padding-bottom: 5px
}

.three60-overlay__special-bike-text {
	text-align: center
}

.three60-overlay__special-bike-text .bold {
	font-family: "NotoSans-Bold",sans
}

.loading .three60-overlay__wheels-options,.loading .three60-overlay__color-options {
	opacity: 0
}

@media only screen and (min-width: 768px) {
	.three60-overlay__bike {
		height: 540px
	}

	.three60-overlay__share {
		padding-left: 0
	}

	.three60-overlay__bikename {
		font-size: 2.4rem;
		min-height: 60px;
		box-sizing: border-box;
		margin: 0 0 0 3.3rem;
		padding-top: 21px;
		padding-bottom: 15px;
		max-width: 100%
	}

	.three60-overlay__bottom {
		text-align: center
	}

	.three60-overlay__bottom ul {
		padding: 0;
		margin: 4rem auto 1.6rem auto;
		float: none;
		overflow: hidden
	}

	.three60-overlay__bottom ul .col-md-2 {
		width: 12%
	}

	.three60-overlay__rotate {
		display: block
	}

	.three60-overlay__closebutton {
		right: -2rem;
		padding-right: 4.5rem;
		font-size: 1.1rem
	}

	.three60-overlay__closebutton:after {
		width: 3rem;
		height: 3rem
	}

	.three60-overlay>.row:nth-child(2),.three60-overlay>.row:nth-child(3) {
		margin-left: 0;
		margin-right: 0
	}

	.three60-overlay__sharepanel {
		max-width: 42.5rem
	}

	.ie .three60-overlay__bike img {
		max-width: inherit
	}
}

@media only screen and (max-width: 767px) {
	.three60-overlay__sharepanel {
		top: 0;
		width: 100%;
		height: 100vh
	}

	.three60-overlay__rotate {
		display: block
	}

	.three60-overlay__bottom ul {
		overflow: hidden;
		padding-left: 1.93237%;
		padding-right: 1.93237%
	}

	.three60-overlay__bottom ul li {
		width: 12.07729%;
		float: left;
		margin-bottom: 1.5rem;
		margin-left: 3.86473%;
		margin-right: 3.86473%
	}

	.three60-overlay__bottom ul .col-md-2 {
		width: 20%
	}

	.three60-overlay__paint-img {
		width: 100%
	}

	.three60-overlay__paint-name {
		text-align: left;
		padding: 2.4rem 2.4rem 1rem 2.4rem
	}

	.three60-overlay__share .share-icon {
		padding: .8rem 1.3rem
	}

	.three60-overlay__share .cta-icon__share {
		height: 60px;
		padding-top: 35px
	}

	.three60-overlay__share .cta-icon__share .cta-icon {
		top: 10px
	}

	.three60-overlay__sharepanel {
		right: 0
	}

	.chrome .three60-overlay__share .share-icon {
		padding: .9rem 1.3rem
	}

	.product-carousel__color-disclaimer {
		clear: both
	}
}

.chrome .three60-overlay__share .share-icon {
	padding: 1.2rem 1.3rem
}

.anniversary-event {
	background-color: #fff
}

.anniversary-article {
	background-color: #ededed;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	padding: 3rem 0 4.8rem 0
}

.anniversary-article--flipped .anniversary-article__image {
	float: none
}

.anniversary-article__header {
	position: relative
}

.anniversary-article__details {
	padding-left: 2.5rem;
	width: 95%;
	position: relative;
	order: -1
}

.anniversary-article__details--bottom {
	margin-top: 2.5rem;
	padding-left: 0
}

.anniversary-article__title {
	letter-spacing: 0.1rem;
	margin-bottom: 3rem;
	padding-top: 2rem;
	display: inline-block;
	margin-top: 4rem;
	position: relative
}

@media screen and (min-width: 320px) {
	.anniversary-article__title {
		font-size: 2rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.anniversary-article__title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.anniversary-article__title:before {
	content: '';
	position: absolute;
	height: 1rem;
	width: 100%;
	max-width: 9rem;
	top: -1rem;
	background-color: #f60
}

.anniversary-article__headline {
	letter-spacing: 0.1rem;
	margin-bottom: 2rem;
	display: block
}

@media screen and (min-width: 320px) {
	.anniversary-article__headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.anniversary-article__headline {
		font-size: 4rem;
		line-height: 4.7rem
	}
}

@media screen and (min-width: 992px) {
	.anniversary-article__headline {
		font-size: 5rem;
		line-height: 5.4rem
	}
}

.anniversary-article__headline--narrow {
	width: 75%
}

.anniversary-article__description {
	text-transform: none;
	margin-bottom: 3rem
}

@media screen and (min-width: 320px) {
	.anniversary-article__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.anniversary-article__image {
	width: 93%;
	float: right
}

.anniversary-article--last .anniversary-article__details {
	order: 0;
	width: 100%;
	margin-top: 0;
	padding-left: 0;
	text-align: center
}

.anniversary-article--last .anniversary-article__title:before {
	left: 50%;
	background-color: #ff6600;
	transform: translateX(-50%)
}

@media screen and (min-width: 768px) {
	.anniversary-article {
		padding-top: 0;
		padding-bottom: 0;
		background-color: #ffffff
	}

	.anniversary-article__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 96%;
		margin: 0 auto;
		background-color: #ededed;
		padding: 0 4.7rem 6rem 6.7rem
	}

	.anniversary-article__title {
		padding-top: 0;
		margin-top: 0;
		margin-bottom: 3.4rem;
		line-height: 2.6rem
	}

	.anniversary-article__title:before {
		top: -2.4rem
	}

	.anniversary-article__headline {
		margin-bottom: 4rem
	}

	.anniversary-article--first .anniversary-article__image {
		margin-top: -5.8rem
	}

	.anniversary-article--first .anniversary-article__content {
		margin-top: 5.8rem
	}

	.anniversary-article--first .anniversary-article__title {
		padding-top: 0;
		margin-bottom: 3.4rem;
		line-height: 2.6rem
	}

	.anniversary-article--first .anniversary-article__details {
		margin-top: 0;
		padding-left: 0
	}

	.anniversary-article--flipped .anniversary-article__image {
		width: 63%;
		margin-left: -3%
	}

	.anniversary-article--flipped .anniversary-article__content {
		padding: 6.2rem 8.7rem 6rem 0
	}

	.anniversary-article--flipped .anniversary-article__details {
		order: 0;
		padding-left: 5rem
	}

	.anniversary-article--last .anniversary-article__image {
		width: 63%;
		margin-left: -3%
	}

	.anniversary-article--last .anniversary-article__content {
		padding: 9.8rem 8.7rem 7.4rem 8.7rem
	}

	.anniversary-article--last .anniversary-article__details {
		order: 0;
		width: 100%;
		margin-top: 0;
		padding-left: 0;
		text-align: center
	}

	.anniversary-article--last .anniversary-article__title:before {
		left: 50%;
		background-color: #ff6600;
		transform: translateX(-50%)
	}

	.anniversary-article--last .button {
		display: inline-block;
		max-width: 30rem;
		text-align: center
	}

	.anniversary-article__details {
		width: 40%;
		min-height: 28rem;
		padding-top: 0;
		padding-left: 3.2rem;
		padding-top: 5.8rem
	}

	.anniversary-article__details--bottom {
		width: 75%
	}

	.anniversary-article__description {
		margin-bottom: 4rem;
		width: 85%
	}

	.anniversary-article__image {
		width: 55%
	}
}

@media screen and (min-width: 992px) {
	.anniversary-article__content {
		padding: 0 8.7rem 6rem 8.7rem
	}
}

@media screen and (max-width: 767px) {
	.anniversary-article .ltr-button {
		width: 70%
	}
}

.product-carousel {
	background: url("../../images/bike-detail/product-carousel/paint-bg.jpg");
	background-size: contain;
	padding: 4.2rem 0 3.6rem;
	text-align: center;
	position: relative
}

@media screen and (min-width: 768px) {
	.product-carousel {
		padding: 8.2rem 0 5.5rem 0
	}
}

.product-carousel .slick-list {
	padding-right: 3.25rem;
	padding-left: 0.75rem
}

.product-carousel .play-button {
	z-index: 10
}

.product-carousel__color-disclaimer {
	text-align: center;
	font-size: 1rem
}

.product-carousel__title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	width: 80%;
	margin: 0 auto;
	float: none
}

@media screen and (min-width: 320px) {
	.product-carousel__title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.product-carousel__title {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.product-carousel__bikename {
	vertical-align: middle;
	display: table-cell;
	padding: 0 2rem;
	width: 100%
}

.product-carousel__description {
	font-family: "NotoSans-Regular",sans;
	margin: 0 auto 2rem auto;
	float: none
}

@media screen and (min-width: 320px) {
	.product-carousel__description {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.product-carousel__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.product-carousel__item {
	position: relative;
	margin: 0 0.75rem 0 0.75rem;
	background-color: #000;
	pointer-events: none
}

.product-carousel__item--zoom.cta.cta-icon__zoom {
	display: none
}

.product-carousel__item--zoom.cta.cta-icon__zoom .cta-icon {
	text-indent: -9999px;
	font-size: 0;
	width: 32px;
	background-color: transparent;
	left: 1.25rem
}

.product-carousel__item.slick-current .cta-icon__play {
	pointer-events: all
}

.product-carousel__item.slick-current .product-carousel__item--zoom {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	z-index: 9;
	display: block;
	width: 5.5rem;
	height: 5.5rem;
	background-color: rgba(0,0,0,0.5);
	pointer-events: all
}

.product-carousel__item.slick-current .product-carousel__item--zoom:focus {
	outline: none
}

@media (max-width: 768px) {
	.product-carousel__item.slick-current .product-carousel__item--zoom {
		display: block
	}
}

.product-carousel__item--image {
	width: 100%;
	position: relative;
	left: -1.5rem
}

.product-carousel__arrow {
	display: none
}

.product-carousel__overlay {
	opacity: 0;
	visibility: hidden;
	background-color: #000000;
	height: 100%;
	width: 100%;
	text-align: left;
	max-width: 1440px;
	position: fixed;
	top: 0;
	overflow-y: auto;
	z-index: 10000;
	-webkit-transition: opacity ease-out 0.25s;
	-moz-transition: opacity ease-out 0.25s;
	-ms-transition: opacity ease-out 0.25s;
	-o-transition: opacity ease-out 0.25s;
	transition: opacity ease-out 0.25s
}

.product-carousel__overlay--360 {
	margin: 0 auto;
	left: 0;
	right: 0
}

.product-carousel__overlay-header {
	display: table;
	background-color: #000;
	color: #fff;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 6rem;
	width: 100%
}

.product-carousel__overlay-header .cta-icon__share--square {
	background-color: #202020
}

.product-carousel__overlay-header .cta-icon__share--active {
	background-color: #f60
}

.product-carousel__overlay-share-btn {
	display: table-cell;
	vertical-align: middle;
	position: relative;
	font-family: "NotoSans-Bold",sans;
	padding: 1.1rem 1.5rem;
	width: 6rem;
	height: 6rem;
	background-color: #202020
}

.product-carousel__overlay-share-btn-icon {
	max-width: 2rem;
	margin-bottom: 0.9rem;
	position: absolute;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%)
}

.product-carousel__overlay-share-btn-icon--white {
	display: block
}

.product-carousel__overlay-share-btn-icon--black {
	display: none
}

.product-carousel__overlay-share-btn-copy {
	text-transform: uppercase;
	margin: 2.8rem 0 0 0
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-share-btn-copy {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.product-carousel__overlay-title {
	display: table-cell;
	vertical-align: middle;
	text-transform: uppercase;
	padding: 0 2.2rem
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.product-carousel__overlay-title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.product-carousel__overlay-close {
	display: table-cell;
	vertical-align: middle;
	font-size: 0.9rem;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 33px;
	right: 20px;
	position: relative;
	display: table-cell;
	vertical-align: middle;
	text-align: right
}

.product-carousel__overlay-close .cta-label {
	min-width: inherit
}

.product-carousel__overlay-close .cta-icon {
	right: -5px
}

.product-carousel__overlay-image-wrapper {
	overflow: auto;
	text-align: center;
	height: 100%;
	margin-top: -1rem
}

@media screen and (min-width: 1440px) {
	.product-carousel__overlay-image-wrapper {
		overflow: hidden
	}
}

.product-carousel__overlay-wrapper {
	position: fixed;
	z-index: 10000;
	width: 100%;
	height: 100%;
	background: #000;
	top: 0;
	left: 0;
	opacity: 0;
	visibility: hidden
}

.product-carousel__overlay--image {
	height: 100%;
	max-width: none
}

.product-carousel__overlay-body {
	padding: 10rem 5rem
}

@media screen and (max-width: 767px) and (orientation: landscape) {
	.product-carousel__overlay-body {
		padding: 4rem 5rem
	}
}

.product-carousel__overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-heading {
		font-size: 2.4rem;
		line-height: 2.8rem
	}
}

.product-carousel__overlay-share-ctas {
	margin: 2.8rem 0
}

.product-carousel__overlay-share-cta {
	margin-right: 3.2rem
}

.product-carousel__overlay-share-cta--facebook {
	width: 1.4rem
}

.product-carousel__overlay-share-cta--twitter {
	width: 3.7rem
}

.product-carousel__overlay-share-cta:hover,.product-carousel__overlay-share-cta:focus {
	color: transparent;
	text-decoration: none
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-copy {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.product-carousel__overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-copy--small {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.product-carousel__overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.product-carousel__overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-textbox-value {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.product-carousel__overlay-footer {
	background-color: rgba(0,0,0,0.7);
	color: #ffffff;
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	padding: 0.6rem 0 1rem
}

@media screen and (min-width: 320px) {
	.product-carousel__overlay-footer-pageNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.product-carousel__overlay--active {
	opacity: 1;
	visibility: visible;
	overflow: hidden
}

.product-carousel__overlay--share {
	background: url("../../images/bike-detail/product-carousel/paint-bg.jpg") no-repeat;
	background-size: cover
}

.product-carousel__overlay--share .product-carousel__overlay-body {
	max-height: calc(100% - 6rem);
	overflow-y: auto;
	-webkit-overflow-scrolling: touch
}

.product-carousel__overlay--share .product-carousel__overlay-close .cta-label {
	visibility: hidden
}

.product-carousel__overlay--share .product-carousel__overlay-close .cta-icon {
	left: auto;
	right: 0
}

@media screen and (min-width: 768px) {
	.product-carousel__overlay--share .product-carousel__overlay-close .cta-icon:after {
		color: #000
	}
}

@media screen and (min-width: 768px) {
	.product-carousel__overlay--share .cta-close:hover {
		color: unset
	}
}

.product-carousel__slideNum {
	font-family: "NotoSans-Regular",sans;
	text-align: center;
	margin: 2rem 0 1rem 0
}

@media screen and (min-width: 320px) {
	.product-carousel__slideNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.product-carousel__slideNum--number {
	font-family: "NotoSans-Bold",sans
}

.product-carousel__paint-selector {
	text-align: center;
	overflow: hidden;
	white-space: nowrap
}

.product-carousel__paint-selector--title {
	position: relative;
	margin: 2rem 0 3rem 0;
	max-width: 84%;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	cursor: pointer;
	white-space: normal
}

@media screen and (min-width: 320px) {
	.product-carousel__paint-selector--title {
		font-size: 1.6rem;
		line-height: 2.5rem
	}
}

.product-carousel__paint-selector--title .cta-icon {
	top: -1px;
	position: relative;
	right: 0;
	margin-left: 0.5rem
}

.product-carousel__paint-selector--option {
	width: 14.4%;
	margin-left: 2.66%;
	cursor: pointer
}

.product-carousel__paint-selector--option:first-child {
	margin-left: 0
}

.product-carousel__paint-selector--title+.product-carousel__paint-selector--option {
	margin-left: 0
}

.product-carousel__paint-selector--overflow {
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	-ms-border-radius: 100px;
	-o-border-radius: 100px;
	border-radius: 100px;
	display: inline-block;
	min-width: 3rem;
	border: 2px solid #000;
	margin-left: 1.0rem;
	padding: 0.5rem 0.7rem;
	font-size: 1.0rem;
	vertical-align: middle;
	font-family: "NotoSans-Bold",sans;
	cursor: pointer
}

.product-carousel__paint-selector--overflow-hidden {
	position: absolute;
	visibility: hidden
}

.ie .product-carousel__overlay-close .cta-icon:after {
	top: 3rem
}

.card-carousel--key-features .card-carousel__item--bottom-section {
	background: url("../../images/bike-detail/card-carousel/card-carousel-bg.jpg") bottom center
}

.card-carousel {
	background-color: #000;
	color: #fff;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	padding: 4.2rem 0;
	text-transform: uppercase;
	position: relative
}

.card-carousel__carousel {
	margin-top: 2.4rem
}

.card-carousel__item:focus {
	outline: none
}

.card-carousel__item--title {
	font-weight: bold
}

@media screen and (min-width: 768px) {
	.card-carousel {
		padding: 8.2rem 0
	}
}

.card-carousel__wrapper {
	position: relative
}

.card-carousel__thumbnail {
	position: relative
}

.card-carousel__carousel .slick-track {
	display: -webkit-flex;
	display: flex
}

.card-carousel__section-name {
	letter-spacing: 0.2rem;
	padding-left: 3.1rem;
	display: block;
	max-width: 50rem
}

@media screen and (min-width: 320px) {
	.card-carousel__section-name {
		font-size: 2rem;
		line-height: 3.2rem
	}
}

.card-carousel__title {
	letter-spacing: 0.3rem;
	padding-left: 3.1rem;
	display: block
}

@media screen and (min-width: 320px) {
	.card-carousel__title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.card-carousel__title {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.card-carousel__subtitle {
	padding-left: 3.1rem;
	margin: 1.4rem 0;
	width: 90%;
	text-transform: none
}

@media screen and (min-width: 320px) {
	.card-carousel__subtitle {
		font-size: 1.6rem;
		line-height: 2.6rem
	}
}

.card-carousel__link {
	padding-left: 3.1rem
}

.card-carousel__arrow {
	display: none
}

.card-carousel__item {
	margin: 0 0.4rem 0 0.4rem;
	color: #000;
	position: relative;
	text-transform: none;
	height: auto;
	background-color: #fff
}

.card-carousel__item:hover {
	text-decoration: none
}

.card-carousel__item-wrapper {
	position: relative
}

.card-carousel__item--image {
	position: relative;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	width: 100%
}

.card-carousel__item--disclaimer {
	background-color: #fff;
	text-align: right;
	color: #7f7f7f;
	padding: 5px 0;
	position: relative
}

@media screen and (min-width: 320px) {
	.card-carousel__item--disclaimer {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.card-carousel__item--capation {
	position: absolute;
	bottom: 0;
	color: #fff;
	width: 100%;
	pointer-events: all;
	z-index: 10
}

@media screen and (min-width: 320px) {
	.card-carousel__item--capation {
		max-height: 100%;
		overflow: hidden
	}

	.card-carousel__item--capation .card-carousel__item--capation-desc-content .icon--close {
		font-size: 10px
	}

	.card-carousel__item--capation .product-carousel__item.slick-current .product-carousel__item--zoom {
		display: none
	}
}

.card-carousel__item--capation-desc-icon {
	float: right;
	margin-right: 15px;
	pointer-events: all;
	width: 35px;
	height: 35px;
	background-color: #202020;
	margin: 0;
	overflow: hidden
}

.card-carousel__item--capation-desc-content {
	background-color: rgba(0,0,0,0.4);
	pointer-events: all;
	padding: 40px 80px 40px 35px;
	text-align: left;
	margin-bottom: 0
}

@media screen and (min-width: 320px) {
	.card-carousel__item--capation-desc-content {
		font-size: 1.6rem;
		line-height: 2.5rem
	}
}

.card-carousel__item--capation-desc-content .icon--close {
	position: absolute;
	top: 15px;
	right: 25px
}

.card-carousel__item--title {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.card-carousel__item--title {
		font-size: 2rem;
		line-height: 3.2rem
	}
}

.card-carousel__item--description {
	font-family: "NotoSans-Regular",sans;
	position: relative;
	z-index: 9
}

@media screen and (min-width: 320px) {
	.card-carousel__item--description {
		font-size: 1.6rem;
		line-height: 2.6rem
	}
}

.card-carousel__item--description p {
	margin-bottom: 0
}

.card-carousel__item--description .link--black {
	position: relative
}

.card-carousel__item--description .link--black:after {
	content: '\e902';
	font-family: 'icomoon';
	font-size: 1.2rem;
	margin-left: 0.6rem
}

.card-carousel__item--bottom-section {
	background-size: cover;
	padding: 2.55rem 2.85rem 3rem 2.85rem;
	display: -webkit-flex;
	-webkit-flex-direction: column;
	-webkit-flex-grow: 1;
	display: flex;
	flex-direction: column;
	flex-grow: 1
}

@media screen and (min-width: 768px) {
	.card-carousel__item--bottom-section {
		padding: 2.2rem 2.85rem 3.8rem 2.85rem
	}
}

.card-carousel__item.slick-slide {
	height: auto
}

.card-carousel__slideNum {
	font-family: "NotoSans-Regular",sans;
	text-align: center;
	margin-top: 2.4rem;
	text-transform: none
}

@media screen and (min-width: 320px) {
	.card-carousel__slideNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.card-carousel__slideNum--hidden {
	display: none
}

.card-carousel__slideNum--number {
	font-family: "NotoSans-Bold",sans
}

.card-carousel__cta-container {
	padding: 0 3.1rem;
	display: -webkit-flex;
	display: flex
}

.card-carousel__cta-container .card-carousel__cta {
	margin-left: 1.2rem
}

.card-carousel__cta-container .card-carousel__cta:first-child {
	margin-left: 0
}

.card-carousel__cta-container .card-carousel__cta:first-child .cta-label {
	min-width: 133px
}

.card-carousel__cta-container .card-carousel__cta.cta.cta-icon__left-to-top .cta-icon {
	right: 0px
}

.card-carousel__cta-container .card-carousel__cta-single:first-child {
	margin-right: auto;
	margin-left: auto
}

@media screen and (min-width: 768px) {
	.card-carousel__cta-container {
		padding: 0 10rem;
		max-width: 37.5rem;
		margin: 0 auto;
		text-align: center;
		display: inherit
	}
}

.card-carousel__cta {
	padding: 1.4rem 2.5rem 1.4rem 1.4rem;
	font-family: "NotoSans-Bold",sans;
	display: inline-block;
	margin-top: 2rem;
	position: relative;
	text-align: left;
	min-width: 44%
}

@media screen and (min-width: 320px) {
	.card-carousel__cta {
		font-size: 1.4rem;
		line-height: 1.4rem
	}
}

.card-carousel__cta:last-child {
	float: right
}

.card-carousel__cta:first-child {
	float: none
}

.card-carousel__cta [class^="icon-"] {
	position: absolute;
	right: 10px;
	top: 14px
}

@media screen and (min-width: 768px) {
	.card-carousel__cta [class^="icon-"] {
		position: relative;
		right: inherit;
		top: inherit;
		margin-left: 20px;
		float: right
	}
}

.card-carousel--shop {
	background-color: #202020
}

.specs {
	background: #fff url("../../images/bike-detail/specs/specs-bg.jpg") no-repeat;
	background-size: contain;
	text-align: center;
	padding: 4.2rem 0
}

@media screen and (min-width: 768px) {
	.specs {
		padding: 8.2rem 0
	}
}

.specs__stars {
	margin-bottom: 2rem
}

.specs__stars .icon--star {
	background: url("../../images/star-black.png") no-repeat;
	background-size: 100%
}

.specs--title {
	margin-bottom: 2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media screen and (min-width: 320px) {
	.specs--title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.specs--title {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.specs--description {
	font-family: "NotoSans-Regular",sans;
	width: 70%;
	margin: 1.5rem auto 2rem auto
}

@media screen and (min-width: 320px) {
	.specs--description {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.specs--description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.specs--cta-wrapper {
	display: inline-block;
	position: relative;
	text-align: center
}

.specs-row {
	padding: 3rem 0.2rem
}

.specs-col {
	display: inline-block;
	width: 49%;
	vertical-align: top
}

.specs-col:first-child {
	display: inline-block;
	width: 49%
}

@media screen and (min-width: 320px) {
	.specs-col:first-child .specs-value {
		font-size: 2.35rem;
		line-height: 1.1
	}
}

@media screen and (min-width: 768px) {
	.specs-col:first-child .specs-value {
		font-size: 4rem;
		line-height: 1
	}
}

@media screen and (min-width: 320px) {
	.specs-col:nth-child(3) .specs-value {
		font-size: 2.35rem;
		line-height: 1.1
	}
}

@media screen and (min-width: 768px) {
	.specs-col:nth-child(3) .specs-value {
		font-size: 4rem;
		line-height: 1
	}
}

.specs .specs-name {
	font-family: "NotoSans-Bold",sans;
	letter-spacing: 1px;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.specs .specs-name {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.specs .specs-name {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.specs .specs-value {
	letter-spacing: 1.16px;
	margin-bottom: 46px;
	font-weight: 700;
	font-size: 4rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	line-height: 1;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.specs .specs-value {
		font-size: 3.5rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.specs .specs-value {
		font-size: 4rem;
		line-height: 1
	}
}

.specs--cta-wrapper {
	max-width: 84%
}

.specs--cta {
	width: 100%;
	white-space: normal
}

@media screen and (min-width: 768px) {
	.product-carousel {
		background: url("../../images/bike-detail/product-carousel/paint-bg-lg.jpg");
		background-size: contain
	}

	.product-carousel__title {
		letter-spacing: 0.3rem;
		margin-bottom: 0.5rem
	}

	.product-carousel__description {
		letter-spacing: 0.08rem;
		width: 50%
	}

	.product-carousel__item {
		width: 80%;
		left: 0
	}

	.product-carousel__item:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		padding: 0 1.4rem;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
		-webkit-transition: opacity 0.4s ease-in-out;
		-moz-transition: opacity 0.4s ease-in-out;
		-ms-transition: opacity 0.4s ease-in-out;
		-o-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out
	}

	.product-carousel__item.slick-current:after {
		content: '';
		opacity: 0
	}

	.product-carousel__arrow {
		display: block;
		width: 2.5rem;
		height: 4.7rem;
		position: absolute;
		background: url("../../images/slide-arrow-right-white.png");
		background-size: 100%;
		z-index: 9;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		cursor: pointer;
		display: none
	}

	.product-carousel__arrow--next {
		right: 2rem
	}

	.product-carousel__arrow--prev {
		left: 2rem;
		-webkit-transform: translateY(-50%) rotate(180deg);
		-moz-transform: translateY(-50%) rotate(180deg);
		-ms-transform: translateY(-50%) rotate(180deg);
		-o-transform: translateY(-50%) rotate(180deg);
		transform: translateY(-50%) rotate(180deg)
	}

	.product-carousel__paint-selector {
		max-width: none
	}

	.product-carousel__paint-selector--option {
		width: 6rem
	}

	.product-carousel__overlay {
		z-index: 10000
	}

	.product-carousel__overlay-title {
		width: 90%;
		padding: 0 3.2rem
	}

	.product-carousel__overlay-share-btn {
		margin-bottom: 1.5px
	}

	.product-carousel__overlay-share-btn:hover,.product-carousel__overlay-share-btn--active {
		background-color: #f60;
		color: #000
	}

	.product-carousel__overlay-share-btn:hover .product-carousel__overlay-share-btn-copy,.product-carousel__overlay-share-btn--active .product-carousel__overlay-share-btn-copy {
		color: #000
	}

	.product-carousel__overlay-share-btn:hover .product-carousel__overlay-share-btn-icon--white,.product-carousel__overlay-share-btn--active .product-carousel__overlay-share-btn-icon--white {
		display: none
	}

	.product-carousel__overlay-share-btn:hover .product-carousel__overlay-share-btn-icon--black,.product-carousel__overlay-share-btn--active .product-carousel__overlay-share-btn-icon--black {
		display: block
	}

	.product-carousel__overlay-close {
		font-size: 1.2rem;
		right: 44px
	}

	.product-carousel__overlay-close:after {
		width: 3rem;
		height: 3rem
	}

	.product-carousel__overlay-close .cta-icon {
		right: -7px
	}

	.product-carousel__overlay-close.cta.cta-icon__close .cta-icon:after {
		font-size: 2.6rem
	}

	.product-carousel__overlay--share {
		position: fixed;
		top: 6rem;
		max-width: 42.5rem;
		height: auto
	}

	.product-carousel__overlay--share .product-carousel__overlay-header {
		background-color: transparent
	}

	.product-carousel__overlay--share .product-carousel__overlay-body {
		padding: 0 6rem 7rem 6rem
	}

	.card-carousel__arrow {
		display: block;
		cursor: pointer;
		display: none
	}

	.card-carousel__arrow:before {
		content: "";
		background: url(../../images/slide-arrow-right-white.png);
		position: absolute;
		background-size: contain;
		top: 45%;
		width: 2.5rem;
		height: 4.7rem;
		z-index: 9
	}

	.card-carousel__arrow--next:before {
		right: 1.2rem
	}

	.card-carousel__arrow--prev:before {
		left: 2.3rem;
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg)
	}

	.card-carousel__section-name,.card-carousel__title,.card-carousel__subtitle,.card-carousel__link {
		padding-left: 10rem
	}

	.card-carousel__item {
		left: 0;
		margin-left: 1.5rem;
		margin-right: 1.5rem;
		width: 30%
	}

	.card-carousel__item:after {
		content: '';
		position: absolute;
		top: 0;
		padding: 0 1.4rem;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.7);
		-webkit-transition: opacity 0.4s ease-in-out;
		-moz-transition: opacity 0.4s ease-in-out;
		-ms-transition: opacity 0.4s ease-in-out;
		-o-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out
	}

	.card-carousel__item.slick-active:after {
		content: '';
		opacity: 0;
		z-index: -1
	}

	.card-carousel__cta-container {
		text-align: right;
		max-width: none
	}

	.card-carousel__cta {
		margin-top: 4.2rem;
		min-width: 0;
		margin-left: 1.2rem !important
	}

	.card-carousel__cta:last-child {
		float: none
	}

	.card-carousel--parts .card-carousel__item,.card-carousel--shop .card-carousel__item {
		margin-left: 2rem;
		margin-right: 2rem
	}

	.card-carousel--parts .card-carousel__item--bottom-section,.card-carousel--shop .card-carousel__item--bottom-section {
		padding: 1rem 2.85rem 3.4rem 1.5rem
	}

	.card-carousel--parts .card-carousel__arrow--next,.card-carousel--shop .card-carousel__arrow--next {
		right: 0.5rem
	}

	.card-carousel--key-features .slick-list {
		padding-right: 7.5%
	}

	.specs-row {
		padding-top: 64px
	}

	.specs-col {
		display: inline-block;
		width: 19%;
		vertical-align: top
	}

	.specs-col.specs-engine {
		width: 23%
	}

	.specs-col.specs-engine .specs-value {
		font-size: 32.5px;
		padding: 0
	}

	.specs .specs-value {
		font-weight: 700;
		font-size: 4rem;
		font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
		line-height: 1;
		text-transform: uppercase
	}

	.specs-description-wrapper {
		margin-right: 110px;
		width: 100%
	}

	.specs-description-wrapper .specs--description {
		width: auto;
		font-size: 1.4rem;
		margin: 0
	}

	.specs-description-wrapper .specs--cta {
		width: auto;
		font-size: 1.4rem
	}
}

@media only screen and (min-width: 992px) {
	.card-carousel--parts .card-carousel__arrow--next,.card-carousel--shop .card-carousel__arrow--next {
		right: 1.5rem
	}

	.specs-col.specs-engine {
		width: 19%
	}
}

@media only screen and (max-width: 480px) {
	.card-carousel__cta--center {
		text-align: center
	}
}

@media only screen and (max-width: 767px) {
	.card-carousel__cta.cta.cta-icon__left-to-top .cta-icon {
		right: 15px
	}
}

.rtl .product-carousel__paint-selector--title .cta-icon {
	left: -2.5rem;
	top: -1.2rem;
	right: auto
}

.rtl .product-carousel__paint-selector--title .cta-icon:after {
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg)
}

.rtl .product-carousel__item--zoom.cta.cta-icon__zoom .cta-icon {
	right: auto
}

.rtl .card-carousel__title,.rtl .card-carousel__subtitle,.rtl .card-carousel__link,.rtl .card-carousel__section-name {
	float: right;
	clear: both;
	padding-right: 2rem
}

.rtl .card-carousel__link:after {
	left: 0px;
	top: 3px;
	right: auto;
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg)
}

.rtl .card-carousel__wrapper {
	clear: both
}

.rtl .card-carousel__cta-container .card-carousel__cta.cta.cta-icon__left-to-top .cta-icon {
	left: 22px;
	right: auto
}

.rtl .card-carousel__item--description .link--black:before {
	content: ''
}

.rtl .card-carousel__item--description .link--black:after {
	content: ''
}

.ios.ipad .specs-col:first-child {
	width: 25%
}

.compare-bikes {
	position: relative;
	width: auto;
	height: auto;
	background: #fff;
	overflow: hidden
}

.compare-bikes__back-btn {
	position: absolute;
	top: 0;
	right: 0
}

.compare-bikes__back-btn--mobile {
	display: none;
	margin-right: 20px
}

.compare-bikes__header {
	background-color: #000;
	text-align: center;
	position: relative
}

.compare-bikes__header-inner {
	position: relative;
	height: 233px
}

.compare-bikes__header .container {
	padding: 0
}

.compare-bikes__header [sticky-with-header].sticky--not-top {
	transition-duration: 0s !important
}

.compare-bikes__result-header {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 1.5rem;
	color: white;
	display: inline-block;
	top: 33px;
	padding-top: 26px;
	text-transform: uppercase
}

.compare-bikes__header-title {
	padding: 18px 0;
	margin-bottom: 0;
	font-size: 1.8rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	color: #fff
}

.compare-bikes__body {
	background-color: #fff
}

.compare-bikes__body-bg-image {
	background: #fff url("../../images/compare-bikes/bg.jpg") repeat-y;
	background-size: 100%
}

.compare-bikes__body-bg-image .container {
	min-height: 700px
}

.compare-bikes__reset-btn,.compare-bikes__close-btn {
	float: right;
	color: white;
	font-size: 1rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	cursor: pointer;
	z-index: 1;
	display: none
}

.compare-bikes__reset-btn:hover,.compare-bikes__close-btn:hover {
	color: #f60
}

.compare-bikes__reset-btn {
	position: absolute;
	left: 21px;
	top: 18px
}

.compare-bikes__reset-btn .icon--arrow-back:before {
	font-weight: bold
}

.compare-bikes__close-btn {
	position: absolute;
	top: 12px;
	right: 21px
}

.compare-bikes__close-btn .icon--close {
	margin-left: 9px
}

.compare-bikes__close-btn .icon--close:before {
	font-weight: bold
}

.compare-bikes__filter {
	text-align: left;
	padding-left: 8px;
	display: flex;
	overflow-x: scroll
}

@media screen and (min-width: 768px) {
	.compare-bikes__filter {
		overflow: inherit
	}
}

.compare-bikes__filter-wrapper {
	width: 100%;
	max-width: 1440px;
	height: 65px;
	z-index: 99;
	background-color: #202020
}

.compare-bikes__filter-wrapper .container {
	position: relative
}

.compare-bikes__filter-wrapper--result {
	display: none;
	max-width: 1440px
}

.compare-bikes__filter::after {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	width: 10%;
	height: 100%;
	background: linear-gradient(to right, rgba(32,32,32,0.5), rgba(0,0,0,0.5));
	z-index: 3
}

.compare-bikes__filter-item {
	display: inline-block;
	position: relative;
	padding: 0 12px;
	font-family: "Trade-Gothic",sans;
	text-transform: uppercase
}

.compare-bikes__filter-item:focus {
	outline: none;
	outline: #205f9f solid thin
}

.compare-bikes__filter-item:first-child::before {
	content: '';
	width: 1px;
	height: 14px;
	background: #fff;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(0, -50%)
}

.compare-bikes__filter-item-title {
	display: inline-block;
	padding: 26px 0;
	color: #fff;
	font-family: "NotoSans-Bold",sans;
	letter-spacing: 1px;
	white-space: nowrap
}

@media screen and (min-width: 320px) {
	.compare-bikes__filter-item-title {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__filter-item-title {
		font-size: 1.2rem;
		line-height: 1
	}
}

.compare-bikes__filter-item-title:focus {
	position: relative;
	color: #fff;
	text-decoration: none;
	outline-width: 1px
}

.compare-bikes__filter-item-title:hover {
	text-decoration: none;
	position: relative;
	color: #fff
}

.compare-bikes__filter-item--actived .compare-bikes__filter-item-title {
	position: relative;
	color: #f60
}

.compare-bikes__filter-item--actived .compare-bikes__filter-item-title::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: #f60
}

.compare-bikes__intro {
	padding-top: 65px;
	color: white
}

.compare-bikes__intro-text {
	letter-spacing: 2px
}

@media screen and (min-width: 320px) {
	.compare-bikes__intro-text {
		font-size: 3rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__intro-text {
		font-size: 3rem;
		line-height: 1.2
	}
}

.compare-bikes__intro-description {
	margin-top: 11px;
	margin-bottom: 0;
	letter-spacing: 1px
}

@media screen and (min-width: 320px) {
	.compare-bikes__intro-description {
		font-size: 1.4rem;
		line-height: 1.5
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__intro-description {
		font-size: 1.6rem;
		line-height: 1.6
	}
}

.compare-bikes__family-bike {
	display: none;
	background-color: #fff
}

.compare-bikes__family-bike-title {
	padding: 30px 30px 35.5px;
	color: #000;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.compare-bikes__family-bike-title {
		font-size: 2.4rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__family-bike-title {
		font-size: 2.4rem;
		line-height: 1
	}
}

.compare-bikes__family-bike--active {
	display: block
}

.compare-bikes__family-bike .compare-bikes__img,.compare-bikes__family-bike .compare-bikes__item-title {
	cursor: pointer
}

.compare-bikes__family-bike--results .compare-bikes__img,.compare-bikes__family-bike--results .compare-bikes__item-title {
	cursor: default
}

.compare-bikes__checkbox {
	border: none;
	float: right;
	margin-bottom: 30px;
	margin-right: 11px;
	width: 25px;
	height: 25px;
	background: #000
}

.compare-bikes__checkbox:focus {
	outline: #205f9f solid thin
}

.compare-bikes__checkbox--checked {
	position: relative;
	background: #000
}

.compare-bikes__checkbox--checked:before {
	content: "\e918";
	position: absolute;
	top: 2px;
	left: 7px;
	color: #000;
	font-family: 'icomoon';
	font-size: 1.6rem;
	font-weight: bold
}

.compare-bikes__thumbnail {
	box-sizing: border-box;
	width: 100%
}

.compare-bikes__img {
	position: relative;
	z-index: 0;
	height: 0;
	padding-bottom: 62.79%;
	overflow: hidden;
	background-color: #fff
}

.compare-bikes__img:after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	height: 100%;
	width: 100%
}

.compare-bikes__item {
	padding-bottom: 2.5rem
}

.compare-bikes__item-title {
	display: table-cell;
	padding: 15px 0;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-weight: bold;
	text-transform: uppercase;
	color: #000;
	vertical-align: middle;
	width: 100%;
	display: block
}

@media screen and (min-width: 320px) {
	.compare-bikes__item-title {
		font-size: 1.5rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__item-title {
		font-size: 1.5rem;
		line-height: 1
	}
}

@media screen and (min-width: 320px) {
	.compare-bikes__item-title--smaller {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__item-title--smaller {
		font-size: 1.2rem;
		line-height: 1
	}
}

.compare-bikes__item-title-wrapper {
	display: table;
	box-sizing: border-box;
	position: relative;
	min-height: 47px;
	padding: 0 35px 0 0;
	width: 100%
}

@media only screen and (min-width: 768px) {
	.compare-bikes__item-title-wrapper {
		min-height: 60px
	}
}

.compare-bikes__item .compare-bikes__item-remove-btn,.compare-bikes__item .compare-bikes__item-checked-btn {
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	position: absolute;
	box-sizing: border-box;
	top: 50%;
	right: 0px;
	width: 26px;
	height: 26px;
	border: 1px solid #000;
	cursor: pointer
}

.compare-bikes__item .compare-bikes__item-remove-btn:focus,.compare-bikes__item .compare-bikes__item-checked-btn:focus {
	outline: none
}

.compare-bikes__item--selected .compare-bikes__item-checked-btn {
	background: url("../../images/compare-bikes/checked.png") center no-repeat;
	background-size: 60%
}

.compare-bikes__item--selected .compare-bikes__item-checked-btn:focus {
	outline: none
}

.compare-bikes__item--selected .compare-bikes__item-remove-btn:before {
	content: "\e918";
	padding-left: 6px;
	color: #f60;
	font-family: 'icomoon';
	font-size: 1.6rem;
	font-weight: bold;
	transition: 0.2s;
	line-height: 1.4
}

@media only screen and (min-width: 768px) {
	.compare-bikes__item--selected:hover .compare-bikes__item-remove-btn:before,.compare-bikes__item--selected:focus .compare-bikes__item-remove-btn:before {
		color: #f60
	}
}

.compare-bikes__selected-wrapper {
	background: #202020;
	position: fixed;
	width: 100%;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	padding: 0;
	z-index: 99
}

.compare-bikes__selected-wrapper .compare-bikes__item {
	display: inline-block;
	padding: 0;
	width: 50%;
	float: left;
	background-color: #000
}

.compare-bikes__selected-wrapper .compare-bikes__item--add-more-bike {
	display: block;
	padding-top: 15%;
	text-align: center;
	background: #202020
}

.compare-bikes__selected-wrapper .compare-bikes__item--add-more-bike .compare-bikes__item-title {
	cursor: default;
	text-align: center
}

.compare-bikes__selected-wrapper .compare-bikes__item--add-more-bike .compare-bikes__item-title:hover {
	color: #fff
}

.compare-bikes__selected-wrapper .compare-bikes__item:nth-child(1) {
	padding-right: 1.25px
}

.compare-bikes__selected-wrapper .compare-bikes__item:nth-child(2) {
	padding-left: 1.25px
}

.compare-bikes__selected-wrapper .compare-bikes__item-title {
	color: #fff;
	text-align: left
}

.compare-bikes__selected-wrapper .compare-bikes__compare-btn {
	min-height: 45px;
	display: none;
	font-family: "NotoSans-Bold",sans;
	white-space: nowrap
}

.compare-bikes__selected-wrapper .compare-bikes__compare-btn .icon--compare-motorcycles {
	top: 1px
}

.compare-bikes__selected-wrapper .compare-bikes__compare-btn .icon--compare-motorcycles:before {
	font-size: 3rem
}

.compare-bikes__selected-wrapper .compare-bikes__compare-btn.cta-icon__H-D-Compare-Motorcycles .cta-icon {
	width: 100%;
	transition: unset;
	background-color: transparent
}

.compare-bikes__selected-wrapper .compare-bikes__compare-btn.cta-icon__H-D-Compare-Motorcycles .cta-icon:after {
	right: 27%
}

@media only screen and (min-width: 768px) {
	.compare-bikes__selected-wrapper .compare-bikes__compare-btn.cta-icon__H-D-Compare-Motorcycles .cta-icon:after {
		right: 45%
	}
}

.compare-bikes__selected-wrapper .compare-bikes__item-title-wrapper {
	padding: 0 35px 0 15px;
	min-height: 40px;
	background: #202020;
	overflow: hidden
}

.compare-bikes__selected-wrapper .compare-bikes__item-title-wrapper .compare-bikes__item-remove-btn {
	border: 1px solid #202020
}

.compare-bikes__selected-wrapper .compare-bikes__item-title-wrapper:before {
	right: 10px;
	color: #fff
}

.compare-bikes__selected-wrapper .compare-bikes__checkbox {
	position: relative;
	margin: 12.5px 15px 12.5px 0
}

.compare-bikes__selected-wrapper .compare-bikes__checkbox:before {
	content: '';
	box-sizing: border-box;
	position: absolute;
	width: 10px;
	border: 1px solid #fff;
	top: 11.5px;
	left: 7px
}

.compare-bikes__selected-wrapper .compare-bikes__checkbox:after {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
	content: '';
	box-sizing: border-box;
	position: absolute;
	box-sizing: border-box;
	width: 10px;
	border: 1px solid #fff;
	top: 11.5px;
	left: 7px
}

.compare-bikes__selected-wrapper .compare-bikes__item-remove-btn::before {
	color: #fff
}

.compare-bikes__compare-btn {
	display: block;
	border: none;
	width: 100%;
	background-color: #f60;
	transition: none
}

.compare-bikes__selected-bikes {
	display: none;
	position: relative;
	text-align: left;
	padding: 18px 15px
}

.compare-bikes__selected-bikes .icon--close {
	position: absolute;
	top: 17px;
	right: 18px
}

.compare-bikes__selected-bikes .icon--close::before {
	font-size: 1.5rem;
	font-weight: bold
}

.compare-bikes--results {
	font-size: 1.8rem;
	overflow: auto
}

.compare-bikes--results p {
	padding-left: 30px;
	padding-right: 30px;
	color: #333
}

.compare-bikes--results .compare-bikes__body {
	background-image: none
}

.compare-bikes--results .compare-bikes__body .container {
	padding-top: 0;
	padding-right: 0
}

.compare-bikes--results .compare-bikes__close-btn,.compare-bikes--results .compare-bikes__reset-btn {
	display: block
}

.compare-bikes--results .compare-bikes__close-btn:focus,.compare-bikes--results .compare-bikes__reset-btn:focus {
	outline: none
}

.compare-bikes--results .compare-bikes__filter,.compare-bikes--results .compare-bikes__selected-wrapper,.compare-bikes--results .compare-bikes__family-bike,.compare-bikes--results .compare-bikes__intro {
	display: none
}

.compare-bikes--results .compare-bikes__filter-wrapper {
	background-color: #000;
	top: 0px;
	z-index: 1000
}

.compare-bikes--results .compare-bikes__filter-wrapper--result {
	display: block;
	position: fixed
}

.compare-bikes--results .compare-bikes__family-bike--results {
	display: table;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 60px
}

.compare-bikes--results .compare-bikes__header-inner {
	height: auto
}

.compare-bikes--results .compare-bikes__list {
	margin-left: -15px;
	margin-right: -15px;
	background: #000
}

.compare-bikes--results .compare-bikes__item {
	padding: 0 15px;
	display: table-cell;
	vertical-align: top
}

.compare-bikes--results .compare-bikes__item-title-wrapper {
	position: relative;
	background-color: #202020
}

.compare-bikes--results .compare-bikes__item--selected .compare-bikes__item-remove-btn {
	border: 1px solid #202020;
	right: 10px
}

.compare-bikes--results .compare-bikes__item--selected .compare-bikes__item-remove-btn:before {
	color: #fff
}

@media only screen and (min-width: 768px) {
	.compare-bikes--results .compare-bikes__item--selected:hover .compare-bikes__item-remove-btn:before,.compare-bikes--results .compare-bikes__item--selected:focus .compare-bikes__item-remove-btn:before {
		color: #f60
	}
}

.compare-bikes--results .compare-bikes__item-title {
	color: #fff;
	padding-left: 20px
}

@media screen and (min-width: 320px) {
	.compare-bikes--results .compare-bikes__item-title {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes--results .compare-bikes__item-title {
		font-size: 2.2rem;
		line-height: 1
	}
}

.compare-bikes--results .compare-bikes__thumbnail {
	margin-bottom: 0
}

.compare-bikes__text {
	padding-bottom: 60px
}

.compare-bikes__text p {
	font-size: 1.8rem;
	line-height: 3.5rem
}

.compare-bikes__results-wrapper {
	color: #000;
	display: none
}

.compare-bikes__results-wrapper-two-columns .compare-bikes__table-item,.compare-bikes__results-wrapper-two-columns .compare-bikes__item {
	width: 50%
}

.compare-bikes__results-wrapper-three-columns .compare-bikes__table-item,.compare-bikes__results-wrapper-three-columns .compare-bikes__item {
	width: 33.33%
}

.compare-bikes__table {
	margin-bottom: 60px;
	color: #000;
	width: 100%;
	text-align: left
}

.compare-bikes__table-sup-label {
	color: #000
}

.compare-bikes__table-list {
	display: table;
	width: 100%
}

.compare-bikes__table-wrapper {
	background: #fff
}

.compare-bikes__table-title {
	display: block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	line-height: 1
}

@media screen and (min-width: 320px) {
	.compare-bikes__table-title {
		font-size: 2.1rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__table-title {
		font-size: 3rem;
		line-height: 1
	}
}

.compare-bikes__table-title sup {
	top: -0.8em
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.compare-bikes__table-title sup {
		top: -1.3em
	}
}

.compare-bikes__table-row {
	margin-top: 20px
}

.compare-bikes__table-item {
	display: table-cell;
	padding: 13px 6%;
	color: #333;
	max-width: 1px
}

@media screen and (min-width: 320px) {
	.compare-bikes__table-item {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__table-item {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.compare-bikes__table-grey {
	background: #ccc;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	padding: 8px 4%
}

@media screen and (min-width: 320px) {
	.compare-bikes__table-grey {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.compare-bikes__table-grey {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.compare-bikes__table sup {
	font-size: 0.96rem
}

.firefox.windows .compare-bikes__item-title {
	font-weight: normal
}

@media only screen and (min-width: 768px) {
	.compare-bikes {
		width: 100%;
		height: 100%;
		color: #fff
	}

	.compare-bikes__back-btn {
		top: 50%;
		transform: translateY(-50%)
	}

	.compare-bikes__filter {
		padding-left: 0
	}

	.compare-bikes__filter::after {
		display: none
	}

	.compare-bikes__filter-item:first-child {
		padding-left: 0
	}

	.compare-bikes__filter-item-title {
		color: #fff
	}

	.compare-bikes__filter-item-title:hover {
		color: #f60
	}

	.compare-bikes__header-inner {
		height: auto
	}

	.compare-bikes__body {
		position: relative;
		min-height: 800px;
		margin-top: 40px
	}

	.compare-bikes__body .container {
		padding-top: 20px;
		padding-right: 10%;
		padding-left: 0px
	}

	.compare-bikes__intro {
		box-sizing: border-box;
		padding: 47.5px 0 45.5px 0;
		height: 140px;
		text-align: left
	}

	.compare-bikes__intro-text {
		margin-bottom: 4px
	}

	.compare-bikes__intro-description {
		margin-top: 0
	}

	.compare-bikes__family-bike-title {
		padding-left: 0
	}

	.compare-bikes__thumbnail {
		margin-bottom: 0
	}

	.compare-bikes__item {
		padding-bottom: 30px
	}

	.compare-bikes__item:hover .compare-bikes__item-title {
		color: #f60
	}

	.compare-bikes__item:hover .compare-bikes__checkbox {
		background-color: #f60
	}

	.compare-bikes__item:hover .compare-bikes__checkbox--checked {
		background-color: #f60
	}

	.compare-bikes__item:hover .compare-bikes__checkbox--checked::before {
		color: #fff
	}

	.compare-bikes__item-title {
		color: #000;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		width: 85%
	}

	.compare-bikes__item-inner {
		position: relative
	}

	.compare-bikes__checkbox {
		position: absolute;
		margin-bottom: 0;
		right: 0;
		width: 20px;
		height: 20px;
		background-color: #fff
	}

	.compare-bikes__checkbox--checked {
		background-color: #000
	}

	.compare-bikes__checkbox--checked::before {
		top: -1px;
		left: 4px
	}

	.compare-bikes__selected-wrapper {
		position: absolute;
		top: 110px;
		max-width: 215px;
		right: 0
	}

	.compare-bikes__selected-wrapper--smaller {
		max-width: 200px
	}

	.compare-bikes__selected-wrapper .compare-bikes__item {
		width: auto;
		float: none
	}

	.compare-bikes__selected-wrapper .compare-bikes__item:nth-child(1),.compare-bikes__selected-wrapper .compare-bikes__item:nth-child(2) {
		padding: 0
	}

	.compare-bikes__selected-wrapper .compare-bikes__item-add-more {
		width: 100%;
		min-height: 10rem;
		position: relative;
		padding-left: 2rem
	}

	.compare-bikes__selected-wrapper .compare-bikes__img {
		padding-bottom: 60%
	}

	.compare-bikes__compare-btn {
		box-sizing: border-box;
		border: none;
		padding: 6px 85px;
		float: right;
		background-color: #f60;
		width: 100%;
		color: #000
	}

	.compare-bikes__compare-btn .cta-link-third .cta-icon {
		transition: unset
	}

	.compare-bikes__compare-btn:hover,.compare-bikes__compare-btn:focus {
		background: #000;
		color: #f60
	}

	.compare-bikes__compare-btn:hover .cta-link-third,.compare-bikes__compare-btn:focus .cta-link-third {
		color: #f60
	}

	.compare-bikes__selected-bikes {
		display: inline-block;
		padding: 0;
		margin: 0 15px 0 0;
		cursor: pointer;
		transition: 0.2s
	}

	.compare-bikes__selected-bikes:hover {
		color: #f60
	}

	.compare-bikes__selected-bikes:hover .icon--close {
		background: #f60
	}

	.compare-bikes__selected-bikes:hover .icon--close::before {
		color: #fff
	}

	.compare-bikes__selected-bikes .icon--close {
		position: initial;
		right: auto;
		top: 0;
		padding: 4px 5px;
		border: 1px solid #000;
		transition: 0.2s;
		box-sizing: border-box
	}

	.compare-bikes__selected-bikes .icon--close::before {
		color: #f60;
		transition: 0.2s;
		font-weight: bold
	}
}

@media only screen and (min-width: 768px) and (min-width: 320px) {
	.compare-bikes__selected-bikes .icon--close::before {
		font-size: 1.5rem;
		line-height: 1
	}
}

@media only screen and (min-width: 768px) and (min-width: 768px) {
	.compare-bikes__selected-bikes .icon--close::before {
		font-size: 1.5rem;
		line-height: 1
	}
}

@media only screen and (min-width: 768px) {
	.compare-bikes--results {
		padding-top: 26px;
		z-index: 1000
	}

	.compare-bikes--results .compare-bikes__list {
		background: #fff;
		margin-top: 5rem
	}

	.compare-bikes--results .compare-bikes__filter-wrapper {
		top: 0
	}

	.compare-bikes--results .compare-bikes__item-title-wrapper {
		min-height: 80px;
		display: block
	}

	.compare-bikes__table-title sup {
		top: -1.5em
	}
}

@media only screen and (min-width: 768px) and (-ms-high-contrast: active), only screen and (min-width: 768px) and (-ms-high-contrast: none) {
	.compare-bikes__table-title sup {
		top: -2em
	}
}

@media only screen and (min-width: 768px) {
	.firefox .compare-bikes__item-title-wrapper::before {
		content: "";
		width: 1px;
		visibility: hidden;
		height: 60px;
		display: block
	}

	.firefox .compare-bikes__selected-wrapper .compare-bikes__item-title-wrapper::before {
		height: 40px
	}
}

.mobile .compare-bikes__filter::after {
	pointer-events: none
}

@media only screen and (min-width: 768px) and (max-width: 1439px) {
	.compare-bikes__header .container {
		width: 90%
	}

	.compare-bikes__body {
		width: 100%
	}

	.compare-bikes__body .container {
		width: 90%
	}

	.compare-bikes__family-bike {
		margin-right: 10rem
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.compare-bikes__header .container {
		width: 95%
	}

	.compare-bikes__body .container {
		width: 95%
	}

	.compare-bikes__family-bike {
		margin-right: 14rem
	}

	.compare-bikes__filter-item-title {
		font-size: 0.9rem
	}
}

@media (max-width: 767px) {
	.compare-bikes {
		padding-top: 0
	}

	.compare-bikes__body-bg-image {
		background-size: 94%;
		background-position: center top
	}

	.compare-bikes__filter-wrapper {
		position: absolute;
		top: 168px
	}

	.compare-bikes__selected-wrapper {
		bottom: 0 !important;
		top: auto !important;
		max-width: 100%
	}

	.compare-bikes__selected-wrapper .compare-bikes__thumbnail {
		width: 100%
	}

	.compare-bikes__family-bike {
		padding-bottom: 35px
	}

	.compare-bikes__family-bike:last-child {
		border: 0
	}

	.compare-bikes__family-bike-title {
		text-align: center;
		width: 100%
	}

	.compare-bikes__item-hide-more {
		display: none
	}

	.compare-bikes--results .container {
		padding-left: 0;
		padding-right: 0
	}

	.compare-bikes--results p {
		color: #333
	}
}

@media screen and (max-width: 767px) and (min-width: 320px) {
	.compare-bikes--results p {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (max-width: 767px) and (min-width: 768px) {
	.compare-bikes--results p {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media (max-width: 767px) {
	.compare-bikes--results .compare-bikes {
		color: #fff
	}

	.compare-bikes--results .compare-bikes__body {
		margin-top: 65px
	}

	.compare-bikes--results .compare-bikes__family-bike {
		padding: 0;
		border: 0;
		margin-bottom: 15px
	}

	.compare-bikes--results .compare-bikes__item {
		padding: 0 2px
	}

	.compare-bikes--results .compare-bikes__item-title {
		color: #fff
	}

	.compare-bikes--results .compare-bikes__results-wrapper {
		margin-top: 0;
		overflow-x: hidden
	}

	.compare-bikes--results .compare-bikes__table-wrapper {
		margin-top: 0
	}

	.compare-bikes__text {
		padding: 25px 13%
	}

	.compare-bikes__text p {
		font-size: 1.6rem
	}

	.compare-bikes__table {
		position: relative;
		margin-bottom: 0
	}

	.compare-bikes__table-content {
		display: none
	}

	.compare-bikes__table-title {
		position: relative;
		padding: 10px 15px 15px 20px
	}

	.compare-bikes__table:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 2px;
		width: 100%;
		border: 1px solid #000;
		box-sizing: border-box
	}

	.compare-bikes__table .icon--close {
		-webkit-transform: translateY(-50%) rotate(45deg);
		-moz-transform: translateY(-50%) rotate(45deg);
		-ms-transform: translateY(-50%) rotate(45deg);
		-o-transform: translateY(-50%) rotate(45deg);
		transform: translateY(-50%) rotate(45deg);
		font-size: 0.8rem;
		font-weight: bold;
		position: absolute;
		right: 25px;
		float: right;
		cursor: pointer
	}

	.compare-bikes__table .icon--close:before {
		content: "\e918";
		font-size: 159%;
		position: absolute;
		top: 4px;
		left: 6px
	}

	.compare-bikes__table .icon--close:after {
		content: '';
		position: absolute;
		height: 22px;
		width: 22px;
		top: -1px;
		left: 0px;
		border: 2px solid #000;
		transform: rotate(135deg);
		box-sizing: border-box
	}

	.compare-bikes__table .compare-bikes__open {
		transform: translateY(-50%) rotate(0deg);
		top: 31%;
		right: 29px
	}

	.compare-bikes__table .compare-bikes__open:before {
		top: 5px;
		left: 0px
	}

	.compare-bikes__table .compare-bikes__open:before {
		display: inline-block;
		width: 10px;
		content: '';
		border: 1px solid #000000;
		box-sizing: border-box
	}

	.compare-bikes__table .compare-bikes__open:after {
		transform: rotate(0deg);
		top: -5px;
		left: -6px
	}
}

@media (min-width: 768px) {
	.compare-bikes-stick {
		position: fixed;
		z-index: 999;
		background-color: #000;
		margin: 0 auto
	}

	.compare-bikes-stick--pull-down {
		margin-top: 0 !important;
		top: 6.5rem
	}

	.compare-bikes__results-wrapper-two-columns {
		width: 70%;
		margin: 0 auto
	}
}

@media (max-width: 767px) {
	.compare-bikes-stick {
		position: fixed;
		z-index: 999;
		background-color: #000;
		margin: 0 auto
	}

	.compare-bikes-stick--pull-down {
		top: inherit
	}

	.compare-bikes__filter-item-title {
		font-size: 0.9rem;
		padding: 28px 0
	}
}

.rtl .compare-bikes--results .compare-bikes__close-btn,.rtl .compare-bikes--results .compare-bikes__reset-btn {
	direction: ltr
}

.rtl .compare-bikes__table-title,.rtl .compare-bikes__table-grey,.rtl .compare-bikes__table-item {
	text-align: right
}

.mobile .compare-bikes__list {
	width: 100% !important;
	margin-left: 0
}

.all-bikes-filter__intro {
	color: #fff;
	text-align: center;
	padding-top: 3rem;
	padding-bottom: 2rem
}

@media screen and (max-width: 768px) {
	.all-bikes-filter__intro {
		padding-top: 2rem;
		padding-bottom: 1rem
	}
}

.all-bikes-filter__intro-text {
	text-transform: uppercase;
	letter-spacing: 2px
}

@media screen and (max-width: 768px) {
	.all-bikes-filter__intro-text {
		max-width: 365px
	}
}

.all-bikes-filter__intro-description {
	padding-bottom: 2rem;
	margin-top: -1rem;
	margin: 0 auto;
	width: 60%
}

@media screen and (max-width: 768px) {
	.all-bikes-filter__intro-description {
		max-width: 365px;
		width: 90%
	}
}

.all-bikes-filter__body {
	position: relative;
	min-height: 800px;
	margin-top: 40px;
	background-color: #dfdfdf
}

.all-bikes-filter__body .container {
	max-width: 1440px;
	width: 100%;
	margin: auto;
	padding-bottom: 5rem
}

.all-bikes-filter__body .container .row {
	display: flex;
	flex-wrap: wrap
}

.all-bikes-filter__body .container .row::after,.all-bikes-filter__body .container .row::before {
	content: none
}

@media screen and (max-width: 768px) {
	.all-bikes-filter__body .container .row {
		flex-direction: column
	}
}

.all-bikes-filter__body .container .all-bikes-filter__title-wrapper {
	text-align: center;
	margin-top: 2.5rem;
	margin-bottom: .5rem
}

@media (min-width: 768px) {
	.all-bikes-filter__body .container .all-bikes-filter__title-wrapper {
		margin-top: 1.5rem;
		margin-bottom: 0rem
	}
}

.all-bikes-filter__body .container .all-bikes-filter__family-title {
	margin: 20px auto 30px;
	color: #000;
	text-transform: uppercase;
	border-top: 2px solid #000;
	border-bottom: 2px solid #000;
	padding-top: 8px
}

@media screen and (max-width: 768px) {
	.all-bikes-filter__body .container .all-bikes-filter__family-title {
		padding-top: 8px;
		padding-bottom: 2px;
		font-size: 2rem
	}
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle {
	padding: 15px
}

@media (max-width: 768px) {
	.all-bikes-filter__body .container .all-bikes-filter__motorcycle {
		margin: 0;
		padding: 10px
	}
}

@media (min-width: 768px) {
	.all-bikes-filter__body .container .all-bikes-filter__motorcycle {
		min-height: auto;
		margin: 0px
	}
}

@media (min-width: 1440px) {
	.all-bikes-filter__body .container .all-bikes-filter__motorcycle {
		min-height: auto;
		min-width: 320px
	}
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle>a {
	text-decoration: none;
	overflow: hidden
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-background {
	height: 100%;
	width: 100%;
	background: #fff
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-panel {
	background: #fff;
	padding: 22px 15px 22px 15px;
	color: #000
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-image {
	width: 100%
}

@media (min-width: 768px) {
	.all-bikes-filter__body .container .all-bikes-filter__motorcycle-image {
		min-height: auto;
		background-color: #fff
	}
}

@media (min-width: 1440px) {
	.all-bikes-filter__body .container .all-bikes-filter__motorcycle-image {
		min-height: auto;
		min-width: 320px
	}
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-name {
	color: #000;
	font-size: 2rem;
	line-height: 1;
	display: block;
	text-transform: uppercase;
	margin-bottom: 12px
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-price {
	color: #000;
	margin-bottom: auto;
	line-height: 1;
	margin-bottom: 15px;
	font-size: 1.3rem
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-price span {
	font-size: 120%
}

.all-bikes-filter__body .container .all-bikes-filter__motorcycle-link {
	margin-right: 10px;
	font-size: 12px;
	text-transform: uppercase
}

.contextual {
	bottom: 0;
	left: 0;
	position: fixed;
	opacity: 0;
	width: 100%;
	background: #f60;
	padding: 0.8rem 0;
	text-align: center
}

@media (min-width: 321px) {
	.contextual {
		padding: 1.15rem 0
	}
}

.contextual__wrapper {
	position: relative
}

.contextual ul {
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center
}

.contextual ul li {
	list-style-type: none;
	text-align: center;
	flex: 1
}

.contextual__images {
	display: inline-block;
	vertical-align: middle;
	max-width: 3.2rem;
	height: 2rem;
	margin-right: 15px
}

.contextual--link {
	display: inline-block;
	text-transform: uppercase;
	vertical-align: middle
}

@media screen and (min-width: 320px) {
	.contextual--link {
		font-size: 10px;
		line-height: 15px
	}
}

@media screen and (min-width: 768px) {
	.contextual--link {
		font-size: 10px;
		line-height: 15px
	}
}

.contextual--scroll {
	width: 100%;
	z-index: 110;
	opacity: 1
}

.contextual--multi-links .contextual__images {
	margin-right: 0;
	margin-bottom: 0.4rem
}

@media (min-width: 321px) {
	.contextual--multi-links .contextual__images {
		margin-bottom: 0.7rem
	}
}

.contextual--multi-links .contextual--link .icon--play {
	display: inline
}

.contextual--multi-links .contextual--link span {
	display: block
}

@media screen and (min-width: 320px) {
	.contextual--multi-links .contextual--link span {
		font-size: 10px;
		line-height: 15px
	}
}

@media screen and (min-width: 768px) {
	.contextual--multi-links .contextual--link span {
		font-size: 10px;
		line-height: 15px
	}
}

@media (min-width: 992px) {
	.contextual--multi-links .contextual--link span {
		font-size: 1.1rem;
		line-height: 1.6rem
	}
}

.contextual--multi-links.shopping-tools-links {
	padding: 0;
	background: transparent
}

.contextual--multi-links.shopping-tools-links .container-fluid {
	padding: 0
}

.contextual--multi-links.shopping-tools-links .shopping-tools-links-list {
	display: table;
	table-layout: fixed;
	width: calc(100% + .4rem);
	border-spacing: .2rem 0;
	margin: 0 -0.2rem
}

.contextual--multi-links.shopping-tools-links .shopping-tools-item-link {
	display: table-cell;
	background: #f60
}

.contextual--multi-links.shopping-tools-links .contextual--link {
	position: relative;
	padding: 1.2rem;
	width: 100%
}

.contextual--multi-links.shopping-tools-links .contextual__icon,.contextual--multi-links.shopping-tools-links .contextual__title {
	display: inline-block;
	position: relative;
	padding: 0;
	vertical-align: middle;
	margin-bottom: 0
}

.contextual--multi-links.shopping-tools-links .contextual__title {
	text-align: left;
	font-size: 1.2rem;
	line-height: 1
}

.contextual--multi-links.shopping-tools-links .contextual__title .contextual__text {
	display: inline-block
}

.contextual--multi-links.shopping-tools-links .contextual__title.has-icon {
	padding-left: 3.2rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	height: auto;
	max-width: 3.2rem;
	max-height: 3.2rem;
	transform: translateY(-50%);
	padding-right: 1.2rem;
	font-size: 1rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Compare-Motorcycles.has-icon {
	padding-left: 5.4rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Compare-Motorcycles .contextual__icon {
	max-width: 5.4rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-2018-Motorcycles.has-icon {
	padding-left: 4.2rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-2018-Motorcycles .contextual__icon {
	max-width: 4.2rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Build-Your_own.has-icon {
	padding-left: 3.4rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Build-Your_own .contextual__icon {
	max-width: 3.4rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Estimate-Payment.has-icon {
	padding-left: 3rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Estimate-Payment .contextual__icon {
	max-width: 3rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Test-Ride.has-icon {
	padding-left: 3.6rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Test-Ride .contextual__icon {
	max-width: 3.6rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Apply-for-Credit.has-icon {
	padding-left: 3.3rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Apply-for-Credit .contextual__icon {
	max-width: 3.3rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Find-A-Dealer.has-icon {
	padding-left: 2.9rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Find-A-Dealer .contextual__icon {
	max-width: 2.9rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Get-A-Catalog.has-icon {
	padding-left: 3.2rem
}

.contextual--multi-links.shopping-tools-links .contextual__icon--H-D-Get-A-Catalog .contextual__icon {
	max-width: 3.2rem
}

.contextual--fade-up {
	-webkit-animation-duration: 1s;
	-moz-animation-duration: 1s;
	-ms-animation-duration: 1s;
	-o-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-name: fadeInUp;
	-moz-animation-name: fadeInUp;
	-ms-animation-name: fadeInUp;
	-o-animation-name: fadeInUp;
	animation-name: fadeInUp
}

.rtl .contextual--multi-links .contextual--link .icon--play {
	display: inline-block;
	transform: rotate(-180deg);
	top: -1px
}

.rtl .contextual--link {
	position: relative
}

.rtl .contextual--link .icon--play {
	display: inline-block;
	transform: rotate(-180deg);
	top: -1px
}

@media screen and (min-width: 768px) {
	.rtl .contextual--link .contextual__images {
		position: absolute;
		left: -4em
	}
}

@media print {
	body {
		-webkit-print-color-adjust: exact;
		printer-colors: exact;
		color-adjust: exact;
		iframe-display: none !important
	}@	page {
		size: A4 portrait
	}

	a[href]:after {
		content: none !important
	}

	.global-navigation__nav-bar {
		display: none
	}

	.col {
		position: relative
	}

	.print-12 {
		width: 100% !important
	}

	.estimate-payment {
		margin-top: 0;
		float: none
	}

	.estimate-payment>.row {
		position: relative
	}

	.estimate-payment__title h1 {
		font-size: 4rem !important
	}

	.estimate-payment__logo {
		display: inline-block !important;
		margin: 3rem auto 0 !important
	}

	.estimate-payment_hero-image {
		width: 70%
	}

	.estimate-payment__header .col {
		width: 100%;
		margin-bottom: 30px
	}

	.estimate-payment__header-details-background {
		display: block !important;
		background-color: #fff !important
	}

	.estimate-payment__header-details-wrapper p,.estimate-payment__header-details-wrapper li {
		color: #000 !important
	}

	.estimate-payment__total {
		width: 100%
	}

	.estimate-payment__total-wrapper {
		width: 100%
	}

	.estimate-payment__total-value {
		font-size: 4.5rem !important;
		margin: 0 0 0 1rem !important
	}

	.estimate-payment__total-title {
		display: inline
	}

	.estimate-payment__total-title>br {
		display: none
	}

	.estimate-payment__total-smallcopy {
		line-height: 4rem !important
	}

	.estimate-payment__list {
		width: 100%
	}

	.estimate-payment__options {
		padding: 0 2rem !important
	}

	.estimate-payment-ui {
		padding: 0 2rem !important
	}

	.estimate-payment__loandetails {
		display: none
	}

	.estimate-payment__ctas {
		display: none
	}

	.estimate-payment__summary {
		display: inline-block;
		padding-left: 1.5rem !important
	}

	.estimate-payment .estmate-sticky.estimate-payment__header-details {
		position: relative !important
	}

	.estimate-payment .estmate-sticky.estmate-sticky--pull-down {
		padding-top: 0
	}

	.estimate-payment__legal--collapsed {
		max-height: none !important;
		margin: 0 !important
	}

	.estimate-payment__toggle-legal {
		display: none !important
	}

	.estimate-payment__termscond {
		margin-bottom: 0 !important
	}

	.estimate-payment__termscond>.col {
		width: 100% !important
	}

	.global-footer {
		background-color: #000 !important
	}

	.global-footer h5,.global-footer option {
		color: #fff !important
	}

	.global-footer h5 span {
		color: #f60 !important
	}

	.global-footer__link a {
		color: #CCCCCC !important
	}

	.global-footer__disclaimers {
		color: #CCCCCC !important
	}

	.global-footer__disclaimers p {
		color: #CCCCCC !important
	}

	.global-footer__copyright {
		color: #CCCCCC !important
	}

	.global-footer__dropdown {
		background-color: #202020;
		background-image: url(../../images/dropdown-arrow.png) !important;
		background-repeat: no-repeat !important;
		background-position: right center !important;
		color: #fff !important
	}
}

.estimate-payment .estimate-payment__header-mobile {
	background-color: #000;
	backface-visibility: hidden
}

.estimate-payment__header {
	background-color: #fff;
	position: relative;
	overflow: hidden;
	z-index: 1
}

.estimate-payment__header .estimate-payment__selector {
	z-index: 800;
	position: relative;
	margin: 3rem 0rem 0 1.5rem
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection {
	position: absolute;
	transform: translateX(0%);
	left: 0%
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection-title {
	font-size: 1.4rem;
	line-height: 3rem;
	font-weight: bold;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection-title::after {
	content: "";
	display: block;
	width: 300px;
	height: 100%;
	position: absolute;
	top: 0;
	left: 100%;
	z-index: 201
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection span {
	position: absolute;
	background-image: url("../../images/estimate-payment/icon-header-arrow.png");
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 40%;
	padding-right: 3rem;
	display: inline-block;
	font-weight: bold;
	background-size: 1.6rem;
	font-size: 2rem;
	letter-spacing: 0.1rem
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection #estimatorSelectModel {
	top: 5px;
	padding: 0 8rem 0 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	outline: none;
	font-weight: bold;
	width: 100%;
	height: 20px;
	position: relative;
	z-index: 200;
	opacity: 0;
	cursor: pointer
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__selection #estimatorSelectModel::-ms-expand {
	display: none
}

.estimate-payment__header .estimate-payment__selector select {
	border: none;
	background-color: transparent
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__title h1 {
	font-size: 8rem;
	display: block;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	line-height: 7.3rem
}

.estimate-payment__header .estimate-payment__selector .estimate-payment__title h3 {
	font-size: 2rem;
	line-height: 5.8rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	display: block;
	font-family: "NotoSans-Bold",sans
}

.estimate-payment__header .estimate-payment_hero-image {
	z-index: 600;
	position: relative;
	clear: both;
	margin: 0 auto
}

.estimate-payment__header-details {
	position: relative;
	padding: 2.5rem 1.5rem 2.5rem 1.5rem;
	overflow: hidden;
	background: #000;
	left: 0 !important;
	backface-visibility: hidden
}

.estimate-payment__header-details .estimate-payment__total {
	color: #fff
}

.estimate-payment__header-details .estimate-payment__total-value {
	display: inline-block;
	margin: 0 0 2.5rem 0;
	font-size: 6rem;
	line-height: 5rem;
	letter-spacing: 0
}

.estimate-payment__header-details .estimate-payment__total-value {
	display: inline-block;
	position: relative;
	margin: 0 0 2.5rem 0;
	font-family: "Trade-Gothic", sans;
	font-size: 6rem;
	line-height: 5rem
}

.estimate-payment__header-details .estimate-payment__total-value .estimate-payment__total-currency {
	font-size: 3.5rem;
	vertical-align: super;
	position: relative;
	top: 0;
	left: 0
}

.estimate-payment__header-details .estimate-payment__total-title {
	font-size: 2.2rem;
	line-height: 2.6rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-weight: normal;
	letter-spacing: 0.2rem;
	height: 52px
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.estimate-payment__header-details .estimate-payment__total-title {
		height: 42px
	}
}

.estimate-payment__header-details .estimate-payment__total-smallcopy-wrapper {
	padding-left: 0px;
	color: #fff
}

.estimate-payment__header-details .estimate-payment__total-smallcopy {
	font-size: 1rem;
	line-height: 1.2rem
}

.estimate-payment__header-details .estimate-payment__summary,.estimate-payment__header-details .estimate-payment__addons {
	color: #fff;
	list-style: disc;
	margin-top: -1rem;
	padding: 0;
	font-size: 1.3rem
}

.estimate-payment__header-details .estimate-payment__summary li,.estimate-payment__header-details .estimate-payment__addons li {
	margin: 1rem 0
}

.estimate-payment__header-details .estimate-payment__cta-btn {
	margin: 0.5rem 0
}

.estimate-payment__header-details .estimate-payment__cta-btn .cta-label {
	width: 100%
}

@media only screen and (min-width: 992px) {
	.estimate-payment__header-details .estimate-payment__cta-btn .cta-label {
		width: 179px
	}
}

.estimate-payment__header-details .estimate-payment__ctas-links {
	text-align: right;
	width: 216px;
	padding-top: 1rem
}

@media screen and (min-width: 992px) {
	.estimate-payment__header-details .estimate-payment__ctas-links {
		min-width: 256px
	}
}

.estimate-payment .estmate-sticky {
	padding-top: 2.2rem;
	position: fixed;
	width: 100%;
	z-index: 500;
	top: 0;
	left: initial !important;
	background-color: #000;
	max-width: 1440px
}

.estimate-payment .estmate-sticky.estimate-payment__header-mobile.estmate-sticky {
	left: 0 !important
}

.estimate-payment .estmate-sticky.estmate-sticky--pull-down {
	padding-top: 7rem
}

.ie .estmate-sticky {
	max-width: 1920px
}

.ios .estimate-payment__header-details .estimate-payment__ctas-links,.tablet .estimate-payment__header-details .estimate-payment__ctas-links {
	display: none
}

@media only screen and (max-width: 320px) {
	.estimate-payment__ctas .button {
		font-size: 0.9em
	}
}

@media only screen and (min-width: 768px) {
	.estimate-payment .estmate-sticky {
		transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03)
	}

	.estimate-payment .estmate-sticky.estmate-sticky--pull-down {
		padding-top: 13.3rem
	}

	.estimate-payment__header-details .estimate-payment__total-smallcopy {
		font-size: 1.3rem;
		line-height: 1.8rem
	}

	.estimate-payment__header .estimate-payment_hero-image {
		padding-bottom: 0px;
		text-align: center
	}

	.estimate-payment__header .estimate-payment_hero-image img {
		display: inline-block;
		width: auto
	}

	.estimate-payment__header .estimate-payment__selector {
		position: absolute;
		margin: 3rem 0rem 0 3rem
	}

	.estimate-payment__header .estimate-payment__selector .estimate-payment__title h1 {
		font-size: 7.2rem;
		line-height: 8rem
	}
}

@media screen and (min-width: 768px) and (max-width: 1440px) {
	.estimate-payment__header-details .col:last-child {
		padding: 0
	}
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
	.estimate-payment__ctas .button {
		font-size: 1.1rem
	}

	.estimate-payment__header-details .estimate-payment__total-value {
		font-size: 2.8rem;
		line-height: 5rem
	}
}

@media only screen and (min-width: 992px) {
	.estimate-payment__ctas .button {
		font-size: 1.3rem
	}

	.estimate-payment__header .estimate-payment_hero-image img {
		height: 65rem;
		width: auto
	}

	.estimate-payment__header-details .estimate-payment__summary li {
		margin: .7rem 0
	}

	.estimate-payment__header-details .estimate-payment__total-value {
		font-size: 5rem;
		line-height: 4rem;
		letter-spacing: 0.250rem
	}

	.estimate-payment__paintselector li:hover span {
		display: block;
		border-bottom: 6px solid #ff6600;
		position: absolute;
		bottom: 14%;
		height: 6px;
		width: 70%
	}
}

@media only screen and (min-width: 1440px) {
	.estimate-payment .estimate-payment__selector {
		position: absolute;
		margin: 6rem 0rem 0 11rem
	}
}

@media only screen and (max-width: 768px) {
	.estimate-payment__header .estimate-payment__selector .estimate-payment__title h1 {
		font-size: 4rem;
		line-height: 4rem
	}

	.estimate-payment .estimate-payment__header-details .estimate-payment__ctas-links {
		display: none
	}

	.estimate-payment .estimate-payment__header-details .estimate-payment__ctas-links .estimate-payment__ctas-email {
		margin-left: 0;
		margin-right: 0;
		padding-right: 3.5rem;
		background-position: right center
	}

	.estimate-payment .estimate-payment__header-details .estimate-payment__ctas-links .estimate-payment__ctas-print {
		display: none
	}

	.estimate-payment .estimate-payment__header-details .estimate-payment__total-value {
		font-size: 3.5rem;
		line-height: 4rem;
		white-space: nowrap
	}

	.estimate-payment .estimate-payment__total-value {
		font-size: 4rem;
		line-height: 2rem;
		margin: 0;
		word-break: break-all
	}

	.estimate-payment .estimate-payment__total-value.smallscreen {
		text-align: right
	}

	.estimate-payment .estimate-payment__total-value.estimate-payment__total-currency {
		font-size: 2.8rem;
		left: 6%;
		top: 0.7rem
	}

	.estimate-payment .estimate-payment__total-title {
		font-size: 1.2rem;
		line-height: 1.8rem
	}

	.estimate-payment .estimate-payment__total.smallscreen {
		text-align: right
	}

	.estimate-payment .estimate-payment__total-smallcopy__hot {
		position: absolute;
		left: -15px
	}

	.estimate-payment .estimate-payment__total .estimate-payment__ctas-links {
		margin: 1.5rem 0;
		text-align: right
	}

	.estimate-payment .estimate-payment__total .estimate-payment__ctas-links .estimate-payment__ctas-email {
		display: inline-block;
		background-image: url("../../images/estimate-payment/icon_arrow_white.png");
		background-repeat: no-repeat;
		background-position: 90% 45%;
		padding-right: 3rem;
		margin: 0
	}
}

@media only screen and (max-width: 768px) and (min-width: 1440px) {
	.estimate-payment__header-details {
		padding: 2rem 10rem
	}

	.estimate-payment__header-details .estimate-payment__summary li {
		margin: .8rem 0
	}

	.estimate-payment__ctas .button {
		font-size: 1.6rem
	}
}

@media only screen and (min-width: 768px) {
	.rtl .estimate-payment__header>.col {
		position: absolute;
		right: 0px;
		margin-right: 10rem
	}
}

.rtl .estimate-payment__header .estimate-payment__selector .estimate-payment__selection {
	left: auto;
	right: 0px;
	padding-right: 0
}

.estimate-payment {
	background: #fff;
	margin: 0 auto;
	width: 100%;
	max-width: 1440px;
	overflow: hidden
}

.estimate-payment img {
	width: 100%;
	max-width: 100%
}

.estimate-payment__options {
	padding: 0 4rem
}

.estimate-payment__enginename {
	min-height: 22px
}

.estimate-payment-ui {
	padding: 0 4rem
}

.estimate-payment-ui-annual p {
	margin-top: 0.8rem;
	font-size: 1.6rem;
	font-style: italic
}

.estimate-payment__ctas {
	padding: 2.3rem 3.2rem 0rem 3.2rem;
	text-align: center
}

.estimate-payment__ctas .estimate-payment__cta-btn.cta.cta-btn:hover {
	padding-right: 5.6rem
}

.desktop .estimate-payment__ctas .estimate-payment__cta-btn.cta.cta-btn:hover {
	padding-right: 6.72rem
}

.estimate-payment__ctas .estimate-payment__cta-btn .cta-label {
	white-space: pre-wrap
}

.estimate-payment__ctas--mobile {
	padding: 0 4rem
}

.estimate-payment__ctas-btns {
	text-align: left
}

.estimate-payment__sup {
	font-size: 60%;
	position: relative;
	top: -1.1rem
}

.estimate-payment__paintselector .estimate-payment__options-option {
	margin: 0 3%;
	width: 18.47%;
	height: 0;
	padding-bottom: 16%;
	text-align: center;
	float: left;
	position: relative;
	cursor: pointer;
	outline: none
}

.estimate-payment__paintselector .estimate-payment__options-option.selected-option span {
	display: block;
	padding: 0 8%;
	height: 6px;
	width: 100%
}

.estimate-payment__paintselector .estimate-payment__options-option.selected-option span:before {
	content: "";
	display: block;
	border-bottom: 6px solid #f60;
	width: 100%
}

@media only screen and (min-width: 768px) {
	.estimate-payment__paintselector .estimate-payment__options-option {
		width: 85px;
		height: 74px
	}
}

@media only screen and (min-width: 1440px) {
	.estimate-payment__paintselector .estimate-payment__options-option {
		height: 90px
	}
}

.estimate-payment__color-disclaimer {
	padding-bottom: 7rem;
	color: #555
}

.estimate-payment__header-details-background {
	background-color: #000
}

.estimate-payment__header-details-wrapper {
	max-width: 120rem;
	margin: 0 auto
}

.estimate-payment__legal--collapsed {
	max-height: 7rem;
	overflow: hidden
}

.estimate-payment__toggle-legal {
	display: none
}

.estimate-payment__toggle-legal--visible {
	display: inline
}

.estimate-payment__edit {
	background-color: #fff;
	color: #000;
	overflow: hidden;
	max-width: 120rem;
	margin: 0 auto;
	padding: 5rem 2rem 0rem 2rem
}

@media only screen and (max-width: 767px) {
	.estimate-payment__edit-expanded-fixed {
		padding-top: 18rem
	}
}

.estimate-payment__edit h3 {
	font-size: 2.8rem;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media only screen and (min-width: 768px) {
	.estimate-payment__edit h3 {
		font-size: 2.4rem
	}
}

.estimate-payment__edit p {
	font-size: 1.6rem
}

.estimate-payment__edit ul {
	list-style: none;
	padding: 0;
	overflow: hidden;
	margin-top: 5rem
}

.estimate-payment__edit ul li {
	position: relative
}

.estimate-payment__edit ul li img {
	padding: 0 0 2rem 0
}

.estimate-payment__edit label {
	width: 100%;
	display: inline-block;
	font-size: 2.1rem;
	margin: 0 0 1.8rem 0;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media only screen and (min-width: 768px) {
	.estimate-payment__edit label {
		font-size: 1.8rem
	}
}

.estimate-payment__edit label[for="estimate-payment__field-months"] {
	margin: 0
}

.estimate-payment__edit input {
	padding: 1rem;
	border: 2px solid #000;
	border-radius: 0;
	width: 100%
}

.estimate-payment__edit .estimate-payment__field {
	margin: 5rem 0
}

.estimate-payment__edit .estimate-payment__field-downpayment-note {
	color: #555
}

.estimate-payment__edit .estimate-payment__field--default {
	color: #a3a3a3
}

.estimate-payment__edit .estimate-payment__field select {
	font-family: "NotoSans-Bold",sans;
	min-width: 70%;
	height: 4rem;
	padding: 1rem;
	border: 2px solid #000;
	border-radius: 0;
	background-color: transparent;
	background: transparent url("../../images/estimate-payment/icon-detail-arrow-down-black.png") no-repeat 94% 50%;
	background-size: 0.9rem 0.5rem;
	background-position: right 1.5rem center;
	-webkit-appearance: none;
	-moz-appearance: none
}

.estimate-payment__edit .estimate-payment__field select::-ms-expand {
	display: none
}

.estimate-payment__edit .estimate-payment__field select:focus {
	outline: none
}

.estimate-payment__edit .estimate-payment__field p.estimate-payment__field-monthscopy {
	font-style: italic;
	margin: 0 0 1.5rem 0
}

.estimate-payment__edit .estimate-payment__text-field {
	position: relative;
	width: 70%;
	display: inline-block
}

@media only screen and (min-width: 768px) {
	.estimate-payment__edit .estimate-payment__text-field {
		max-width: 28rem
	}
}

.estimate-payment__edit .estimate-payment__text-field .estimate-payment__edit-button {
	position: absolute;
	padding: 1rem;
	width: 1.6rem;
	height: 1.6rem;
	top: 50%;
	right: 1rem;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	border: none;
	background: url("../../images/textarea-pen-icon.png") center no-repeat;
	background-size: 80%;
	z-index: 10
}

.estimate-payment__edit .estimate-payment__text-field input {
	-moz-appearance: textfield;
	background: transparent;
	box-shadow: none;
	position: relative;
	z-index: 2
}

.estimate-payment__edit .estimate-payment__text-field input::-ms-clear {
	display: none
}

.estimate-payment__edit .estimate-payment__text-field input::-webkit-inner-spin-button,.estimate-payment__edit .estimate-payment__text-field input::-webkit-outer-spin-button {
	-webkit-appearance: none;
	-moz-appearance: textfield;
	margin: 0;
	z-index: 1
}

.estimate-payment__loandetails {
	background-color: #494949;
	overflow: hidden
}

.estimate-payment__loandetails-header {
	text-align: center;
	padding: 1rem 0
}

.estimate-payment__loandetails-header p:after {
	content: url("../../images/estimate-payment/icon-detail-arrow-down.png");
	padding-left: 2rem
}

.estimate-payment__loandetails-header.expanded p:after {
	content: url("../../images/estimate-payment/icon-detail-arrow-up.png")
}

.estimate-payment__loandetails-header p {
	margin: 0.5rem;
	font-weight: bold;
	cursor: pointer;
	color: #fff
}

.estimate-payment__loandetails-body {
	font-size: 1.2rem;
	padding: 0.5rem 3.5rem 2rem 3.5rem;
	overflow: hidden;
	display: none
}

.estimate-payment__termscond {
	margin-bottom: 4rem
}

.estimate-payment__termscond p {
	font-size: 1.4rem;
	color: #808080;
	background-color: #fff
}

.estimate-payment__termscond .col {
	float: none;
	margin: 0 auto
}

.estimate-payment__paintselector {
	margin-left: -5px;
	margin-right: -5px;
	padding-left: 2.67%;
	padding-right: 2.67%;
	margin-bottom: 2rem
}

@media only screen and (min-width: 768px) {
	.estimate-payment__paintselector {
		padding: 0 2rem
	}
}

.estimate-payment__paintselector span {
	display: none
}

.estimate-payment__engine-wrapper {
	text-align: center;
	padding: 0.5rem 1rem 0rem 1rem;
	border: 2px solid #ccc;
	color: #ccc;
	margin-bottom: 3rem;
	font-size: 2.4rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.estimate-payment__engine-selector {
	margin-top: 0
}

.estimate-payment__engine-selector li {
	margin-right: 1rem;
	cursor: pointer;
	outline: none
}

.estimate-payment__engine-selector li.selected-option .estimate-payment__engine-wrapper {
	border-color: #000;
	color: #000
}

.estimate-payment__engine-selector li.selected-option span {
	display: block;
	border-bottom: 6px solid #f60;
	position: absolute;
	bottom: 14%;
	height: 6px;
	width: 84%
}

.estimate-payment__field-months {
	font-weight: 700;
	overflow: initial;
	margin: 0
}

.estimate-payment__field-months li {
	display: inline-block;
	margin: 0
}

.estimate-payment__field-months li span {
	padding: 0.3rem 0.5rem;
	border-radius: 7rem;
	background-color: #fff;
	display: inline-block;
	cursor: pointer
}

.estimate-payment__field-months li.estimate-payment__month-selected {
	outline: none
}

.estimate-payment__field-months li.estimate-payment__month-selected span {
	outline: none;
	background-color: #f60 !important
}

.estimate-payment__field-divider {
	margin: 0;
	width: 9%;
	vertical-align: middle
}

.estimate-payment__field-divider hr {
	margin: 0;
	border: solid 1px #000
}

.estimate-payment__nopad {
	padding: 0
}

.no-touchevents .estimate-payment__paintselector .estimate-payment__options-option:hover span {
	display: block
}

.no-touchevents .estimate-payment__paintselector .estimate-payment__options-option:hover span:before {
	content: "";
	display: block;
	border-bottom: 6px solid #f60;
	width: 100%
}

.desktop .estimate-payment__field-months li:hover span {
	background-color: #f60
}

@media only screen and (max-width: 320px) {
	.estimate-payment__edit .estimate-payment__field select {
		width: 100%
	}

	.estimate-payment__edit input {
		width: 100%
	}

	.estimate-payment__edit ul li {
		font-size: 1.2rem
	}

	.estimate-payment__field-months .estimate-payment__field-divider {
		width: 7%
	}
}

@media only screen and (max-width: 768px) {
	.estimate-payment .container {
		padding-left: 0px;
		padding-right: 0px
	}

	.estimate-payment__ctas .estimate-payment__cta-btn {
		width: 100%
	}

	.estimate-payment__ctas .button {
		font-size: 1.2rem;
		width: 100%;
		white-space: nowrap
	}

	.estimate-payment__ctas--mobile {
		padding-top: 0;
		text-align: center
	}

	.estimate-payment__ctas--mobile .cta-btn {
		margin: 0.5rem 0
	}

	.estimate-payment__ctas--mobile .button {
		background-image: url("../../images/estimate-payment/icon_arrow_black.png");
		background-repeat: no-repeat;
		background-position: 90% 45%;
		width: 100%
	}

	.estimate-payment__ctas--mobile .button--black {
		color: #ffffff;
		border-color: #000000;
		margin-top: 1.3rem;
		background-image: url("../../images/estimate-payment/icon_arrow_white.png");
		background-repeat: no-repeat;
		background-position: 90% 45%
	}

	.estimate-payment__termscond {
		margin-bottom: 3rem;
		padding: 2rem 1rem 0 1rem
	}

	.estimate-payment__termscond .estimate-payment__legal--expanded {
		max-height: none
	}

	.estimate-payment__termscond .estimate-payment__toggle-legal {
		font-size: 1.2rem;
		text-decoration: underline
	}

	.estimate-payment_hero-image {
		transform: translateY(0%);
		top: 50%;
		left: 0
	}

	.estimate-payment__text-field {
		width: 100%
	}

	.estimate-payment__loandetails {
		margin-top: 10px
	}

	.estimate-payment__edit .estimate-payment__field select {
		width: 100%
	}

	.estimate-payment__edit input {
		width: 100%
	}
}

@media only screen and (min-width: 768px) {
	.estimate-payment__ctas {
		padding: 0px 2rem
	}

	.estimate-payment__legal--collapsed {
		max-height: inherit
	}

	.estimate-payment__toggle-legal--visible {
		display: none
	}
}

.ie .estimate-payment__text-field {
	cursor: pointer
}

.ie .estmate-sticky {
	max-width: 1920px
}

.rtl .estimate-payment__header-details .estimate-payment__total-value {
	float: right;
	clear: both
}

.rtl .estimate-payment__paintselector {
	clear: both
}

.rtl .estimate-payment__title h5 {
	float: right;
	clear: both
}

.rtl .estimate-payment__title h1 {
	clear: both
}

.rtl .estimate-payment__field {
	text-align: right
}

.rtl .estimate-payment__edit h3,.rtl .estimate-payment__edit p {
	float: right;
	clear: both
}

.family-bike {
	position: relative;
	height: auto;
	background: #fff;
	background-size: cover;
	min-height: 50rem
}

.family-bike--no-filter .family-bike__car-info {
	top: 10%;
	padding-top: 0
}

.family-bike__overlay {
	position: absolute;
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.7);
	z-index: 100;
	text-align: center;
	color: #fff
}

.family-bike__overlay-content {
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%)
}

.family-bike__overlay-content:hover {
	color: #f60;
	cursor: pointer
}

.family-bike__overlay-content:hover .family-bike__overlay-btn {
	border: 2px solid #f60
}

.family-bike__overlay .family-bike__car-info {
	top: 80px;
	padding-top: 0;
	opacity: 1;
	color: #fff
}

.family-bike__overlay .family-bike__car-info:after {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%);
	content: "";
	border: 1px solid #fff;
	height: 1px;
	width: 70px
}

.family-bike__overlay .family-bike__family-car-name {
	margin-top: 30px
}

.family-bike__overlay-btn {
	border: 2px solid #fff;
	border-radius: 50%;
	width: 72px;
	height: 72px
}

.family-bike__overlay-btn span {
	position: absolute;
	font-size: 2.5rem;
	line-height: 2rem;
	left: 7px;
	top: 18px
}

.family-bike__overlay-btn span:after,.family-bike__overlay-btn span:before {
	position: relative;
	top: 5px;
	font-family: 'icomoon' !important;
	content: "\e901";
	font-size: 70%;
	vertical-align: middle;
	line-height: 1px
}

.family-bike__overlay-btn span:before {
	display: inline-block;
	transform: rotate(-180deg)
}

.family-bike__overlay-title {
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	max-width: 72px;
	font-size: 1.2rem;
	margin-top: 20px
}

.family-bike__filter {
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	background-color: #000;
	text-align: center;
	transition: all 500ms linear;
	white-space: nowrap;
	overflow: auto
}

.family-bike__filter-container {
	position: absolute;
	z-index: 2;
	width: 100%;
	left: 0;
	margin-top: 5.33333%
}

.family-bike__filter-container::after,.family-bike__filter-container::before {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	width: 17.33333%;
	height: 100%;
	background: transparent
}

.family-bike__filter-container::before {
	left: -1.7rem;
	background: linear-gradient(to right, #000, transparent);
	z-index: 3
}

.family-bike__filter-container::after {
	right: 0;
	background: linear-gradient(to left, #000, transparent);
	z-index: 3
}

.family-bike__filter-item {
	display: inline-block;
	position: relative;
	padding: 0 12px;
	font-family: "Trade-Gothic",sans;
	text-transform: uppercase;
	text-align: center;
	outline: none
}

.family-bike__filter-item:first-child {
	padding: 0 1.3rem 0 5.3rem
}

.family-bike__filter-item:first-child::before {
	content: '';
	width: 1px;
	height: 14px;
	background: #ffffff;
	position: absolute;
	top: 47%;
	right: 0;
	transform: translate(0, -50%)
}

.family-bike__filter-item:last-child {
	border-right: none;
	padding-right: 5rem
}

@media only screen and (min-width: 768px) {
	.family-bike__filter-item:last-child {
		padding-right: 0rem
	}
}

.family-bike__filter-item-title {
	display: inline-block;
	padding: 18px 0;
	color: #fff;
	white-space: nowrap;
	line-height: 1;
	outline: none
}

.family-bike__filter-item-title:focus {
	position: relative;
	color: #fff;
	text-decoration: none;
	outline: none
}

.family-bike__item {
	position: absolute;
	top: 0;
	padding-right: 0px;
	padding-left: 0px;
	outline: none
}

.family-bike__item:first-child {
	position: relative
}

.family-bike .slick-initialized .family-bike__item {
	position: relative
}

.family-bike__car-info {
	position: absolute;
	left: 0;
	padding-top: 29.2%;
	width: 100%;
	text-align: center;
	transition: 0.2s;
	opacity: 0
}

.family-bike__car-info .cta-btn {
	background-color: transparent;
	border: 2px solid black;
	background-color: transparent;
	margin-top: 10px
}

.family-bike__family-car-name {
	line-height: 1.5;
	margin-bottom: 0;
	font-family: "Trade-Gothic",sans;
	text-transform: uppercase;
	letter-spacing: 1px
}

@media screen and (min-width: 320px) {
	.family-bike__family-car-name {
		font-size: 2rem;
		line-height: 2.75rem
	}
}

@media screen and (min-width: 768px) {
	.family-bike__family-car-name {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

.family-bike__car-name {
	text-transform: uppercase;
	line-height: 32px;
	letter-spacing: 2px
}

@media screen and (min-width: 320px) {
	.family-bike__car-name {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.family-bike__car-name {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.family-bike__car-image {
	position: relative;
	top: 0%
}

.family-bike__description {
	margin-top: 2.23077%
}

@media screen and (min-width: 320px) {
	.family-bike__description {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.family-bike__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.family-bike__list {
	width: 100%;
	height: 100%;
	z-index: 1;
	background-color: #fff
}

.family-bike__paging {
	display: inline-block;
	position: absolute;
	bottom: 2%;
	padding-top: 13px;
	width: auto;
	color: #000;
	font-size: 1.2rem;
	text-align: center;
	z-index: 2;
	left: 50%;
	transform: translate(-50%, 0%)
}

.family-bike__paging::before {
	content: "";
	position: absolute;
	top: 0;
	left: 50%;
	width: 115px;
	height: 2px;
	background: black;
	transform: translateX(-50%)
}

.family-bike__paging-item {
	font-weight: 600
}

.family-bike .family-bike__filter-item-title {
	text-decoration: none;
	outline: none;
	font-family: "NotoSans-Bold",sans;
	font-size: 1.4rem;
	padding: 18px 0
}

.family-bike .family-bike__filter-item-title:hover {
	color: #fff
}

.family-bike .slick-list {
	height: 100%
}

.family-bike .slick-track {
	height: 100%
}

.family-bike .slick-slide .family-bike__car-info {
	position: absolute
}

.family-bike .slick-slide .family-bike__car-image {
	top: 0px;
	z-index: -1;
	margin: 0 0
}

.family-bike .slick-slide .family-bike__car-image-bumper-left {
	position: absolute;
	top: 0px;
	left: 1px;
	transform: translate(-100%, 0%)
}

.family-bike .slick-slide .family-bike__car-image-bumper-right {
	position: absolute;
	top: 0px;
	right: 1px;
	transform: translate(100%, 0%)
}

.family-bike .family-bike__filter-item-title--active {
	position: relative;
	color: #f60 !important
}

.family-bike .family-bike__filter-item-title--active::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: #f60
}

.family-bike .family-bike__filter-item-title--active:hover {
	color: #f60
}

.family-bike.loading .slick-current .family-bike__car-info {
	opacity: 0
}

.family-bike .slick-current .family-bike__car-info {
	opacity: 1
}

.family-bike-btn {
	position: relative;
	margin-top: 2.30769%;
	padding-left: 22.5px;
	padding-right: 37.5px;
	border: 2px solid black;
	min-width: 58.66667%;
	width: auto;
	background: transparent;
	color: black;
	font-size: 1.4rem;
	letter-spacing: 0px;
	text-align: left
}

.family-bike-btn:hover,.family-bike-btn:active,.family-bike-btn:focus {
	background: none;
	border-color: #000
}

.landscape .family-bike__filter-item:first-child {
	padding-left: 10rem
}

.landscape .family-bike__filter-item:last-child {
	padding-right: 10rem
}

@media only screen and (min-width: 480px) {
	.family-bike__car-image {
		top: 0%
	}
}

@media only screen and (min-width: 768px) {
	.family-bike {
		height: 800px;
		padding-bottom: 0;
		color: white
	}

	.family-bike--no-filter .family-bike__car-info {
		top: 50px
	}

	.family-bike__filter {
		text-align: center
	}

	.family-bike__filter-container {
		margin-top: 21px;
		width: auto;
		left: 30px;
		right: 30px
	}

	.family-bike__filter-container::before,.family-bike__filter-container::after {
		display: none
	}

	.family-bike__filter-item-title:focus,.family-bike__filter-item-title:hover {
		position: relative;
		color: white;
		text-decoration: none
	}

	.family-bike__filter-item-title:focus::after,.family-bike__filter-item-title:hover::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: #f60
	}

	.family-bike__item {
		padding-left: 0;
		padding-right: 0
	}

	.family-bike__paging::before {
		height: 1px;
		background: #474642
	}

	.family-bike__car-info {
		top: 108px;
		padding-top: 0;
		color: #000
	}

	.family-bike__car-info::before {
		display: none
	}

	.family-bike__car-name {
		margin-top: 0
	}

	.family-bike__description {
		margin: 0px auto 0;
		max-width: 500px
	}

	.family-bike-btn {
		min-width: 220px;
		border-color: #000;
		font-size: 1.4rem;
		text-align: left;
		margin-top: 8px
	}

	.family-bike .slick-slider .family-bike__filter-item-title {
		text-decoration: none;
		outline: none
	}

	.family-bike .slick-slider .family-bike__filter-item-title:focus,.family-bike .slick-slider .family-bike__filter-item-title:hover {
		position: relative;
		color: #f60
	}

	.family-bike .slick-slider .family-bike__filter-item-title:focus::after,.family-bike .slick-slider .family-bike__filter-item-title:hover::after {
		content: "";
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		height: 3px;
		background: #f60
	}

	.family-bike .slick-next,.family-bike .slick-prev {
		display: block;
		width: 24px;
		height: 45px
	}

	.family-bike .slick-next::before,.family-bike .slick-prev::before {
		display: none
	}

	.family-bike .slick-next:hover,.family-bike .slick-prev:hover {
		filter: brightness(50%)
	}

	.family-bike .slick-next {
		right: 4.16%;
		background: url("../../images/slide-arrow-right.png") no-repeat;
		background-size: cover
	}

	.family-bike .slick-prev {
		left: 4.16%;
		z-index: 2;
		background: url("../../images/slide-arrow-left.png") no-repeat;
		background-size: cover
	}

	.family-bike .slick-disabled {
		opacity: 0;
		cursor: default
	}

	.family-bike__car-image {
		top: 0px;
		width: auto !important;
		height: 1443px;
		margin-top: -643px !important;
		z-index: -1;
		display: block;
		margin: 0 0
	}

	.family-bike__car-image-bumper-left {
		position: absolute;
		top: 0px;
		width: auto !important;
		height: 1443px;
		margin-top: -643px !important;
		left: 2px;
		display: block;
		transform: translate(-100%, 0%)
	}

	.family-bike__car-image-bumper-right {
		position: absolute;
		top: 0px;
		right: 1px;
		width: auto !important;
		height: 1443px;
		margin-top: -643px;
		display: block;
		transform: translate(100%, 0%)
	}

	.family-bike .slick-slide .family-bike__car-image {
		top: 25px
	}

	.family-bike .slick-slide .family-bike__car-image-bumper-left {
		top: 25px
	}

	.family-bike .slick-slide .family-bike__car-image-bumper-right {
		top: 25px
	}
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.family-bike__filter sup {
		top: -0.9em
	}
}

@media only screen and (max-width: 767px) {
	.family-bike__filter {
		height: auto
	}

	.family-bike__filter-item-title {
		font-size: 4.39vw !important
	}

	.family-bike__family-car-name {
		font-size: 5.25vw;
		line-height: 1.85;
		margin-bottom: 0
	}

	.family-bike__car-name {
		font-size: 9.6vw;
		line-height: .9
	}

	.family-bike__description {
		max-width: 29rem;
		margin: 0 auto 3rem auto
	}

	.family-bike__description p {
		font-size: 3.7vw;
		line-height: 1.5
	}

	.family-bike-btn {
		font-size: 3.7vw;
		min-width: 54%;
		padding: 2.5% 3.8%
	}

	.family-bike-btn span {
		font-size: 3vw;
		width: 18px !important;
		top: 1px
	}

	.family-bike__car-image {
		margin-top: -9% !important
	}

	.family-bike__car-image-bumper-left,.family-bike__car-image-bumper-right {
		margin-top: -9% !important
	}

	.family-bike__paging {
		font-size: 2.5vw;
		padding-top: 2%
	}

	.family-bike__paging::before {
		width: 30px;
		height: 1px
	}

	.landscape .family-bike__filter-item-title {
		font-size: 1.4rem !important
	}

	.landscape .family-bike__car-name {
		font-size: 3.6rem
	}
}

@media screen and (max-width: 768px) and (orientation: landscape) {
	.family-bike__car-image {
		top: 0px;
		width: auto !important;
		height: 700px;
		margin-top: -100px !important;
		z-index: -1;
		display: block;
		margin: 0 0
	}

	.family-bike__car-image-bumper-left {
		height: 700px;
		margin-top: -100px !important
	}
}

.find-a-dealer-default-logo {
	width: auto;
	max-height: 60px;
	margin-bottom: 20px
}

.find-a-dealer-container {
	overflow: visible
}

.find-a-dealer-container .loader {
	width: 32px;
	height: 32px;
	background-image: url("../../images/ajax-loader.gif");
	display: none;
	margin: 2rem auto 0 auto
}

.find-a-dealer-container:after {
	content: '';
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: progress;
	background: transparent;
	z-index: 110
}

.find-a-dealer-container.updating:after {
	display: block
}

.find-a-dealer {
	position: relative;
	overflow: hidden;
	margin: 0 auto;
	min-height: 40rem;
	background-color: #fff
}

.find-a-dealer .loading-wrapper {
	position: absolute
}

.find-a-dealer-schedule {
	width: 100%
}

@media screen and (min-width: 992px) {
	.find-a-dealer-schedule tr td:first-child {
		width: 55%
	}
}

.find-a-dealer-search {
	margin: 0 auto;
	padding: 2rem 3rem 3rem;
	display: none
}

.find-a-dealer-search__title {
	display: block;
	text-align: center;
	margin-bottom: 2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	color: #000;
	text-transform: uppercase;
	letter-spacing: 2px
}

@media screen and (min-width: 320px) {
	.find-a-dealer-search__title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-search__title {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.find-a-dealer-search__intro {
	max-width: 70rem;
	margin: 35px auto;
	text-align: center
}

@media screen and (min-width: 320px) {
	.find-a-dealer-search__intro {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-search__intro {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.find-a-dealer-search__input-wrapper {
	position: relative
}

.find-a-dealer-search__input-wrapper .find-a-dealer-search__input {
	padding: 1.1rem
}

.find-a-dealer-search__input-wrapper.has-value .find-a-dealer-search__input {
	padding-right: 5.4rem
}

.find-a-dealer-search__input-wrapper.has-value .find-a-dealer-search__clear-btn {
	display: block
}

.find-a-dealer-search__clear-btn {
	display: inline-block;
	margin-bottom: 0;
	font-weight: normal;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.42857;
	border-radius: 4px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	position: absolute;
	display: none;
	top: 0;
	right: 0;
	width: 5.4rem;
	height: 100%;
	text-indent: -9999px
}

.find-a-dealer-search__clear-btn,.find-a-dealer-search__clear-btn:focus,.find-a-dealer-search__clear-btn:active,.find-a-dealer-search__clear-btn:active:focus {
	outline: none;
	background: url("../../images/close-btn-black.png") center no-repeat transparent;
	background-size: 20% auto
}

.find-a-dealer-search .button {
	background-color: #000;
	border-color: #000;
	color: #fff
}

.find-a-dealer-search__cta {
	position: relative;
	margin-top: 2rem;
	width: 100%;
	outline: none
}

.find-a-dealer-search__search {
	position: relative;
	margin: 2rem 0 0 0;
	width: 100%;
	color: #777;
	text-align: left
}

.find-a-dealer-search__search.button--light-grey-2 {
	color: #777;
	background: #d8d8d8;
	border-color: #d8d8d8
}

.find-a-dealer-search__search:focus {
	color: #777;
	outline: none
}

.find-a-dealer-search__predictions {
	list-style-type: none;
	padding-left: 0;
	margin-bottom: 0;
	margin-top: 1rem;
	display: none
}

@media screen and (min-width: 320px) {
	.find-a-dealer-search__predictions {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-search__predictions {
		font-size: 1.4rem
	}
}

.find-a-dealer-search__prediction-link {
	padding: 0.8rem 0.8rem 0.6rem 0.8rem;
	cursor: pointer;
	font-family: "NotoSans-Regular",sans;
	width: 100%
}

.find-a-dealer-search__prediction-link:focus,.find-a-dealer-search__prediction-link:hover {
	background-color: #ccc
}

.find-a-dealer-search__error {
	color: #a8000a;
	padding-left: 1.3rem;
	position: relative;
	display: none;
	font-size: 1.2rem;
	margin-top: 1rem;
	text-align: left
}

.find-a-dealer-search__error:hover {
	cursor: default
}

.find-a-dealer-search__noresults {
	display: none;
	font-size: 1.2rem;
	width: 32rem;
	margin: 0 auto 2.7rem;
	text-align: left
}

.find-a-dealer-search__noresults ul {
	list-style-type: none;
	padding-left: 0
}

.find-a-dealer-search__divider {
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-align: center;
	position: relative;
	margin: 3rem 0
}

@media screen and (min-width: 320px) {
	.find-a-dealer-search__divider {
		font-size: 1.6rem;
		line-height: 1.6rem
	}
}

.find-a-dealer-search__divider:before {
	content: '';
	position: absolute;
	left: 0;
	top: 45%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background-color: #000000;
	height: 1px;
	width: 42%
}

.find-a-dealer-search__divider:after {
	content: '';
	position: absolute;
	right: 0;
	top: 45%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background-color: #000000;
	height: 1px;
	width: 42%
}

.find-a-dealer-search__location {
	color: #ffffff;
	text-align: left;
	border-color: #000000;
	position: relative;
	width: 100%;
	outline: none
}

@media screen and (min-width: 320px) {
	.find-a-dealer-search__location {
		font-size: 1.4rem
	}
}

.find-a-dealer-search__location:after {
	content: '';
	position: absolute;
	right: 2rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background-size: 100%;
	width: 1.55rem;
	height: 2.25rem
}

.find-a-dealer-search__location.cta.cta-icon__location-pin .cta-icon:after {
	content: "\e902"
}

.find-a-dealer-filters__list {
	display: none;
	position: relative;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100%;
	padding: 7rem 3rem 3rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	color: #fff;
	background-color: #202020;
	z-index: 99
}

.find-a-dealer-filters__list .find-a-dealer-program-groups,.find-a-dealer-filters__list .find-a-dealer-program-codes {
	list-style-type: none;
	padding-left: 0
}

.find-a-dealer-filters__list .find-a-dealer-program-groups {
	padding-top: 1.2rem;
	clear: both
}

.find-a-dealer-filters__list .find-a-dealer-program-group {
	margin-top: 0;
	padding-top: 1.4rem;
	padding-bottom: 3rem
}

.find-a-dealer-filters__list .find-a-dealer-program-group:before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 1px;
	background-color: #494949
}

.find-a-dealer-filters__list .find-a-dealer-program-group:last-child {
	padding-bottom: 0
}

.find-a-dealer-filters__list .find-a-dealer-program-group__title {
	font-size: 2.15rem;
	letter-spacing: 0.5px
}

.find-a-dealer-filters__list .find-a-dealer-program-codes {
	margin: 1rem 0 3rem 0
}

.find-a-dealer-filters__list .find-a-dealer-program-code {
	position: relative;
	min-height: 2.7rem;
	margin: 2rem 0
}

.find-a-dealer-filters__list .find-a-dealer-program-code__checkbox {
	display: none
}

.find-a-dealer-filters__list .find-a-dealer-program-code__checkbox:checked+.find-a-dealer-program-code__label:before {
	background: url("../../images/check-orange.png") no-repeat center center;
	background-size: 1.3rem 1.1rem
}

.find-a-dealer-filters__list .find-a-dealer-program-code__label {
	font-size: 0;
	font-weight: normal;
	cursor: pointer
}

.find-a-dealer-filters__list .find-a-dealer-program-code__label:before {
	content: '';
	height: 2.5rem;
	width: 2.5rem;
	border: 2px solid #fff;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.find-a-dealer-filters__list .find-a-dealer-program-code__description {
	font-family: "NotoSans-Regular",sans;
	display: inline-block;
	padding-left: 4.7rem;
	text-transform: none
}

@media screen and (min-width: 320px) {
	.find-a-dealer-filters__list .find-a-dealer-program-code__description {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-filters__list .find-a-dealer-program-code__description {
		font-size: 1.4rem
	}
}

.find-a-dealer-filters__list .find-a-dealer-program-code__description strong {
	display: block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	font-size: 1.5rem;
	line-height: 1.3
}

.find-a-dealer-filters__list .find-a-dealer-program-code__tip {
	position: relative;
	display: inline-block;
	margin-top: 0.5rem
}

.find-a-dealer-filters__close {
	position: absolute;
	top: 2.2rem;
	right: 3.2rem;
	padding-right: 2.4rem;
	font-family: "NotoSans-Bold",sans;
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 1px
}

.find-a-dealer-filters__close:after {
	content: '';
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/close-btn.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-filters__uncheck {
	float: right;
	position: relative;
	padding-right: 2.1rem;
	margin-top: 3rem;
	font-size: 1.2rem;
	font-family: "NotoSans-Bold",sans;
	letter-spacing: 0.5px
}

.find-a-dealer-filters__uncheck:after {
	content: '';
	height: 1.5rem;
	width: 1.5rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/find-a-dealer/uncheck-all.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-filters__headline {
	display: block;
	text-align: center;
	letter-spacing: 2px;
	clear: both
}

.find-a-dealer-filters__toggle {
	position: relative;
	border-width: 0.2rem;
	margin-top: 1.5rem;
	text-align: left;
	white-space: pre-wrap;
	padding: 1.3rem 3.2rem 1.3rem 1.7rem;
	line-height: 20px;
	width: 100%
}

@media screen and (min-width: 320px) {
	.find-a-dealer-filters__toggle {
		font-size: 1.4rem
	}
}

.find-a-dealer-filters__toggle:after {
	content: '';
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 1.5rem;
	width: 1.6rem;
	height: 1rem;
	background: url("../../images/cta-arrow-right.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-filters__hog-chap {
	margin-top: 4rem
}

.find-a-dealer-filters__hog-chap-copy {
	margin-top: 0.8rem
}

.find-a-dealer-filters__hog-chap-copy .find-a-dealer-detail__info-title {
	margin-top: 3.5rem
}

.find-a-dealer-results {
	display: none;
	padding: 2rem 3rem 3rem;
	background: #fff url("../../images/find-a-dealer/Find-A-Dealer_bg-Desktop.jpg") no-repeat;
	background-size: contain
}

.find-a-dealer-results--no-filter .find-a-dealer-filters__toggle {
	display: none !important
}

.find-a-dealer-results__again {
	display: none;
	vertical-align: top;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.find-a-dealer-results__again {
		font-size: 1.4rem;
		line-height: 2.6rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-results__again {
		font-size: 1.3rem;
		line-height: 2
	}
}

.find-a-dealer-results__dealers {
	position: relative;
	margin: 0;
	padding: 0 0 2rem 0
}

.find-a-dealer-results__dealers .inner {
	vertical-align: top;
	list-style-type: none;
	z-index: 1;
	padding: 0 0 2rem 0
}

.find-a-dealer-results__dealers .cta {
	margin-top: 1rem
}

.find-a-dealer-results__total {
	text-transform: uppercase;
	display: block;
	margin-top: 1.4rem
}

.find-a-dealer-results__dealer {
	margin-top: 3.2rem;
	padding: 0 1.6rem 0 0;
	position: relative;
	cursor: pointer
}

.find-a-dealer-results__dealer:after {
	content: '';
	position: absolute;
	right: 0;
	top: 0.4rem;
	width: 1.6rem;
	height: 1rem;
	background: url("../../images/cta-arrow-right.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-results__dealer--distance {
	padding-left: 0;
	padding-right: 1.2rem;
	position: relative;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-align: center
}

@media screen and (min-width: 320px) {
	.find-a-dealer-results__dealer--distance {
		font-size: 1.6rem;
		line-height: 1.6rem
	}
}

.find-a-dealer-results__dealer--number {
	display: block
}

.find-a-dealer-results__dealer--index {
	font-family: "NotoSans-Bold",sans;
	display: none;
	width: 3rem;
	height: 4rem;
	background: url("../../images/find-a-dealer/map-pin.png") no-repeat;
	background-size: 100%;
	text-align: center;
	padding-top: 0.8rem
}

@media screen and (min-width: 320px) {
	.find-a-dealer-results__dealer--index {
		font-size: 1.8rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 320px) {
	.find-a-dealer-results__dealer--unit {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-results__dealer--unit {
		font-size: 1.4rem
	}
}

.find-a-dealer-results__dealer--name {
	font-size: 1.5rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: inline-block;
	cursor: pointer
}

.find-a-dealer-results__dealer--address {
	display: inline-block;
	margin-top: 0.6rem
}

.find-a-dealer-results__dealer--name,.find-a-dealer-results__dealer--address {
	line-height: 1.2
}

.find-a-dealer-results__dealer--phone {
	display: inline-block;
	margin-top: 0.6rem
}

.find-a-dealer-detail {
	margin-left: -15px;
	margin-right: -15px
}

.find-a-dealer-detail-modal {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 600px;
	padding: 2.9rem 2.8rem;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	-ms-backface-visibility: hidden;
	-o-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: #000;
	color: #fff;
	overflow: auto;
	z-index: 99
}

.is-fullscreen .find-a-dealer-detail-modal {
	z-index: 9999999999
}

.find-a-dealer-detail-modal__close {
	position: absolute;
	top: 2rem;
	right: 2rem;
	width: 1.5rem;
	height: 1.5rem;
	background: url("../../images/close-btn.png") no-repeat;
	background-size: 100%;
	cursor: pointer
}

.find-a-dealer-detail-modal__col {
	margin-bottom: 2em;
	padding: 0;
	clear: right
}

.find-a-dealer-detail-modal__col--left {
	float: left;
	width: 3.5em
}

.find-a-dealer-detail-modal__col--right {
	float: left;
	width: calc(100% - 3.5em)
}

.find-a-dealer-detail-modal__distance--index {
	font-family: "NotoSans-Bold",sans;
	width: 3rem;
	height: 4rem;
	background: url("../../images/find-a-dealer/map-pin.png") no-repeat;
	background-size: 100%;
	color: #000000;
	text-align: center;
	padding-top: 0.8rem
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail-modal__distance--index {
		font-size: 1.8rem;
		line-height: 1.8rem
	}
}

.find-a-dealer-detail-modal__distance--number,.find-a-dealer-detail-modal__distance--unit {
	display: block;
	font-family: "NotoSans-Regular",sans
}

@media screen and (min-width: 768px) {
	.find-a-dealer-detail-modal__distance--number,.find-a-dealer-detail-modal__distance--unit {
		font-size: 1.2rem
	}
}

.find-a-dealer-detail-modal__info-wrapper {
	margin-top: 3rem
}

.find-a-dealer-detail-modal__name {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail-modal__name {
		font-size: 2.1rem;
		line-height: 2.6rem
	}
}

.find-a-dealer-detail-modal__info--phone {
	font-size: 1.25rem
}

.find-a-dealer-detail-modal__info-title {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail-modal__info-title {
		font-size: 1.5rem;
		line-height: 2rem
	}
}

.find-a-dealer-detail-modal__info {
	margin-bottom: .7rem;
	line-height: 1.3
}

@media screen and (min-width: 768px) {
	.find-a-dealer-detail-modal__info {
		font-size: 1.3rem
	}
}

.find-a-dealer-detail-modal__flex-wrapper {
	display: flex;
	margin-top: 4rem
}

.find-a-dealer-detail-modal__flex-col:last-child {
	padding-right: 0
}

.find-a-dealer-detail-modal__footer {
	clear: both;
	text-align: center
}

.find-a-dealer-detail-modal__footer .cta {
	font-size: 1.3rem
}

.find-a-dealer-detail-modal__footer .cta-label {
	min-width: 11.3rem
}

.find-a-dealer-detail-modal__more-info {
	margin: 2.3rem auto 0 auto;
	text-align: left;
	position: relative;
	max-width: 18rem;
	display: block;
	clear: both
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail-modal__more-info {
		font-size: 1.4rem
	}
}

.find-a-dealer-detail-modal__more-info:after {
	content: '';
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 1.5rem;
	width: 1.6rem;
	height: 1rem;
	background: url("../../images/cta-arrow-right.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-detail--modal__info {
	margin-bottom: .4rem;
	line-height: 1.4;
	font-size: 1.25rem
}

.find-a-dealer-detail__back {
	display: none
}

.find-a-dealer-detail__left-col {
	margin-top: 1.5rem
}

.find-a-dealer-detail__name {
	line-height: 3.3rem;
	text-transform: uppercase
}

.find-a-dealer-detail__distance {
	margin-top: 0.7rem;
	margin-bottom: 0;
	font-size: 1.4rem;
	font-family: "NotoSans-Bold",sans
}

.find-a-dealer-detail__info-title {
	text-transform: uppercase;
	display: block;
	margin-top: 3.5rem;
	margin-bottom: .9rem
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail__info-title {
		font-size: 2.1rem;
		line-height: 2.6rem
	}
}

.find-a-dealer-detail__info {
	margin: 0
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail__info {
		font-size: 1.2rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-detail__info {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.find-a-dealer-detail__info--address {
	margin-top: 2rem
}

.find-a-dealer-detail__info--phone {
	margin-top: 0.4rem
}

.find-a-dealer-detail__get-directions {
	border: #000;
	color: #fff;
	text-align: left;
	margin-top: 1.4rem;
	padding-top: 1.3rem;
	padding-bottom: 1.2rem;
	padding-left: 3rem;
	position: relative;
	width: 100%
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail__get-directions {
		font-size: 1.4rem
	}
}

.find-a-dealer-detail__get-directions:after {
	content: '';
	position: absolute;
	right: 2rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 1rem;
	height: 1rem;
	background: url("../../images/linkout-white.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-detail__test-ride {
	color: #000000;
	text-align: left;
	padding: 1.5rem 3rem;
	position: relative;
	max-width: 30rem;
	margin-top: 3rem;
	white-space: pre-wrap
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail__test-ride {
		font-size: 1.4rem
	}
}

.find-a-dealer-detail__test-ride:after {
	content: '';
	position: absolute;
	right: 1.5rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 1.6rem;
	height: 1rem;
	background: url("../../images/cta-arrow-right.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-detail__test-ride-btn {
	max-width: 100%;
	width: 100%
}

.find-a-dealer-detail__linkout {
	display: inline-block;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	font-family: "NotoSans-Bold",sans;
	margin-top: 0.8rem;
	padding-right: 2.1rem;
	position: relative
}

@media screen and (min-width: 320px) {
	.find-a-dealer-detail__linkout {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-detail__linkout {
		font-size: 1.4rem
	}
}

.find-a-dealer-detail__linkout:after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 1rem;
	height: 1rem;
	background: url("../../images/linkout-black.png") no-repeat;
	background-size: 100%
}

.find-a-dealer-detail__linkout--directions {
	margin-top: 0
}

.find-a-dealer-detail__hog-chap-copy {
	padding: 0;
	margin-top: 0.8rem
}

.find-a-dealer-detail__hog-chap-copy .find-a-dealer-detail__info-title {
	margin-top: 0
}

.find-a-dealer-detail__hog-logo {
	max-width: 25rem;
	padding-right: 0
}

.find-a-dealer-detail__hog-chap {
	margin-top: 4rem
}

.find-a-dealer-pagination {
	clear: left;
	min-height: 6.2rem;
	border-top: 1px solid #494949;
	border-bottom: 1px solid #494949;
	padding: 2rem 2.5rem;
	text-align: center
}

@media screen and (min-width: 320px) {
	.find-a-dealer-pagination {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-pagination {
		font-size: 1.4rem
	}
}

.find-a-dealer-pagination__arrow {
	width: 0.9rem;
	height: 1.9rem;
	text-indent: -9999px;
	font-size: 0
}

.find-a-dealer-pagination__next {
	float: right;
	background: url("../../images/pagination-arrow-next.png") center no-repeat;
	background-size: 100%
}

.find-a-dealer-pagination__prev {
	float: left;
	background: url("../../images/pagination-arrow-prev.png") center no-repeat;
	background-size: 100%
}

.find-a-dealer-accordion {
	display: none;
	position: relative;
	margin: 0 -3rem;
	padding: 3rem 0 2.4rem;
	clear: both
}

.find-a-dealer-accordion__items {
	list-style: none;
	margin: 0;
	padding: 0
}

.find-a-dealer-accordion__item {
	position: relative;
	border-bottom: 1px solid #000;
	margin: 0
}

.find-a-dealer-accordion__item:first-child {
	border-top: 1px solid #000
}

.find-a-dealer-accordion__item .icon {
	position: absolute;
	width: 2.2rem;
	height: 2.2rem;
	right: 2.4rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background-image: url("../../images/accordion-expand.png");
	background-repeat: no-repeat;
	background-size: 2.2rem 2.2rem;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none
}

.find-a-dealer-accordion__item-open .icon {
	background-image: url("../../images/accordion-close.png")
}

.find-a-dealer-accordion__item-open .find-a-dealer-event-wrapper {
	display: block
}

.find-a-dealer-accordion__title {
	position: relative;
	display: block;
	padding: 1.5rem 5rem 1.5rem 1.5rem;
	font-size: 2.1rem;
	line-height: 1;
	text-transform: uppercase
}

.find-a-dealer-event-wrapper {
	display: none;
	background-color: #202020
}

.find-a-dealer-event {
	color: #ffffff;
	padding: 3.8rem 0 1.5rem 3rem
}

.find-a-dealer-event__date {
	font-size: 1.2rem
}

.find-a-dealer-event__name {
	max-width: 100%;
	margin: 0.1rem 0 1rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.find-a-dealer-event-card {
	padding: 2.7rem 3rem 5.2rem 3rem;
	color: #fff;
	text-transform: uppercase;
	max-width: 49rem
}

.find-a-dealer-event-card--rental {
	max-width: 62rem
}

.find-a-dealer-event-card__headline {
	line-height: 1.2;
	display: block
}

.find-a-dealer-event-card__subhead {
	line-height: 1.2
}

.find-a-dealer-event-card__image {
	width: 100%;
	margin: 1.5rem 0
}

.find-a-dealer-event-card__copy {
	text-transform: none
}

.find-a-dealer-event-card__copy .col-sm-3:first-child {
	padding: 15px;
	text-align: center
}

@media screen and (min-width: 320px) {
	.find-a-dealer-event-card__copy {
		font-size: 1.4rem;
		line-height: 1.9rem
	}
}

.find-a-dealer-event-card__copy h3 {
	display: block
}

@media screen and (min-width: 320px) {
	.find-a-dealer-event-card__copy h3 {
		font-size: 1.5rem;
		line-height: 2rem
	}
}

.find-a-dealer-event-card__copy p {
	font-size: 1.4rem;
	line-height: 20px
}

.find-a-dealer-event-card__copy .button {
	text-align: left;
	padding: 1.2rem 3.5rem 1.3rem 3rem;
	max-width: 20.5rem;
	margin-top: 1.4rem;
	position: relative;
	background-color: #fff;
	color: #000;
	border: none
}

@media screen and (min-width: 320px) {
	.find-a-dealer-event-card__copy .button {
		font-size: 1.4rem
	}
}

.find-a-dealer-event-card__copy .button:after {
	content: '';
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 1.5rem;
	width: 1.6rem;
	height: 1rem;
	background: url("../../images/cta-arrow-right.png") no-repeat;
	background-size: 100%
}

@media screen and (max-width: 767px) {
	.filter__list--shown .find-a-dealer-results {
		padding: 0
	}

	.filter__list--shown .find-a-dealer-results__again,.filter__list--shown .find-a-dealer-results .find-a-dealer-results__again,.filter__list--shown .find-a-dealer-results .find-a-dealer-results__total {
		display: none
	}

	.find-a-dealer-filters__list .find-a-dealer-program-group {
		padding-left: 0;
		padding-right: 0
	}

	.find-a-dealer {
		margin-top: 2.5rem
	}

	.find-a-dealer--rental {
		margin-top: 0
	}
}

@media screen and (min-width: 480px) {
	.find-a-dealer-results__dealer--distance {
		padding-right: 2.5rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-container:after {
		position: absolute
	}

	.find-a-dealer {
		background-color: #fff
	}

	.find-a-dealer-search {
		padding: 5rem 3rem;
		text-align: center
	}

	.find-a-dealer-search__error {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1.8rem;
		width: 32rem;
		white-space: nowrap
	}

	.find-a-dealer-search__error:before {
		width: 1rem;
		height: 1rem
	}

	.find-a-dealer-search__prediction-link {
		width: 32rem
	}

	.find-a-dealer-search__input-wrapper {
		position: relative;
		width: 32rem;
		margin: 0 auto
	}

	.find-a-dealer-search__input-wrapper .find-a-dealer-search__input {
		padding: 1.5rem
	}

	.find-a-dealer-search__input-wrapper.has-value .find-a-dealer-search__input {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem
	}

	.find-a-dealer-search__clear-btn {
		width: 5rem;
		background-size: 24% auto
	}

	.find-a-dealer-search__search {
		width: auto;
		min-width: 32rem
	}

	.find-a-dealer-search__search .cta-label {
		min-width: 250px
	}

	.find-a-dealer-search__cta {
		width: auto;
		min-width: 32rem
	}

	.find-a-dealer-search__cta .cta-label {
		min-width: 250px
	}

	.find-a-dealer-search__divider {
		margin-left: auto;
		margin-right: auto;
		width: 32rem
	}

	.find-a-dealer-search__location {
		width: auto;
		min-width: 32rem
	}

	.find-a-dealer-search__location .cta-label {
		min-width: 250px
	}

	.find-a-dealer-search__title {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto
	}

	.find-a-dealer-results {
		padding: 5rem 3rem;
		background-size: 100% auto
	}

	.find-a-dealer-results__total {
		text-align: center;
		margin-bottom: 5.9rem
	}

	.find-a-dealer-results__map-wrapper {
		display: inline-block;
		height: 71.2rem;
		vertical-align: top;
		float: right;
		padding: 0;
		position: static
	}

	.find-a-dealer-results__map-wrapper--detail {
		width: 58.33333%;
		height: auto;
		margin-top: 2.8rem
	}

	.find-a-dealer-results__map-wrapper--detail .find-a-dealer-results__map--app {
		display: none
	}

	.find-a-dealer-results__map-wrapper--detail .find-a-dealer-results__map--static {
		display: block;
		height: 40rem
	}

	.find-a-dealer-results__map {
		width: 100%;
		height: 100%
	}

	.find-a-dealer-results__map--static {
		display: none;
		position: relative
	}

	.find-a-dealer-results__map--static:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff url("../../images/ajax-loader.gif") center center no-repeat;
		background-size: 34px 34px;
		border: 1px solid #ccc
	}

	.find-a-dealer-results__map--static img {
		width: 100%
	}

	.find-a-dealer-results__map--static.loading {
		padding-bottom: 56.25%
	}

	.find-a-dealer-results__map--static.loading:before {
		content: ''
	}

	.find-a-dealer-results__dealers {
		height: 60rem;
		overflow: hidden;
		margin: 0;
		padding: 0 0 2rem 0;
		clear: left
	}

	.find-a-dealer-results__dealers .inner {
		vertical-align: top;
		list-style-type: none;
		position: absolute;
		z-index: 1;
		padding: 0 0 2rem 0
	}

	.find-a-dealer-results__dealer {
		padding: 0 3.1rem 0 0;
		margin-top: 2rem
	}

	.find-a-dealer-results__dealer:after {
		right: 2.5rem;
		transition: all .2s ease
	}

	.find-a-dealer-results__dealer:hover:after {
		right: 1.8rem
	}

	.find-a-dealer-results__dealer--distance {
		padding-right: 1rem
	}

	.find-a-dealer-results__dealer--number {
		display: inline-block;
		padding-top: 0
	}
}

@media screen and (min-width: 768px) and (min-width: 320px) {
	.find-a-dealer-results__dealer--number {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) and (min-width: 768px) {
	.find-a-dealer-results__dealer--number {
		font-size: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.find-a-dealer-results__dealer--index {
		display: block;
		margin: 0 auto;
		margin-bottom: 1rem
	}

	.find-a-dealer-results--no-filter .find-a-dealer-results__dealers {
		height: 65rem
	}

	.find-a-dealer-filters__h--line {
		padding-top: 10px;
		border-top: none;
		border-bottom: 1px solid #494949;
		clear: both
	}

	.find-a-dealer-filters__close {
		float: left;
		top: 2rem;
		right: 2.2rem;
		padding-right: 2.4rem;
		font-family: "NotoSans-Regular",sans;
		font-size: 1rem;
		text-align: left
	}

	.find-a-dealer-filters__close:after {
		width: 1.4rem;
		height: 1.4rem
	}

	.find-a-dealer-filters__headline {
		float: left;
		text-align: left;
		font-size: 3rem;
		line-height: 3.8rem
	}

	.find-a-dealer-filters__uncheck {
		float: right;
		margin-top: 1.7rem
	}

	.find-a-dealer-filters__list {
		position: relative;
		padding: 7.2rem 3rem 3rem;
		letter-spacing: 0.5px;
		background-color: #000
	}

	.find-a-dealer-filters__list .find-a-dealer-program-groups {
		margin-left: -15px;
		margin-right: -15px;
		padding-top: 0
	}

	.find-a-dealer-filters__list .find-a-dealer-program-groups:before,.find-a-dealer-filters__list .find-a-dealer-program-groups:after {
		content: " ";
		display: table
	}

	.find-a-dealer-filters__list .find-a-dealer-program-groups:after {
		clear: both
	}

	.find-a-dealer-filters__list .find-a-dealer-program-group {
		padding-top: 1.2rem;
		padding-bottom: 0
	}

	.find-a-dealer-filters__list .find-a-dealer-program-group:before {
		display: none
	}

	.find-a-dealer-filters__list .find-a-dealer-program-codes {
		margin: 4rem 0 0
	}

	.find-a-dealer-filters__list .find-a-dealer-program-code {
		margin: 3rem 0
	}

	.find-a-dealer-filters__list .find-a-dealer-program-code:last-child {
		margin-bottom: 0
	}

	.find-a-dealer-filters__toggle {
		width: 41.66667%;
		float: left;
		margin: 0;
		background-color: #000000;
		color: #ffffff
	}

	.find-a-dealer-filters__toggle:after {
		width: 1.5rem;
		height: 0.9rem;
		background: url("../../images/dropdown-arrow-white.png") no-repeat;
		background-size: 100%
	}

	.find-a-dealer-filters__toggle:focus,.find-a-dealer-filters__toggle:active,.find-a-dealer-filters__toggle:hover {
		background: #000000;
		color: #ff6600
	}

	.find-a-dealer-filters__toggle:focus:after,.find-a-dealer-filters__toggle:active:after,.find-a-dealer-filters__toggle:hover:after {
		background-image: url("../../images/dropdown-arrow-orange.png")
	}

	.find-a-dealer-detail__name {
		margin-top: .8rem
	}

	.find-a-dealer-detail__distance {
		margin-top: 2rem;
		font-size: 2rem;
		font-family: "NotoSans-Regular",sans
	}

	.find-a-dealer-detail__get-directions {
		max-width: 30rem
	}

	.find-a-dealer-detail__info-title {
		border-top: 0.2rem solid #000000;
		padding-top: 1.2rem;
		margin-top: 3.1rem;
		margin-bottom: 0.5rem;
		font-size: 2.6rem;
		line-height: 1.6
	}

	.find-a-dealer-detail__info-title:first-child {
		border: none
	}

	.find-a-dealer-detail__info--address {
		font-family: "NotoSans-Bold",sans
	}

	.find-a-dealer-detail__info--phone {
		margin-top: .2rem
	}

	.find-a-dealer-detail__info-wrapper {
		padding-top: 1.8em
	}

	.find-a-dealer-detail__info-wrapper .find-a-dealer-detail__info {
		margin-bottom: 1.2rem
	}

	.find-a-dealer-detail__info-wrapper .find-a-dealer-detail__info--deader-hours {
		line-height: 1.4
	}

	.find-a-dealer-detail__info-wrapper .find-a-dealer-detail__info--has-divider {
		margin-top: 3.3rem;
		margin-bottom: 0.2rem;
		padding-top: 0.5rem
	}

	.find-a-dealer-detail__linkout {
		margin-top: 1rem
	}

	.find-a-dealer-detail__linkout--directions {
		margin-top: 0.3rem
	}

	.find-a-dealer-detail__hog-chap {
		border-top: 0.2rem solid #000000;
		padding-top: 1.2rem;
		margin-top: 4rem
	}

	.find-a-dealer-detail__hog-chap .find-a-dealer-detail__info-title {
		margin-top: 0;
		padding-top: 0
	}

	.find-a-dealer-detail__hog-chap-copy {
		margin-top: -0.8rem
	}

	.find-a-dealer-detail__left-col {
		margin-bottom: 2.8rem
	}

	.find-a-dealer-detail__left-col p {
		margin-bottom: 0
	}

	.find-a-dealer-detail__test-ride {
		margin-top: 2.4rem;
		padding-top: 1.1rem;
		padding-bottom: 1.2rem
	}

	.find-a-dealer-detail__test-ride-btn {
		margin-top: 2.4rem;
		padding-top: 1.30rem;
		padding-bottom: 1.30rem;
		width: auto
	}

	.find-a-dealer-detail__test-ride-btn .cta-label {
		min-width: 229px;
		font-size: 1.2rem
	}

	.find-a-dealer-accordion {
		float: right;
		margin: 0.8rem 0 0 0;
		clear: none
	}

	.find-a-dealer-accordion__title {
		padding: 2rem 5rem 2rem 3.8rem;
		font-size: 2.6rem
	}

	.find-a-dealer-accordion .find-a-dealer-event {
		padding: 2.6rem 1.2rem 2.5rem 7.4rem
	}

	.find-a-dealer-accordion:before {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff url("../../images/ajax-loader.gif") center center no-repeat;
		background-size: 34px 34px;
		border: 1px solid #ccc
	}

	.find-a-dealer-accordion.loading {
		position: relative;
		min-height: 20rem;
		background-color: #ccc
	}

	.find-a-dealer-accordion.loading:before {
		content: ''
	}

	.find-a-dealer-event-card__logo {
		padding: 0
	}
}

@media screen and (min-width: 992px) {
	.find-a-dealer-filters__toggle {
		width: 33.33333%
	}

	.find-a-dealer-filters__list {
		padding: 8.6rem 10rem
	}

	.find-a-dealer-results__dealer--distance {
		padding-right: 1.3rem
	}

	.find-a-dealer-results__map-wrapper {
		position: relative
	}
}

@media screen and (min-width: 1280px) {
	.find-a-dealer-search,.find-a-dealer-results {
		padding: 5rem 8.6rem
	}
}

@media screen and (min-width: 1440px) {
	.find-a-dealer-filters__toggle {
		width: 25%
	}
}

.rtl .find-a-dealer-search__noresults {
	text-align: right
}

.rtl .find-a-dealer-detail-modal__flex-col {
	direction: rtl
}

.rtl .find-a-dealer-detail .cta-icon__left-to-top:hover .cta-icon {
	-webkit-transform: translate(-1rem, 0) rotate(270deg);
	-moz-transform: translate(-1rem, 0) rotate(270deg);
	-ms-transform: translate(-1rem, 0) rotate(270deg);
	-o-transform: translate(-1rem, 0) rotate(270deg);
	transform: translate(-1rem, 0) rotate(270deg)
}

.rtl .find-a-dealer-results__again {
	padding-left: 1.5rem !important
}

.rtl .find-a-dealer-search__error {
	padding-right: 1.5rem;
	text-align: right
}

.rtl .find-a-dealer-search__error.cta.cta-icon__error::after {
	right: 0
}

.rtl .find-a-dealer-results__dealer::after {
	left: 8rem;
	right: auto;
	transform: rotate(180deg)
}

.rtl .find-a-dealer-search__input::placeholder {
	text-align: right
}

.rtl .find-a-dealer-search__input:-ms-input-placeholder {
	text-align: right
}

.rtl .find-a-dealer-search__input::-webkit-input-placeholder {
	text-align: right
}

@media screen and (min-width: 768px) {
	.rtl .find-a-dealer-search__prediction,.rtl .find-a-dealer-search__error {
		width: 32rem;
		margin: auto
	}

	.rtl .find-a-dealer-results__dealer::after {
		left: 5.5rem
	}

	.rtl .find-a-dealer-results__dealer:hover:after {
		left: 5rem
	}
}

.rtl .find-a-dealer-detail__get-directions {
	text-align: right
}

.rtl .find-a-dealer-detail__get-directions:after {
	right: auto;
	transform: rotate(270deg);
	margin-top: -5px;
	left: 25px
}

.sv-se .hero-marquee__title {
	line-height: 7.7rem
}

.hero-marquee {
	width: 100%;
	position: relative;
	color: white;
	background: black
}

.hero-marquee__wrapper {
	height: 0;
	padding-bottom: 162%;
	padding-bottom: 162vmin;
	background-position: center;
	background-size: auto 100%
}

.hero-marquee__cinemagraph-bg {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0
}

.hero-marquee__cinemagraph-bg .vjs-tech {
	min-width: 100%;
	min-height: 100%;
	position: absolute;
	top: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%)
}

.hero-marquee__cinemagraph-bg-video {
	background-color: transparent;
	visibility: hidden
}

.hero-marquee__cinemagraph-bg .vjs-control-bar {
	display: none
}

.hero-marquee__cinemagraph-backup {
	min-width: 100%;
	min-height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	display: none
}

.hero-marquee__title {
	position: relative;
	letter-spacing: 6px
}

@media screen and (min-width: 320px) {
	.hero-marquee__title {
		font-size: 4.2rem;
		line-height: 5rem
	}
}

@media screen and (min-width: 768px) {
	.hero-marquee__title {
		font-size: 5.5rem;
		line-height: 5.7rem
	}
}

.hero-marquee__overlay {
	position: absolute;
	box-sizing: border-box;
	top: 0;
	left: 0;
	padding-top: 6.53%;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.7);
	text-align: center;
	text-transform: uppercase
}

.hero-marquee__overlay .hero-marquee__play-button {
	position: relative;
	display: block;
	top: 0px;
	transform: translateX(-50%)
}

.hero-marquee__overlay--video-overlay {
	background: rgba(0,0,0,0.3)
}

.hero-marquee__overlay--no-video .hero-marquee__play-button {
	display: none
}

.hero-marquee__video {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	min-height: 0
}

.hero-marquee__sub-title {
	margin: 0 auto;
	max-width: 466px;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	letter-spacing: 4px
}

@media screen and (min-width: 320px) {
	.hero-marquee__sub-title {
		font-size: 2.3rem;
		line-height: 2.8rem
	}
}

@media screen and (min-width: 768px) {
	.hero-marquee__sub-title {
		font-size: 2.4rem;
		line-height: 3.2rem
	}
}

.hero-marquee__sub-title--center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
}

.hero-marquee__sub-title--bottom {
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translate(-50%, -50%)
}

.hero-marquee__cta.cta-icon__explore.cta {
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%)
}

.hero-marquee__cta--center {
	top: 50%;
	margin: 0 0 3rem 0
}

.hero-marquee__cta--bottom {
	bottom: 0
}

.hero-marquee__star-line {
	line-height: 0;
	padding: 4.4%
}

.hero-marquee__star-line--bottom {
	padding-top: 10px;
	padding-bottom: 45px
}

@media only screen and (min-width: 768px) {
	.hero-marquee {
		padding-bottom: 15px
	}

	.hero-marquee__wrapper {
		height: 0;
		padding-bottom: 550px;
		background-size: cover
	}
}

@media only screen and (min-width: 768px) and (min-width: 992px) {
	.hero-marquee__wrapper {
		padding-bottom: 676px
	}
}

@media only screen and (min-width: 768px) {
	.hero-marquee__thumbnail {
		width: 100%
	}

	.hero-marquee__overlay {
		padding-top: 56px
	}

	.hero-marquee__overlay::before {
		top: 55px;
		width: 65px;
		height: 1px
	}

	.hero-marquee__overlay .hero-marquee__play-button {
		padding-bottom: 0;
		width: 64px;
		height: 64px
	}

	.hero-marquee__cta {
		height: 47px;
		font-size: 1.1rem
	}

	.hero-marquee__cta--bottom {
		bottom: -17px
	}

	.hero-marquee__star-line {
		padding: 25px 0
	}

	.hero-marquee__star-line--bottom {
		padding-top: 15px;
		padding-bottom: 45px
	}

	.hero-marquee__title {
		letter-spacing: 4px;
		word-spacing: 3px
	}

	.hero-marquee__sub-title {
		padding-top: 11px;
		letter-spacing: 3px
	}
}

.video--mobile {
	height: 100%
}

.th-th .static-billboard__details {
	max-width: 51%;
	min-width: 46%
}

.th-th .static-billboard__image-wrapper::before {
	width: 30%
}

.static-billboard {
	color: #fff;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	padding: 3rem 0
}

.static-billboard__details {
	margin: 0 1.5rem
}

.static-billboard__details--name {
	display: block;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.static-billboard__details--name {
		font-size: 2rem;
		line-height: 3.2rem
	}
}

@media screen and (min-width: 768px) {
	.static-billboard__details--name {
		font-size: 2rem;
		line-height: 3.2rem
	}
}

@media screen and (min-width: 1440px) {
	.static-billboard__details--name {
		font-size: 2.3rem;
		line-height: 4.2rem
	}
}

.static-billboard__details--headline {
	letter-spacing: 0.26rem
}

@media screen and (min-width: 320px) {
	.static-billboard__details--headline {
		font-size: 2.8rem;
		line-height: 3.5rem
	}
}

@media screen and (min-width: 768px) {
	.static-billboard__details--headline {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 992px) {
	.static-billboard__details--headline {
		font-size: 3.5rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 1440px) {
	.static-billboard__details--headline {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.static-billboard__details--price {
	text-transform: none;
	letter-spacing: 0.1rem;
	margin-top: 1.7rem
}

@media screen and (min-width: 320px) {
	.static-billboard__details--price {
		font-size: 1.3rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.static-billboard__details--price {
		font-size: 1.5rem;
		line-height: 2.6rem
	}
}

.static-billboard__details .cta-btn-secondary .cta-icon {
	top: 25%;
	height: 25px
}

.static-billboard__image {
	width: calc(100% - 1.5rem);
	margin-left: 1.5rem
}

.static-billboard--right-to-left .static-billboard__image {
	margin-left: 0;
	margin-right: 1.5rem
}

.static-billboard__image+.static-billboard__details {
	margin-top: 2.4rem
}

.static-billboard__details+.static-billboard__image-wrapper {
	margin-top: 3.2rem;
	display: inline-block
}

.static-billboard__explore {
	position: relative;
	text-align: center;
	letter-spacing: 0.1rem;
	margin: 1.5rem 0;
	padding-bottom: 2.5rem;
	cursor: pointer
}

@media screen and (min-width: 320px) {
	.static-billboard__explore {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

.static-billboard__explore a {
	display: inline-block;
	width: 100% !important
}

.static-billboard__button-mobile {
	margin: 2.4rem 0 0;
	padding: 1.50rem 5.6rem 1.50rem 1.5rem
}

.static-billboard__no-bottom-space .static-billboard__explore {
	margin-bottom: 0
}

@media screen and (min-width: 768px) {
	.static-billboard {
		padding: 3rem
	}

	.static-billboard__details {
		position: absolute;
		width: 38%;
		margin: 0;
		padding: 0 0 0 6.25%;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		z-index: 2
	}

	.static-billboard__details--name {
		letter-spacing: 0.26rem
	}

	.static-billboard__details--headline {
		letter-spacing: 0.13rem
	}

	.static-billboard__details--price {
		margin-bottom: 0;
		letter-spacing: 0.05rem
	}
}

@media screen and (min-width: 768px) and (min-width: 768px) {
	.static-billboard__details--amount {
		font-size: 1.9rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.static-billboard__details .cta-btn {
		margin-top: 4.3rem;
		padding: 1.6rem 5.6rem 1.6rem 1.5rem
	}

	.static-billboard__image {
		width: auto;
		float: right
	}

	.static-billboard__details+.static-billboard__image-wrapper {
		display: block
	}

	.static-billboard__image,.static-billboard--right-to-left .static-billboard__image {
		margin: 0
	}

	.static-billboard__details+.static-billboard__image-wrapper,.static-billboard__image+.static-billboard__details {
		margin-top: 0
	}

	.static-billboard__image-wrapper {
		position: relative;
		float: right;
		width: 71.4%;
		padding: 0
	}

	.static-billboard__image-wrapper:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: -moz-linear-gradient(left, rgba(0,0,0,0.4) 0%, transparent 20%);
		background: -webkit-linear-gradient(left, rgba(0,0,0,0.4) 0%, transparent 20%);
		background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 20%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66000000', endColorstr='#00000000',GradientType=1 );
		z-index: 1
	}

	.static-billboard--right-to-left .static-billboard__details {
		width: 35.6%;
		right: 0;
		padding: 0 5% 0 0
	}

	.static-billboard--right-to-left .static-billboard__image-wrapper {
		float: left
	}

	.static-billboard--right-to-left .static-billboard__image-wrapper::before {
		right: 0;
		left: auto;
		transform: rotateY(180deg)
	}

	.ipad .static-billboard .static-billboard__button-label.cta-label {
		min-width: 19rem
	}
}

.rtl .static-billboard__details--headline {
	float: right;
	clear: both
}

.rtl .static-billboard__details--price {
	clear: both
}

.rtl .static-billboard .cta-btn {
	clear: both;
	padding: 1.35rem 1.5rem 1.35rem 5.6rem
}

@media screen and (min-width: 768px) {
	.rtl .static-billboard .cta-btn {
		float: right;
		padding: 1.6rem 1.5rem 1.6rem 5.6rem
	}
}

@media screen and (max-width: 768px) {
	.static-billboard__explore .cta.cta-icon__explore-down .cta-icon {
		left: 50% !important
	}
}

@media screen and (min-width: 768px) and (min-width: 320px) {
	.th-th .storyboard__item-subtitle,.th-th .storyboard__item-desc {
		font-size: 3.2vmin;
		line-height: 1.6
	}
}

@media screen and (min-width: 768px) and (min-width: 768px) {
	.th-th .storyboard__item-subtitle,.th-th .storyboard__item-desc {
		font-size: 1.8rem;
		line-height: 2.3rem
	}
}

.storyboard {
	position: relative;
	color: white;
	overflow-x: hidden;
	cursor: e-resize
}

.storyboard p,.storyboard span,.storyboard img,.storyboard h1,.storyboard h2,.storyboard h3,.storyboard h4,.storyboard label,.storyboard a,.storyboard div {
	-webkit-user-drag: none;
	-moz-user-drag: none;
	-ms-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none
}

.storyboard__play-button:hover {
	-webkit-transform: scale(1.2) translate(-40%, -40%) !important;
	-moz-transform: scale(1.2) translate(-40%, -40%) !important;
	-ms-transform: scale(1.2) translate(-40%, -40%) !important;
	-o-transform: scale(1.2) translate(-40%, -40%) !important;
	transform: scale(1.2) translate(-40%, -40%) !important
}

.storyboard.global--overlay-active {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1000
}

@media screen and (min-width: 768px) {
	.storyboard.global--overlay-active {
		position: static
	}
}

.storyboard__img {
	white-space: normal
}

.storyboard__cinemagraph {
	width: 454px;
	height: 371px;
	display: table
}

.storyboard__cinemagraph-wrapper {
	height: 100%;
	width: 100%;
	display: table-cell;
	vertical-align: middle
}

.storyboard__cinemagraph-wrapper>div {
	width: 100%;
	height: 100%
}

.storyboard__cinemagraph-wrapper video {
	width: 100% !important;
	height: auto !important
}

.storyboard__cinemagraph--second {
	width: 279px;
	height: 201px
}

.storyboard__wrapper {
	display: inline-block;
	white-space: nowrap;
	overflow: hidden
}

@media screen and (max-width: 768px) {
	.storyboard__wrapper.global--overlay-active {
		width: 100%;
		transform: translate(0, 0) !important
	}
}

.storyboard__wrapper .hero-marquee__cinemagraph-backup {
	width: 100%;
	min-height: auto
}

.storyboard__arrow {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	z-index: 1;
	cursor: pointer;
	height: 80px;
	width: 30px;
	visibility: hidden;
	-webkit-transition: opacity 400ms linear;
	-moz-transition: opacity 400ms linear;
	-ms-transition: opacity 400ms linear;
	-o-transition: opacity 400ms linear;
	transition: opacity 400ms linear
}

@media screen and (min-width: 768px) {
	.storyboard__arrow {
		visibility: visible;
		opacity: 1
	}
}

.storyboard__arrow--hidden {
	visibility: hidden;
	opacity: 0
}

.storyboard__arrow--prev {
	background: url(../../images/slide-arrow-left-white.png) no-repeat;
	background-size: 100%;
	left: 9.1rem
}

.storyboard__arrow--next {
	background: url(../../images/slide-arrow-right-white.png) no-repeat;
	background-size: 100%;
	right: 9.1rem
}

.storyboard__share {
	position: relative;
	letter-spacing: 0.1rem;
	padding-right: 3.5rem;
	cursor: pointer;
	text-transform: uppercase
}

.storyboard__share::after {
	content: '';
	position: absolute;
	margin-left: 10px;
	background: url(../../images/story-board/share-icon.png) no-repeat;
	background-size: 100%;
	width: 2.5rem;
	height: 2.9rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.storyboard__list {
	background-size: cover
}

.storyboard__item {
	padding-bottom: 0px;
	min-height: calc(100vh - 65px);
	height: 100%;
	position: relative;
	display: inline-block;
	vertical-align: top
}

.storyboard__item--hidden {
	display: none
}

.storyboard__text {
	white-space: normal
}

.storyboard .button--arrow {
	min-width: 240px;
	z-index: 2
}

.storyboard__item-subtitle,.storyboard__item-title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block
}

.storyboard__item-title {
	position: relative;
	letter-spacing: 0.1rem;
	z-index: 2
}

@media screen and (min-width: 320px) {
	.storyboard__item-title {
		font-size: 6vmin;
		line-height: 1.1
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item-title {
		font-size: 4.2rem;
		line-height: 1.1
	}
}

.storyboard__item-title--no-wrap {
	white-space: nowrap
}

.storyboard__item-subtitle {
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.storyboard__item-subtitle {
		font-size: 3.6vmin;
		line-height: 1.1
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item-subtitle {
		font-size: 2.4rem;
		line-height: 1.5
	}
}

.storyboard__item-subtitle--large {
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.storyboard__item-subtitle--large {
		font-size: 1.6rem;
		line-height: 3rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item-subtitle--large {
		font-size: 2.2rem;
		line-height: 4rem
	}
}

.storyboard__item-desc {
	padding-top: 14px !important;
	color: #fff;
	letter-spacing: 0.095rem;
	padding-bottom: 14px
}

@media screen and (min-width: 320px) {
	.storyboard__item-desc {
		font-size: 3.2vmin;
		line-height: 1.6
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item-desc {
		font-size: 1.4rem;
		line-height: 2.3rem
	}
}

@media screen and (min-width: 320px) {
	.storyboard__item-desc--large {
		font-size: 1.5rem;
		line-height: 2.3rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item-desc--large {
		font-size: 1.6rem;
		line-height: 2.3rem
	}
}

.storyboard__explore-wrapper {
	width: 100%;
	text-align: right
}

@media screen and (max-width: 320px) {
	.storyboard__explore-wrapper {
		width: 80%
	}
}

.storyboard__explore {
	position: relative;
	width: 87%;
	cursor: pointer;
	margin-top: 4rem;
	padding-right: 2.5rem;
	text-align: right;
	text-transform: uppercase
}

.storyboard__explore .cta-icon__explore {
	font-size: 1.8rem
}

.storyboard__explore--down {
	display: block;
	padding-bottom: 3.5rem;
	margin-top: 0;
	position: relative;
	right: 7.5rem;
	margin-top: -7.5%;
	width: 62px
}

.storyboard__explore--down:after {
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%) rotate(90deg);
	-moz-transform: translateX(-50%) rotate(90deg);
	-ms-transform: translateX(-50%) rotate(90deg);
	-o-transform: translateX(-50%) rotate(90deg);
	transform: translateX(-50%) rotate(90deg)
}

.storyboard__item--share {
	padding-top: 38px;
	width: 380px;
	margin-left: 0px;
	margin-right: 2rem
}

@media screen and (min-width: 768px) {
	.storyboard__item--share {
		position: relative;
		margin-right: 0rem
	}
}

.storyboard__item--share__img {
	position: relative;
	max-width: 220px;
	top: 160px
}

.storyboard__icon-star {
	margin-top: 35px;
	margin-bottom: 45px;
	width: 17px;
	height: 17px
}

.storyboard__video {
	position: relative;
	white-space: normal
}

.storyboard__share-overlay {
	display: none;
	overflow: scroll;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #fff;
	z-index: 10001
}

@media screen and (min-width: 768px) {
	.storyboard__share-overlay {
		position: absolute;
		right: 0;
		background-image: url("../../images/360-overlay/share-bg.jpg");
		bottom: auto;
		background-repeat: no-repeat;
		background-size: cover;
		top: 9rem;
		width: 42.5rem;
		overflow: hidden
	}

	.storyboard__share-overlay .storyboard__overlay-top-bar {
		background-color: transparent
	}

	.storyboard__share-overlay .storyboard__overlay-top-bar .storyboard__overlay-close {
		text-indent: -9999px
	}

	.storyboard__share-overlay .storyboard__overlay-top-bar .storyboard__overlay-close:after {
		background: url("../../images/close-btn-black.png") no-repeat;
		background-size: 100%
	}
}

.storyboard__share-overlay-body {
	padding: 15rem 5rem 5rem 5rem;
	color: #000;
	white-space: normal
}

@media screen and (min-width: 768px) {
	.storyboard__share-overlay-body {
		padding-top: 0;
		padding-bottom: 6rem
	}
}

@media screen and (min-width: 320px) {
	.storyboard__share-overlay-copy {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.storyboard__share-overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.storyboard__share-overlay-copy--small {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.storyboard__share-overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.storyboard__share-overlay-heading {
		font-size: 2.4rem;
		line-height: 2.8rem
	}
}

.storyboard__share-overlay-share-ctas {
	margin: 2.8rem 0
}

.storyboard__share-overlay-share-cta {
	margin-right: 3.2rem
}

.storyboard__share-overlay-share-cta:hover {
	text-decoration: none
}

.storyboard__share-overlay-share-cta--facebook {
	width: 1.4rem
}

.storyboard__share-overlay-share-cta--twitter {
	width: 3.7rem
}

.storyboard__share-overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.storyboard__share-overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.storyboard__share-overlay-textbox-value {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.storyboard__overlay-top-bar {
	background-color: #000;
	overflow: hidden;
	min-height: 6rem;
	position: fixed;
	width: 100%
}

@media screen and (min-width: 768px) {
	.storyboard__overlay-top-bar {
		position: relative
	}
}

.storyboard__overlay-title {
	font-size: 1.6rem;
	line-height: 1.6rem;
	color: #ffffff;
	padding-top: 2.5rem;
	margin-left: 2rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem
}

.storyboard__overlay-close {
	font-size: 0.9rem;
	text-transform: uppercase;
	float: right;
	margin-top: 1.5rem;
	margin-right: 2rem;
	padding: 1.2rem 3.2rem 1.2rem 1rem;
	position: relative;
	letter-spacing: 0.05rem
}

.storyboard__overlay-close:after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	background: url("../../images/close-btn.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.storyboard__item {
		margin-left: 0px;
		margin-right: 0px;
		min-height: 800px
	}

	.storyboard__text {
		padding-bottom: 43px
	}

	.storyboard__subtitle {
		margin-top: 20px
	}

	.storyboard__item--share__img {
		top: 140px;
		max-width: 380px
	}

	.storyboard .button--arrow {
		min-width: 324px
	}
}

.storyboard__cinemagraph-wrapper>div:first-child {
	width: 100% !important;
	height: 100% !important;
	top: 3% !important;
	position: absolute !important;
	z-index: 800 !important
}

.storyboard__cinemagraph-wrapper>div:nth-child(5) {
	display: none !important
}

.storyboard__cinemagraph-wrapper>div {
	background: transparent;
	outline: none
}

@media screen and (max-width: 480px) {
	html {
		-webkit-text-size-adjust: none
	}
}

@media only screen and (max-width: 991px) {
	.landscape .storyboard__explore-wrapper .cta-icon__explore label {
		zoom: 1 !important
	}
}

.rtl .storyboard__list {
	direction: rtl
}

.rtl .storyboard__item {
	direction: ltr
}

.storyboard__item--style-one {
	padding-top: 20px;
	width: 360px;
	margin-right: 71px
}

.storyboard__item--style-one__text {
	position: relative;
	padding-bottom: 0px;
	width: 86.65%;
	z-index: 2
}

.storyboard__item--style-one__text .storyboard__item-desc {
	margin-bottom: 0px !important
}

.storyboard__item--style-one__img {
	position: relative;
	float: right;
	display: block;
	margin-top: 20px;
	max-width: 704px;
	z-index: 2
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-one {
		padding-top: 75px;
		width: 704px
	}

	.storyboard__item--style-one__text {
		width: 87.25%;
		padding-right: 20px
	}

	.storyboard__item--style-one .storyboard__item-desc {
		padding-top: 21px
	}
}

.storyboard__item--style-two {
	padding-top: 20px;
	width: 654px;
	margin-left: 71px
}

.storyboard__item--style-two__text {
	padding-top: 38px;
	width: 40.06%
}

.storyboard__item--style-two__text--large {
	margin-left: 40px;
	width: 294px
}

.storyboard__item--style-two__img {
	position: relative
}

.storyboard__item--style-two__img--first {
	margin-left: 118px;
	max-width: 523px;
	z-index: 2
}

.storyboard__item--style-two__img--second {
	max-width: 336px;
	margin-top: -45px
}

.storyboard__item--style-two__img--no-margin {
	margin: 0
}

.storyboard__item--style-two__img--bottom {
	position: absolute;
	bottom: 0;
	right: 0
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-two {
		margin-right: 0;
		padding-top: 39px;
		width: 910px
	}

	.storyboard__item--style-two__text {
		padding-bottom: 0;
		width: 442px
	}

	.storyboard__item--style-two__text--large {
		margin-left: 40px;
		width: 456px
	}

	.storyboard__item--style-two__text--pull-top {
		margin-top: -36px
	}

	.storyboard__item--style-two__img--first {
		max-width: 675px
	}

	.storyboard__item--style-two__img--second {
		max-width: 440px
	}
}

.storyboard__item--style-three {
	margin-left: 45px;
	padding-top: 37.5px;
	width: 710px
}

.storyboard__item--style-three__img--first {
	position: relative;
	z-index: 1;
	max-width: 47.32%
}

.storyboard__item--style-three__img--second {
	position: relative;
	z-index: 2;
	margin-top: -6.33%;
	max-width: 73.8%
}

.storyboard__item--style-three__img--third {
	margin-top: 25px;
	max-width: 232px
}

.storyboard__item--style-three__text {
	width: 47.25%
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-three {
		margin-left: -45px;
		padding-top: 68px;
		margin-right: 0px !important;
		width: 880px
	}

	.storyboard__item--style-three__img {
		max-width: 400px
	}

	.storyboard__item--style-three__img--first {
		position: relative;
		z-index: 2
	}

	.storyboard__item--style-three__img--second {
		margin-top: -45px;
		max-width: 668px
	}

	.storyboard__item--style-three__img--third {
		margin-top: 48px;
		max-width: 290px
	}

	.storyboard__item--style-three__text {
		width: 48.94%
	}
}

.storyboard__item--style-four {
	padding-top: 16px;
	padding-bottom: 22px;
	width: 769px
}

.storyboard__item--style-four__img--first {
	max-width: 366px
}

.storyboard__item--style-four__img--second {
	display: none;
	max-width: 222px
}

.storyboard__item--style-four__img--third {
	position: absolute;
	bottom: 62px;
	left: 84px;
	max-width: 291px
}

.storyboard__item--style-four__img--fourth {
	display: none;
	max-width: 360px
}

.storyboard__item--style-four__img--fifth {
	position: absolute;
	bottom: 85px;
	right: 0;
	max-width: 368px
}

.storyboard__item--style-four__text {
	margin-top: 42px;
	margin-left: 30px
}

.storyboard__item--style-four__text--second {
	position: absolute;
	top: 79px;
	right: 0;
	width: 300px
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-four {
		padding-top: 52px;
		width: 1013px
	}

	.storyboard__item--style-four__img--first {
		max-width: 432px
	}

	.storyboard__item--style-four__img--second {
		display: block;
		position: absolute;
		top: 126px;
		left: 270px;
		max-width: 222px
	}

	.storyboard__item--style-four__img--third {
		position: absolute;
		bottom: 44px;
		left: 110px;
		max-width: 378px
	}

	.storyboard__item--style-four__img--fourth {
		display: block;
		position: absolute;
		top: 157px;
		right: 33px;
		max-width: 442px
	}

	.storyboard__item--style-four__img--fifth {
		position: absolute;
		bottom: 74px;
		right: 16px;
		max-width: 473px
	}

	.storyboard__item--style-four__text {
		margin: 0
	}

	.storyboard__item--style-four__text--first {
		position: absolute;
		top: 438px;
		left: 25px
	}

	.storyboard__item--style-four__text--second {
		position: absolute;
		top: 63px;
		right: 0;
		width: 423px
	}
}

.storyboard__item__middle-text {
	vertical-align: middle;
	display: table-cell
}

.storyboard__item--style-text {
	padding-bottom: 0
}

.storyboard__item--style-text__text {
	display: inline-block;
	vertical-align: middle
}

.storyboard__item--style-text__text-wrapper {
	position: absolute;
	left: 00;
	top: 0;
	right: 0;
	bottom: 0;
	font-size: 0;
	white-space: normal
}

.storyboard__item--style-text__text-wrapper:before {
	content: "";
	display: inline-block;
	height: 100%;
	vertical-align: middle
}

.storyboard__item--style-text--large-text {
	margin-left: 86px;
	margin-right: 86px;
	width: 398px
}

.storyboard__item--style-text--small-text {
	margin-left: 104px;
	margin-right: 104px;
	width: 362px
}

.storyboard__item--style-text__subtitle {
	text-transform: uppercase;
	letter-spacing: 0.2rem
}

@media screen and (min-width: 320px) {
	.storyboard__item--style-text__subtitle {
		font-size: 1.4rem;
		line-height: 3rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-text__subtitle {
		font-size: 2rem;
		line-height: 4rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item--style-text--large-text {
		margin-left: 102px;
		margin-right: 102px;
		width: 518px
	}

	.storyboard__item--style-text--small-text {
		margin-left: 177px;
		margin-right: 177px;
		width: 426px
	}
}

@media screen and (max-width: 476px) {
	.storyboard--softail__item--style-two__text {
		margin-top: 35px
	}
}

.storyboard__item--banner {
	padding-top: 148px;
	width: 136px;
	margin-left: 0;
	margin-right: 0
}

.storyboard__item--banner__img {
	max-width: 100%
}

.storyboard__item--banner__label {
	display: block;
	position: absolute;
	top: 297px;
	width: 87px;
	color: #fff;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	white-space: normal
}

.storyboard__item--banner__label:before {
	content: "";
	display: block;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: -19px;
	width: 0px;
	height: 0px;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-right: 10px solid #f60
}

.storyboard__item--banner__label--left {
	right: 0
}

.storyboard__item--banner__label--right {
	left: 22px
}

.storyboard__item--banner__label--right:before {
	left: auto;
	right: -19px;
	transform: translateY(-50%) rotate(180deg)
}

@media screen and (min-width: 320px) {
	.storyboard__item--banner__label {
		font-size: 1.8rem;
		line-height: 3rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item--banner__label {
		font-size: 2.3rem;
		line-height: 4rem
	}
}

@media screen and (min-width: 320px) {
	.storyboard__item--banner__label--large {
		font-size: 3.1rem;
		line-height: 3rem
	}
}

@media screen and (min-width: 768px) {
	.storyboard__item--banner__label--large {
		font-size: 4rem;
		line-height: 4rem
	}
}

.storyboard__item--banner__label:hover {
	color: #f60;
	text-decoration: none
}

@media screen and (min-width: 768px) {
	.storyboard__item--banner {
		padding-top: 123px;
		width: 175px
	}

	.storyboard__item--banner__label {
		width: 107px
	}
}

.storyboard--landing-page--family .storyboard__item-desc {
	line-height: 1.75
}

.storyboard--landing-page--softtail .storyboard__item-desc {
	line-height: 1.75
}

.storyboard--landing-page--softtail .storyboard__share-overlay {
	right: 0;
	left: auto
}

.storyboard__item--style-one {
	margin-left: 0px
}

.storyboard__item--style-one .storyboard__item__gradient {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 114%;
	height: 100%;
	background: linear-gradient(to right, #000 65%, transparent);
	z-index: 1
}

@media screen and (max-width: 768px) {
	.storyboard--landing-page--family .storyboard__item-title {
		font-size: 7.3vw;
		font-size: 7.3vmin;
		line-height: 1.2
	}

	.storyboard--landing-page--family .storyboard__item--share {
		width: 55vw;
		width: 55vmin;
		margin-left: 65px
	}

	.storyboard--landing-page--family__item--style-one {
		margin-left: 0;
		width: 87vw;
		width: 87vmin;
		margin-right: 45px
	}

	.storyboard--landing-page--family__item--style-one .storyboard__item__gradient {
		width: 300%
	}

	.storyboard--landing-page--family__item--style-one .storyboard__explore {
		z-index: 2;
		margin-top: 9%;
		margin-right: -9%
	}

	.storyboard--landing-page--family__item--style-one__text {
		padding-right: 0px;
		width: 100%;
		padding-top: 2%;
		padding-left: 8.5%
	}

	.storyboard--landing-page--family__item--style-one__img {
		margin-top: 2%;
		max-width: 100%
	}

	.storyboard--landing-page--family__item--style-two {
		margin-left: 45px;
		margin-top: 0px;
		padding-top: 0px;
		width: 183vw;
		width: 183vmin;
		margin-right: 0px
	}

	.storyboard--landing-page--family__item--style-two__img--first {
		max-width: 68%;
		margin-left: 4.5%;
		position: relative;
		z-index: 3
	}

	.storyboard--landing-page--family__item--style-two__img--second {
		max-width: 50%;
		margin-top: -3%;
		position: relative;
		z-index: 2
	}

	.storyboard--landing-page--family__item--style-two__text {
		padding-top: 0px;
		margin-top: -2.5%;
		position: relative;
		z-index: 4;
		width: 45.06% !important
	}

	.storyboard--landing-page--family__item--style-three {
		width: 178vw;
		width: 178vmin;
		margin-left: 0px;
		padding-top: 0px
	}

	.storyboard--landing-page--family__item--style-three__img--first {
		max-width: 50%
	}

	.storyboard--landing-page--family__item--style-three__img--second {
		max-width: 74%
	}

	.storyboard--landing-page--family__item--style-three__text {
		margin-top: 5%;
		width: 51%;
		margin-right: -7%
	}

	.storyboard--landing-page--softtail .storyboard__share-overlay {
		right: 0;
		left: auto
	}
}

.storyboard--landing-page--softtail .storyboard__item-desc {
	line-height: 1.75
}

.storyboard--landing-page--softtail__item--style-one {
	width: 790px
}

.storyboard--landing-page--softtail__item--style-two {
	margin-left: 0px
}

.storyboard--landing-page--softtail__item--style-two__img--first {
	margin-left: 75px
}

.storyboard--landing-page--softtail__item--style-two__text {
	margin-top: -61px
}

.storyboard--landing-page--softtail__item--style-three {
	width: 1020px;
	margin-left: 0px;
	margin-right: 0px
}

.storyboard--landing-page--softtail__item--style-three__img--first {
	max-width: 427px;
	z-index: 1
}

.storyboard--landing-page--softtail__item--style-three__img--second {
	max-width: 585px;
	margin-right: 290px;
	margin-top: -69px;
	z-index: 2
}

.storyboard--landing-page--softtail__item--style-three__text {
	width: 520px
}

.storyboard--landing-page--softtail__item--style-four {
	margin-left: 0px;
	width: 830px
}

.storyboard--landing-page--softtail__item--style-four__img--first {
	margin-left: 109px;
	max-width: 587px;
	z-index: 2
}

.storyboard--landing-page--softtail__item--style-four__img--second {
	max-width: 438px;
	z-index: 1
}

.storyboard--landing-page--softtail__item--style-four__text {
	margin-left: -12px;
	width: 510px;
	margin-right: -110px;
	margin-top: -62px;
	z-index: 2;
	position: relative
}

.storyboard--landing-page--softtail__item--style-four__text .storyboard__item-desc {
	padding-right: 95px
}

.storyboard--landing-page--softtail__item--style-text-one {
	width: 400px;
	margin-left: 136px;
	margin-right: 0px
}

.storyboard--landing-page--softtail__item--style-text-one a {
	width: 87%
}

.storyboard--landing-page--softtail__item--style-share {
	top: 40px;
	width: 241px;
	margin-left: -75px;
	margin-right: 0px
}

.storyboard--landing-page--softtail .storyboard__share-overlay {
	right: 0;
	left: auto
}

.storyboard__item--style-one {
	margin-left: 0px
}

.storyboard__item--style-one .storyboard__item__gradient {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 114%;
	height: 100%;
	background: linear-gradient(to right, #000 65%, transparent);
	z-index: 1
}

@media screen and (max-width: 768px) {
	.storyboard--landing-page--softtail .storyboard__item-desc {
		font-size: 3vw;
		font-size: 3vmin
	}

	.storyboard--landing-page--softtail__item--style-one {
		margin-left: 0;
		width: 100vw;
		width: 100vmin;
		margin-right: 0px
	}

	.storyboard--landing-page--softtail__item--style-one .storyboard__item--style-one__text {
		width: 93.5%
	}

	.storyboard--landing-page--softtail__item--style-one .storyboard__item--style-one__text .storyboard__item-desc {
		padding-right: 6%
	}

	.storyboard--landing-page--softtail__item--style-one .storyboard__item--style-one__img {
		margin-top: 6%;
		max-width: 85%
	}

	.storyboard--landing-page--softtail__item--style-one .storyboard__item--style-one__button {
		right: 6% !important
	}

	.storyboard--landing-page--softtail__item--style-two {
		width: 183vw;
		width: 183vmin
	}

	.storyboard--landing-page--softtail__item--style-two__img--first {
		max-width: 68%;
		margin-left: 4%
	}

	.storyboard--landing-page--softtail__item--style-two__img--second {
		max-width: 46%
	}

	.storyboard--landing-page--softtail__item--style-two__text {
		width: 36%;
		margin-top: -7.5%
	}

	.storyboard--landing-page--softtail__item--style-three {
		width: 190vw;
		width: 190vmin;
		padding-top: 0px
	}

	.storyboard--landing-page--softtail__item--style-three__img--first {
		max-width: 48%;
		margin-left: -5%
	}

	.storyboard--landing-page--softtail__item--style-three__img--second {
		max-width: 65%;
		margin-right: 18%;
		margin-top: -10%
	}

	.storyboard--landing-page--softtail__item--style-three__text {
		width: 51.5%;
		padding-top: 1%
	}

	.storyboard--landing-page--softtail__item--style-four {
		width: 168vw;
		width: 168vmin;
		margin-left: 80px
	}

	.storyboard--landing-page--softtail__item--style-four__img--first {
		max-width: 74%;
		margin-left: 5%
	}

	.storyboard--landing-page--softtail__item--style-four__img--second {
		max-width: 50%
	}

	.storyboard--landing-page--softtail__item--style-four__text {
		width: 50%;
		margin-left: 0%
	}

	.storyboard--landing-page--softtail__item--style-four__text .storyboard__item-desc {
		padding-right: 13.5%
	}

	.storyboard--landing-page--softtail__item--style-text-one {
		width: 72vw;
		width: 72vmin;
		margin-left: 3%;
		margin-right: 0px
	}

	.storyboard--landing-page--softtail__item--style-text-one a {
		width: 100%;
		font-size: 4vw;
		font-size: 4vmin
	}

	.storyboard--landing-page--softtail__item--style-share {
		top: 5%;
		width: 65vw;
		width: 65vmin;
		margin-left: -0%;
		margin-right: 0px
	}

	.storyboard--landing-page--softtail .storyboard__share-overlay {
		right: 0;
		left: auto
	}
}

.rtl .storyboard--landing-page--softtail__item--style-four__text .storyboard__item-desc {
	padding-right: 0;
	padding-left: 9.5rem
}

.storyboard--manifesto__item--style-banner {
	padding-top: 16vh;
	margin-right: 10vw;
	margin-right: 10vmin;
	margin-left: 20vw;
	margin-left: 20vmin;
	width: 35vw;
	width: 35vmin
}

.storyboard--manifesto__item--style-banner--next {
	margin-right: 25vw;
	margin-right: 25vmin;
	margin-left: 25vw;
	margin-left: 25vmin
}

.storyboard--manifesto__item--style-banner .storyboard__item--banner__label {
	line-height: 1.4;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
	width: auto;
	display: block;
	font-size: 4.6vw;
	font-size: 4.6vmin
}

.storyboard--manifesto__item--style-banner .storyboard__item--banner__label--large {
	line-height: 1;
	font-size: 8vw;
	font-size: 8vmin
}

.storyboard--manifesto__item--style-one {
	width: 95vw;
	width: 95vmin;
	padding-top: 7vh;
	padding-top: 7vmax;
	margin-right: 0px
}

.storyboard--manifesto__item--style-one__text {
	width: 70% !important;
	margin-left: 5%
}

.storyboard--manifesto__item--style-one__text .storyboard__item-desc--large {
	font-size: 3.7vw;
	font-size: 3.7vmin
}

.storyboard--manifesto__item--style-one__img {
	max-width: 83%;
	margin-top: 7%
}

.storyboard--manifesto__item--style-one__button {
	margin-top: 25%;
	font-size: 3vw;
	font-size: 3vmin
}

.storyboard--manifesto__item--style-two {
	width: 116vw;
	width: 116vmin;
	padding-top: 0% !important
}

.storyboard--manifesto__item--style-two__img--first {
	max-width: 92%;
	margin-left: 0px
}

.storyboard--manifesto__item--style-two__img--second {
	max-width: 65%;
	margin-top: 0px;
	margin-right: 0px
}

.storyboard--manifesto__item--style-two__text {
	width: 94%;
	margin-top: -7%;
	margin-bottom: 0px
}

.storyboard--manifesto__item--style-two__text .storyboard__item-title {
	font-size: 2.5rem
}

.storyboard--manifesto__item--style-two__text .storyboard__item-subtitle {
	font-size: 1.8rem;
	width: 100%
}

.storyboard--manifesto__item--style-three {
	width: 106vw;
	width: 106vmin;
	margin-left: 17vw;
	margin-left: 17vmin;
	margin-right: 17vw;
	margin-right: 17vmin;
	padding-top: 0 !important
}

.storyboard--manifesto__item--style-three__img--first {
	max-width: 93%;
	margin-left: 0px
}

.storyboard--manifesto__item--style-three__text {
	padding-top: 0px;
	margin-bottom: 21.5%;
	margin-left: 15%
}

.storyboard--manifesto__item--style-three__text .storyboard__item-title {
	font-size: 2.5rem
}

.storyboard--manifesto__item--style-three__text .storyboard__item-subtitle {
	font-size: 1.8rem;
	width: 106%
}

.storyboard--manifesto__item--style-four {
	width: 184vw !important;
	width: 184vmin !important;
	margin-left: 0px !important;
	margin-right: 0px !important;
	padding-top: 0 !important
}

.storyboard--manifesto__item--style-four__img--first {
	max-width: 63% !important
}

.storyboard--manifesto__item--style-four__img--second {
	max-width: 45% !important;
	bottom: 12% !important;
	right: 20% !important
}

.storyboard--manifesto__item--style-four__img--third {
	max-width: 32% !important;
	right: 0px !important;
	margin-top: -0px !important;
	top: 16% !important
}

.storyboard--manifesto__item--style-four__text .storyboard__item-title {
	font-size: 2.5rem
}

.storyboard--manifesto__item--style-share {
	width: 24vw;
	width: 24vmin;
	margin-left: -24vw;
	margin-left: -24vmin;
	margin-top: -4vh;
	min-height: calc(50vh - 65px)
}

.storyboard--manifesto__item--style-share .cta-icon__share--inline {
	left: -6rem;
	top: 10
}

@media screen and (min-width: 768px) {
	.storyboard--manifesto__item--style-banner {
		padding-top: 183px;
		margin-left: 0px;
		margin-right: 60px;
		width: 177px
	}

	.storyboard--manifesto__item--style-banner--next {
		margin-right: 150px
	}

	.storyboard--manifesto__item--style-banner .storyboard__item--banner__label {
		line-height: 1.4;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		width: auto;
		display: block;
		font-size: 2.3rem
	}

	.storyboard--manifesto__item--style-banner .storyboard__item--banner__label--large {
		line-height: 1;
		font-size: 4rem
	}

	.storyboard--manifesto__item--style-one {
		width: 679px;
		padding-top: 50px;
		margin-right: 27px
	}

	.storyboard--manifesto__item--style-one__text {
		width: 87.25%;
		margin-left: 90px
	}

	.storyboard--manifesto__item--style-one__text .storyboard__item-desc--large {
		font-size: 2rem
	}

	.storyboard--manifesto__item--style-one__img {
		max-width: 589px;
		margin-top: 45px
	}

	.storyboard--manifesto__item--style-one__button {
		margin-top: 65px;
		font-size: 1.8rem
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 4rem;
		width: 97%
	}

	.storyboard--manifesto__item--style-two {
		width: 576px;
		padding-top: 63px !important
	}

	.storyboard--manifesto__item--style-two__img--first {
		max-width: 441px;
		margin-left: 0px
	}

	.storyboard--manifesto__item--style-two__img--second {
		max-width: 398px;
		margin-top: 0px;
		margin-right: 24px
	}

	.storyboard--manifesto__item--style-two__text {
		width: 535px;
		margin-top: -16px;
		margin-bottom: 0px
	}

	.storyboard--manifesto__item--style-two__text .storyboard__item-title {
		font-size: 3.4rem
	}

	.storyboard--manifesto__item--style-two__text .storyboard__item-subtitle {
		font-size: 1.8rem;
		width: 410px
	}

	.storyboard--manifesto__item--style-three {
		width: 485px;
		margin-left: 100px;
		margin-right: 72px;
		padding-top: 63px !important
	}

	.storyboard--manifesto__item--style-three__img--first {
		max-width: 471px;
		margin-left: 0px
	}

	.storyboard--manifesto__item--style-three__text {
		padding-top: 56px;
		margin-bottom: 96px;
		margin-left: 70px
	}

	.storyboard--manifesto__item--style-three__text .storyboard__item-title {
		font-size: 3.4rem
	}

	.storyboard--manifesto__item--style-three__text .storyboard__item-subtitle {
		font-size: 1.8rem;
		width: 410px
	}

	.storyboard--manifesto__item--style-four {
		width: 914px !important;
		margin-left: 0px !important;
		margin-right: 0px !important;
		padding-top: 63px !important
	}

	.storyboard--manifesto__item--style-four__img--first {
		max-width: 558px
	}

	.storyboard--manifesto__item--style-four__img--second {
		max-width: 439px;
		bottom: 56px !important;
		right: 91px !important
	}

	.storyboard--manifesto__item--style-four__img--third {
		max-width: 282px;
		right: 8px !important;
		top: 168px !important;
		margin-top: -20px !important
	}

	.storyboard--manifesto__item--style-four__text .storyboard__item-title {
		font-size: 3.4rem
	}

	.storyboard--manifesto__item--style-share {
		width: 160px;
		margin-top: 0px;
		margin-left: -124px;
		min-height: 400px
	}

	.storyboard--manifesto__item--style-share .cta-icon__share--inline {
		left: -1rem
	}
}

@media screen and (min-width: 321px) and (max-width: 767px) {
	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 6rem;
		width: 87%
	}

	.storyboard--manifesto__item--style-four__img--first {
		top: 5px
	}

	.storyboard--manifesto__item--style-four__img--second {
		bottom: 26px !important;
		right: 81px !important
	}

	.storyboard--manifesto__item--style-four__img--third {
		max-width: 282px;
		right: 8px !important;
		top: 128px !important;
		margin-top: -20px !important
	}

	.storyboard--manifesto__item--style-four__text {
		margin-top: 102px !important;
		margin-left: 148px !important
	}

	.landscape .storyboard--manifesto__item--style-four__img--second {
		top: 350px
	}
}

@media screen and (max-width: 321px) {
	.storyboard--manifesto__item--style-four__img--first {
		top: 50px;
		left: 10px
	}

	.storyboard--manifesto__item--style-four__img--second {
		bottom: -60px !important;
		right: 101px !important
	}

	.storyboard--manifesto__item--style-four__img--third {
		max-width: 282px;
		right: 0px !important;
		top: 168px !important;
		margin-top: -20px !important
	}

	.storyboard--manifesto__item--style-four__text {
		margin-top: 140px !important;
		margin-left: 0px !important
	}

	.storyboard--manifesto__item--style-one__img {
		max-width: 290px;
		margin-top: 40px
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 4.25rem;
		width: 87%;
		margin-left: 0px !important
	}

	.storyboard--manifesto__item--style-two__text .storyboard__item-subtitle {
		font-size: 1.2rem;
		width: 260px;
		line-height: 1.1
	}

	.storyboard--manifesto__item--style-three__text .storyboard__item-subtitle {
		font-size: 1.2rem;
		width: 210px
	}
}

.storyboard--product .triggers {
	position: absolute
}

.storyboard--product #storyboard-product-trigger1 {
	right: -8%
}

.storyboard--product #storyboard-product-trigger2 {
	left: -94%
}

.storyboard--product #storyboard-product-trigger3 {
	left: -150%
}

.storyboard--product #storyboard-product-trigger4 {
	left: -84%
}

.storyboard--product #storyboard-product-trigger5 {
	left: -219%
}

.storyboard--product #storyboard-product-trigger6 {
	left: -0%
}

.storyboard--product__item--style-one {
	margin-left: 0;
	width: 78vw;
	width: 78vmin;
	margin-right: 0px
}

.storyboard--product__item--style-one__explore-wrapper {
	margin-top: 24px;
	width: 100%;
	text-align: right
}

.storyboard--product__item--style-one__text {
	padding-right: 0px;
	width: 100%;
	padding-top: 2%;
	padding-left: 8.5%
}

.storyboard--product__item--style-one__text .storyboard__item-title {
	letter-spacing: 0.1rem
}

.storyboard--product__item--style-one__text .storyboard__item-desc {
	padding-top: 3% !important
}

.storyboard--product__item--style-one__img {
	width: 100%;
	margin-top: 4%
}

.storyboard--product__item--style-one .storyboard__item--style-one__button {
	font-size: 4vw;
	font-size: 4vmin;
	right: -23% !important;
	margin-top: 0% !important
}

.storyboard--product__item--style-two {
	width: 186vw;
	width: 186vmin;
	padding-top: 0px;
	margin-left: 40px
}

.storyboard--product__item--style-two__img--first {
	z-index: 1;
	max-width: 75%;
	margin-left: 0px;
	position: relative
}

.storyboard--product__item--style-two__img--second {
	z-index: 2;
	position: relative;
	max-width: 53%;
	margin-left: -5%
}

.storyboard--product__item--style-two__text {
	width: 535px;
	z-index: 3;
	top: -48px;
	position: relative;
	margin-left: 5%
}

.storyboard--product__item--style-two__button {
	bottom: 9%;
	right: 52%;
	font-size: 4vw;
	font-size: 4vmin;
	min-width: 36% !important;
	position: absolute
}

.storyboard--product__item--style-three {
	padding-top: 2vh;
	margin-left: 40px;
	margin-right: 0px !important;
	width: 175vw;
	width: 175vmin
}

.storyboard--product__item--style-three__img--first {
	max-width: 51%;
	z-index: 2;
	position: relative;
	margin-left: -14%
}

.storyboard--product__item--style-three__img--second {
	z-index: 1;
	position: relative;
	max-width: 72%;
	right: 20%;
	margin-top: -84px
}

.storyboard--product__item--style-three__text {
	width: 48%;
	margin-right: 8%
}

.storyboard--product__item--style-three__button {
	margin-left: 76px;
	top: 24%;
	font-size: 4vw;
	font-size: 4vmin;
	min-width: 36% !important;
	border: none;
	position: absolute;
	z-index: 2
}

.storyboard--product__item--style-text-one {
	width: 85vw;
	width: 85vmin;
	margin-right: 0%
}

.storyboard--product__item--style-text-one .storyboard__item-title {
	font-size: 7vw
}

.storyboard--product__item--style-text-one .icon--star {
	margin-top: 0px
}

.storyboard--product__item--style-text-one .storyboard__item-desc {
	padding: 0px !important;
	margin: 5% 0px 7% 0px;
	width: 100%
}

.storyboard--product__item--style-text-one .button--arrow {
	font-size: 4vmin;
	font-size: 4vw;
	min-width: 90%
}

.storyboard--product__item--style-share {
	width: 50vw
}

.storyboard--product__item--style-share .storyboard__share {
	margin-left: -45%
}

.landscape .storyboard--product__item--style-text-one {
	margin-top: 60px
}

@media screen and (min-width: 768px) {
	.storyboard--product #storyboard-product-trigger1 {
		right: 22px
	}

	.storyboard--product #storyboard-product-trigger2 {
		left: -22px
	}

	.storyboard--product #storyboard-product-trigger3 {
		left: -0px
	}

	.storyboard--product #storyboard-product-trigger4 {
		left: -800px
	}

	.storyboard--product #storyboard-product-trigger5 {
		left: -700px
	}

	.storyboard--product #storyboard-product-trigger6 {
		left: -600px
	}

	.storyboard--product__item--style-one {
		padding-top: 40px;
		width: 750px
	}

	.storyboard--product__item--style-one__explore-wrapper {
		margin-top: 10px
	}

	.storyboard--product__item--style-one__text {
		margin-left: 68px;
		padding-left: 0px !important;
		padding-right: 0px !important;
		padding-top: 0;
		width: 100%
	}

	.storyboard--product__item--style-one__text .storyboard__item-title {
		letter-spacing: 0.2rem
	}

	.storyboard--product__item--style-one__text .storyboard__item-desc {
		padding-top: 0px !important
	}

	.storyboard--product__item--style-one__img {
		margin-top: 31px;
		max-height: 493px
	}

	.storyboard--product__item--style-two {
		padding-top: 66px;
		margin-left: 40px;
		width: 852px
	}

	.storyboard--product__item--style-two__img--first {
		z-index: 1;
		max-width: 558px;
		margin-left: 148px;
		position: relative
	}

	.storyboard--product__item--style-two__img--second {
		z-index: 2;
		position: relative;
		max-width: 382px;
		margin-left: -100px
	}

	.storyboard--product__item--style-two__text {
		width: 535px;
		z-index: 3;
		top: -48px;
		position: relative;
		margin-left: 0%
	}

	.storyboard--product__item--style-two__button {
		bottom: 52px;
		right: 296px;
		position: absolute;
		z-index: 2
	}

	.storyboard--product__item--style-two__button-label.cta-label {
		min-width: 200px
	}

	.storyboard--product__item--style-three {
		padding-top: 68px;
		margin-left: 45px;
		margin-right: 200px !important;
		width: 930px
	}

	.storyboard--product__item--style-three__img--first {
		max-width: 395px;
		z-index: 2;
		position: relative;
		margin-left: 0%
	}

	.storyboard--product__item--style-three__img--second {
		z-index: 1;
		position: relative;
		max-width: 590px;
		right: 224px;
		margin-top: -84px
	}

	.storyboard--product__item--style-three__text {
		width: 460px;
		margin-right: 0%;
		position: absolute;
		right: 0
	}

	.storyboard--product__item--style-three__button {
		position: relative;
		margin-left: 0;
		margin-top: 100px;
		z-index: 2
	}

	.storyboard--product__item--style-three__button-label.cta-label {
		min-width: 260px
	}

	.storyboard--product__item--style-four__button-label.cta-label {
		min-width: 300px
	}

	.storyboard--product__item--style-text-one {
		width: 426px;
		margin: 0px
	}

	.storyboard--product__item--style-text-one .storyboard__item-title {
		font-size: 4.2rem
	}

	.storyboard--product__item--style-text-one .icon--star {
		margin-top: 0px
	}

	.storyboard--product__item--style-text-one .storyboard__item-desc {
		padding: 0px !important;
		margin: 30px 0px 38px 0px;
		width: 390px
	}

	.storyboard--product__item--style-text-one .button--arrow {
		font-size: 1.6rem
	}

	.storyboard--product__item--style-share {
		width: 282px
	}

	.storyboard--product__item--style-share .storyboard__share {
		margin-left: 0%
	}
}

@media screen and (min-width: 768px) {
	.rtl .storyboard--product__item--style-one__text {
		margin-left: auto;
		margin-right: 50px;
		padding-left: 0px !important;
		padding-right: 20px !important;
		padding-top: 0
	}
}

.storyboard--campaign .triggers {
	position: absolute
}

.storyboard--campaign #storyboard-campaign-trigger1 {
	right: -8%
}

.storyboard--campaign #storyboard-campaign-trigger2 {
	left: -94%
}

.storyboard--campaign #storyboard-campaign-trigger3 {
	left: -150%
}

.storyboard--campaign #storyboard-campaign-trigger4 {
	left: -84%
}

.storyboard--campaign #storyboard-campaign-trigger5 {
	left: -219%
}

.storyboard--campaign #storyboard-campaign-trigger6 {
	left: -0%
}

.storyboard--campaign__item--style-one {
	margin-left: 0;
	width: 78vw;
	width: 78vmin;
	margin-right: 0px
}

.storyboard--campaign__item--style-one__explore-wrapper {
	margin-top: 70px
}

.storyboard--campaign__item--style-one__explore-wrapper .cta.cta-icon__explore {
	margin-right: -35px
}

.storyboard--campaign__item--style-one .storyboard__item {
	border: 2px red  solid
}

.storyboard--campaign__item--style-one .storyboard__item--style-one__text {
	width: 100%;
	padding-top: 10%;
	padding-left: 8.5%
}

.storyboard--campaign__item--style-one .storyboard__item-subtitle {
	width: 100%;
	line-height: 1.15;
	margin-bottom: 12%
}

.storyboard--campaign__item--style-one .storyboard__item--style-one__button {
	font-size: 4vw;
	font-size: 4vmin;
	right: -23% !important;
	margin-top: 27% !important
}

.storyboard--campaign__item--style-two {
	width: 125vw;
	width: 125vmin;
	padding-top: 0px;
	margin-left: 40px
}

.storyboard--campaign__item--style-two__img--first {
	max-width: 75%
}

.storyboard--campaign__item--style-two__img--second {
	position: relative;
	display: block;
	max-width: 60%;
	margin-top: -33px
}

.storyboard--campaign__item--style-two .storyboard__explore {
	position: relative;
	display: inline-block;
	margin-top: 60px;
	font-size: 1.8rem
}

.storyboard--campaign__item--style-text-one {
	margin: 0 18vw 0 20vw;
	margin: 0 18vmin 0 20vmin;
	width: 88vw;
	width: 88vmin
}

.storyboard--campaign__item--style-text-one .storyboard__item .star-line {
	border: 1px solid #fff
}

.storyboard--campaign__item--style-text-one .storyboard__item--style-text__subtitle {
	font-size: 3.5vw;
	font-size: 3.5vmin;
	line-height: 2;
	letter-spacing: .09rem
}

.storyboard--campaign__item--style-text-one .storyboard__item--style-text__subtitle:nth-child(3) {
	margin-top: 10%
}

.storyboard--campaign__item--style-three {
	padding-top: 0px;
	width: 205vw;
	width: 205vmin;
	margin-left: 0px
}

.storyboard--campaign__item--style-three__text {
	width: 38%;
	z-index: 2;
	padding-top: 10%;
	position: relative
}

.storyboard--campaign__item--style-three__text .storyboard__item-subtitle {
	letter-spacing: .01rem;
	line-height: 1.5;
	width: 100%
}

.storyboard--campaign__item--style-three__img--first {
	margin-left: 12%;
	max-width: 45%
}

.storyboard--campaign__item--style-three__img--second {
	max-width: 65%;
	margin-top: -6%;
	text-align: right;
	margin-right: 70px;
	z-index: 1
}

.storyboard--campaign__item--style-three__img--second img {
	width: 100%
}

.storyboard--campaign__item--style-three__img--second .storyboard__item--style-three__disclaimer {
	margin-right: 8%;
	margin-top: 3%;
	font-size: 3vw;
	font-size: 3vmin
}

.storyboard--campaign__item--style-three__img--third {
	max-width: 22%
}

.storyboard--campaign__item--style-text-two {
	margin: 0 18vw 0 20vw;
	margin: 0 18vmin 0 20vmin;
	width: 88vw;
	width: 88vmin
}

.storyboard--campaign__item--style-text-two .storyboard__item--style-text__subtitle {
	font-size: 3.5vw;
	font-size: 3.5vmin;
	line-height: 2;
	letter-spacing: .09rem
}

.storyboard--campaign__item--style-four {
	width: 200vw;
	width: 200vmin;
	padding-top: 5vh;
	margin-left: 0px
}

.storyboard--campaign__item--style-four__img--first {
	max-width: 50%;
	z-index: 2;
	margin-left: 4%
}

.storyboard--campaign__item--style-four__img--second {
	position: relative !important;
	left: -13%;
	top: 0px;
	margin-top: 10%;
	max-width: 25%;
	display: block
}

.storyboard--campaign__item--style-four__img--third {
	position: relative !important;
	left: -24%;
	z-index: 1;
	bottom: 0%;
	margin-top: -6%;
	max-width: 40%;
	margin-left: -24%
}

.storyboard--campaign__item--style-four__text {
	width: 38%;
	margin: 5% 0 0 0%;
	text-shadow: 1px 1px 4px rgba(0,0,0,0.75)
}

.storyboard--campaign__item--style-four__share__button {
	position: absolute;
	right: -1%;
	bottom: 38%;
	z-index: 2;
	border: none
}

@media (min-width: 768px) {
	.storyboard--campaign__item--style-four__share__button {
		bottom: 28%
	}
}

.storyboard--campaign__item--style-four__share__button a {
	font-size: 4vw;
	font-size: 4vmin
}

.storyboard--campaign .storyboard__item--share {
	width: 50vw;
	width: 50vmin
}

.storyboard__share {
	position: absolute;
	top: 38px;
	left: 22px
}

@media screen and (min-width: 768px) {
	.storyboard--campaign #storyboard-campaign-trigger1 {
		right: -150px
	}

	.storyboard--campaign #storyboard-campaign-trigger2 {
		left: -0px
	}

	.storyboard--campaign #storyboard-campaign-trigger3 {
		left: -713px
	}

	.storyboard--campaign #storyboard-campaign-trigger4 {
		left: -800px
	}

	.storyboard--campaign #storyboard-campaign-trigger5 {
		left: -700px
	}

	.storyboard--campaign #storyboard-campaign-trigger6 {
		left: -600px
	}

	.storyboard--campaign .storyboard__icon-star {
		margin-top: 33px;
		margin-bottom: 33px;
		width: 20px;
		height: 20px
	}

	.storyboard--campaign__item--style-one {
		padding-top: 60px;
		margin-left: 0;
		width: 587px;
		margin-right: 73px
	}

	.storyboard--campaign__item--style-one .storyboard__item--style-one__text {
		padding-top: 0%;
		width: 587px;
		padding-left: 72px
	}

	.storyboard--campaign__item--style-one .storyboard__item-subtitle {
		line-height: 1.15;
		margin-bottom: 35px
	}

	.storyboard--campaign__item--style-two {
		width: 565px;
		padding-top: 112px;
		margin-left: 73px
	}

	.storyboard--campaign__item--style-two__explore-wrapper {
		padding-right: 24px;
		margin-top: 59px
	}

	.storyboard--campaign__item--style-two__img--first {
		max-width: 474px
	}

	.storyboard--campaign__item--style-two__img--second {
		position: relative;
		display: block;
		max-width: 382px;
		margin-top: -33px
	}

	.storyboard--campaign__item--style-two .storyboard__explore {
		position: relative;
		display: inline-block;
		margin-top: 60px;
		font-size: 1.8rem
	}

	.storyboard--campaign__item--style-text-one {
		margin: 0 108px 0 144px;
		width: 475px
	}

	.storyboard--campaign__item--style-text-one .storyboard__item--style-text__subtitle {
		font-size: 1.8rem;
		line-height: 2;
		letter-spacing: .09rem
	}

	.storyboard--campaign__item--style-text-one .storyboard__item--style-text__subtitle:nth-child(3) {
		margin-top: 45px
	}

	.storyboard--campaign__item--style-three {
		padding-top: 40px;
		width: 1052px;
		margin-left: 0px
	}

	.storyboard--campaign__item--style-three__text {
		width: 400px;
		z-index: 3;
		top: 97px;
		padding-top: 0%;
		position: relative
	}

	.storyboard--campaign__item--style-three__text .storyboard__item-subtitle {
		letter-spacing: .01rem;
		width: 100%
	}

	.storyboard--campaign__item--style-three__img--first {
		margin-left: 150px;
		max-width: 441px;
		z-index: 1
	}

	.storyboard--campaign__item--style-three__img--second {
		max-width: 656px;
		width: 656px;
		margin-top: -67px;
		text-align: right;
		margin-right: 70px;
		z-index: 2
	}

	.storyboard--campaign__item--style-three__img--second img {
		width: 100%
	}

	.storyboard--campaign__item--style-three__img--second .storyboard__item--style-three__disclaimer {
		margin-right: 78px;
		margin-top: 25px;
		font-size: 1.6rem
	}

	.storyboard--campaign__item--style-three__img--third {
		margin-top: 48px;
		max-width: 290px
	}

	.storyboard--campaign__item--style-text-two {
		margin: 0 90px 0 140px;
		width: 518px
	}

	.storyboard--campaign__item--style-text-two .storyboard__item--style-text__subtitle {
		font-size: 1.8rem;
		line-height: 2;
		letter-spacing: .09rem
	}

	.storyboard--campaign__item--style-four {
		width: 908px;
		padding-top: 70px;
		margin-left: 0px
	}

	.storyboard--campaign__item--style-four__img--first {
		z-index: 2;
		margin-left: 0%
	}

	.storyboard--campaign__item--style-four__img--second {
		position: relative !important;
		left: 0px;
		top: 136px;
		margin-top: 0%;
		max-width: 279px
	}

	.storyboard--campaign__item--style-four__img--third {
		position: relative !important;
		left: -90px;
		z-index: 1;
		bottom: 64px;
		margin-top: 0%;
		max-width: 423px;
		margin-left: -55px
	}

	.storyboard--campaign__item--style-four__text {
		width: 480px;
		margin: 35px 0 0 40px;
		text-shadow: 1px 1px 4px rgba(0,0,0,0.75)
	}

	.storyboard--campaign__item--style-four__share__button {
		position: absolute;
		left: 74%;
		z-index: 2;
		border: none
	}

	.storyboard--campaign__item--style-four__share__button a {
		font-size: 1.8rem
	}

	.storyboard--campaign .storyboard__item--share {
		width: 280px
	}

	.storyboard--campaign__item--share {
		padding-top: 65px;
		margin-left: -170px
	}

	.storyboard--campaign__item--share__button {
		position: absolute;
		top: 617px;
		right: 0;
		margin: 0
	}
}

.storyboard--softail__explore {
	margin-right: -32px;
	width: auto
}

.storyboard--softail__share {
	position: absolute;
	right: 0;
	top: 50px
}

.storyboard--softail__item--style-four {
	padding-top: 63px
}

.storyboard--softail__item--style-two {
	margin-right: 57px;
	margin-left: 74px;
	padding-top: 63px;
	width: 709px
}

.storyboard--softail__item--style-two__img--first {
	margin-left: 0;
	max-width: 448px
}

.storyboard--softail__item--style-two__img--second {
	position: absolute;
	bottom: 56px;
	right: 74px;
	margin-top: 0
}

.storyboard--softail__item--style-two__img--third {
	position: absolute;
	top: 168px;
	right: 0;
	margin-top: 0;
	max-width: 222px
}

.storyboard--softail__item--style-two__text {
	position: absolute;
	margin-top: 62px;
	margin-left: 52px;
	width: 580px
}

@media screen and (max-width: 321px) {
	.storyboard--softail__item--style-two__text {
		width: 280px;
		margin-top: 0px;
		top: 240px
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 4.25rem;
		width: 87%;
		margin-left: 0px !important
	}

	.storyboard--manifesto__item--style-four__img--second {
		bottom: -60px !important;
		right: 101px !important
	}

	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -7rem;
		top: 15rem
	}
}

@media screen and (min-width: 321px) and (max-width: 400px) {
	.storyboard--softail__item--style-two__text {
		width: 280px
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 6rem;
		width: 87%
	}

	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -17rem;
		top: 23rem
	}
}

@media screen and (max-width: 768px) {
	.storyboard__item-title {
		font-size: 25px !important
	}

	.storyboard__item--style-text__subtitle {
		font-size: 18px !important
	}

	.cta.cta-icon__explore.cta-icon__explore-large {
		font-size: 12px;
		bottom: 12px
	}

	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		font-size: 12px
	}
}

@media screen and (min-width: 567px) and (max-width: 569px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -5rem !important;
		bottom: -10rem !important
	}

	.storyboard--manifesto__item--style-four__img--second {
		top: 290px !important;
		right: 155px !important
	}

	.storyboard--manifesto__item--style-four__text {
		margin-top: 142px !important;
		margin-left: 25px !important
	}

	.storyboard--softail__item--style-two__text {
		width: 400px !important
	}
}

@media screen and (min-width: 569px) and (max-width: 668px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -6.5rem !important;
		bottom: -11.5rem !important
	}

	.storyboard--manifesto__item--style-four__img--second {
		top: 325px !important;
		right: 155px !important
	}

	.storyboard--manifesto__item--style-four__text {
		margin-top: 122px !important;
		margin-left: 35px !important
	}

	.storyboard--softail__item--style-two__text {
		width: 400px !important
	}

	.storyboard--campaign__item--style-text-one {
		width: 480px
	}

	.storyboard--campaign__item--style-text-one .storyboard__item--style-text__subtitle {
		font-size: 14px !important
	}

	.storyboard--campaign__item--style-text-two .storyboard__item--style-text__subtitle {
		font-size: 14px !important
	}
}

@media screen and (min-width: 735px) and (max-width: 741px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -6.5rem !important;
		bottom: -11.5rem !important
	}

	.storyboard--manifesto__item--style-four__img--second {
		top: 325px !important;
		right: 155px !important
	}

	.storyboard--manifesto__item--style-four__text {
		margin-top: 122px !important;
		margin-left: 35px !important
	}

	.storyboard--softail__item--style-two__text {
		width: 400px !important
	}
}

@media screen and (min-width: 399px) and (max-width: 768px) {
	.storyboard--softail__item--style-two__text {
		width: 280px
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 6rem;
		width: 87%
	}

	.cta.cta-icon__explore.cta-icon__explore-large {
		font-size: 12px
	}

	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -18rem;
		bottom: -23rem;
		font-size: 12px
	}
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
	.storyboard--softail__item--style-two__text {
		width: 280px
	}

	.storyboard--manifesto__item--style-one__explore-wrapper {
		margin-top: 6rem;
		width: 87%
	}

	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		right: -26rem;
		bottom: -32rem
	}
}

@media screen and (min-width: 1023px) and (max-width: 1440px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		bottom: -26rem !important;
		right: -20rem !important
	}

	.cta.cta-icon__explore-down {
		right: -14.5rem !important
	}
}

@media screen and (min-width: 1440px) and (max-width: 1780px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		bottom: -34rem;
		right: -26.5rem
	}
}

@media screen and (min-width: 1780px) {
	.storyboard--softail__explore--down.cta.cta-icon__explore-down {
		z-index: 3000;
		bottom: -41rem;
		right: -28.5rem
	}

	.storyboard--softail__share {
		top: 35px
	}

	.storyboard--softail__item--style-two {
		margin-left: 74px;
		width: 933px
	}

	.storyboard--softail__item--style-two__img--first {
		margin-left: 0;
		max-width: 575px
	}

	.storyboard--softail__item--style-two__img--second {
		position: absolute;
		bottom: 39px;
		right: 103px;
		margin-top: 0;
		max-width: 433px
	}

	.storyboard--softail__item--style-two__img--third {
		position: absolute;
		top: 210px;
		right: 40px;
		margin-top: 0;
		max-width: 285px
	}
}

.rtl .storyboard__item .storyboard--manifesto__item--style-one__explore-wrapper,.rtl .storyboard__item .storyboard--campaign__item--style-one__explore-wrapper,.rtl .storyboard__item .storyboard--campaign__item--style-two__explore-wrapper,.rtl .storyboard__item .storyboard--manifesto__item--style-two__explore-wrapper,.rtl .storyboard__item .storyboard--product__item--style-one__explore-wrapper {
	text-align: left
}

.rtl .storyboard__item .storyboard--manifesto__item--style-one__explore-wrapper a,.rtl .storyboard__item .storyboard--campaign__item--style-one__explore-wrapper a,.rtl .storyboard__item .storyboard--campaign__item--style-two__explore-wrapper a,.rtl .storyboard__item .storyboard--manifesto__item--style-two__explore-wrapper a,.rtl .storyboard__item .storyboard--product__item--style-one__explore-wrapper a {
	display: inline-block;
	z-index: 1000
}

.rtl .storyboard__item .storyboard--manifesto__item--style-one__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--campaign__item--style-one__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--campaign__item--style-two__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--manifesto__item--style-two__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--product__item--style-one__explore-wrapper a .cta-icon {
	right: auto;
	transform: rotate(-270deg)
}

@media screen and (max-width: 767px) {
	.rtl .storyboard__item .storyboard--manifesto__item--style-one__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--campaign__item--style-one__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--campaign__item--style-two__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--manifesto__item--style-two__explore-wrapper a .cta-icon,.rtl .storyboard__item .storyboard--product__item--style-one__explore-wrapper a .cta-icon {
		top: 18px !important
	}
}

.rtl .storyboard__item .storyboard--manifesto__item--style-one__explore-wrapper a .cta-label,.rtl .storyboard__item .storyboard--campaign__item--style-one__explore-wrapper a .cta-label,.rtl .storyboard__item .storyboard--campaign__item--style-two__explore-wrapper a .cta-label,.rtl .storyboard__item .storyboard--manifesto__item--style-two__explore-wrapper a .cta-label,.rtl .storyboard__item .storyboard--product__item--style-one__explore-wrapper a .cta-label {
	margin-left: 1rem
}

.modelselect {
	background-color: #fff;
	text-align: center;
	padding: 7rem 0 20% 0;
	height: auto;
	min-height: 100vh
}

.modelselect__hidden {
	display: none
}

.modelselect__overlay {
	padding: 0 2rem
}

.modelselect__overlay-spec-category-heading {
	font-size: 1.8rem;
	text-transform: uppercase
}

.modelselect__overlay-spec-title {
	text-transform: uppercase;
	font-size: 1.2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.modelselect__overlay-spec-value {
	font-size: 1.2rem;
	word-break: break-word
}

.modelselect .testride-headline {
	font-weight: normal
}

@media screen and (min-width: 320px) {
	.modelselect .testride-headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.modelselect .testride-headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.modelselect__bikedetails-title {
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.modelselect__bikedetails-price-title {
	font-size: 2rem
}

.modelselect__bikedetails {
	text-align: left
}

.modelselect__container {
	float: none;
	margin: 0 auto
}

@media only screen and (min-width: 768px) {
	.modelselect__content {
		display: flex;
		align-items: center;
		justify-content: center
	}
}

.modelselect__selector {
	margin: 2rem auto;
	float: none;
	font-size: 1.6rem
}

.modelselect__selector .dropdown-bikes .btn-select,.modelselect__selector .dropdown-bikes .list-bikes {
	outline: none;
	border: .3rem solid black;
	border-radius: 0;
	padding: 2rem;
	width: 100%
}

.modelselect__selector .dropdown-bikes .btn-select {
	background-image: url("../../images/dropdown-arrow-black.png");
	background-color: transparent;
	background-repeat: no-repeat;
	background-position-x: 95%;
	background-position-y: 50%;
	cursor: pointer;
	color: #a3a3a3;
	text-align: left;
	background-size: 1.2rem
}

.modelselect__selector .dropdown-bikes .btn-select.modelselect--selected {
	text-transform: uppercase;
	text-decoration: none;
	color: #000
}

.modelselect__selector .dropdown-bikes .btn-select.modelselect--selected a {
	text-decoration: none;
	color: #000
}

.modelselect__selector .dropdown-bikes .list-bikes {
	overflow: auto;
	height: 30rem;
	margin-top: 0;
	padding: 2rem;
	font-size: 1.6rem;
	text-transform: uppercase;
	z-index: 100
}

.ios .modelselect__selector .dropdown-bikes .list-bikes {
	-webkit-overflow-scrolling: touch
}

.modelselect__selector .dropdown-bikes .list-bikes ul {
	list-style: none;
	padding: 0;
	margin: 0
}

.modelselect__selector .dropdown-bikes .list-bikes li.modelselect--header,.modelselect__selector .dropdown-bikes .list-bikes li.list-bikes-item {
	padding: 1rem 1rem 1rem 0
}

.modelselect__selector .dropdown-bikes .list-bikes li.modelselect--header {
	font-family: "NotoSans-Bold",sans;
	padding-top: 2rem
}

.modelselect__selector .dropdown-bikes .list-bikes li.list-bikes-item {
	cursor: pointer
}

.modelselect__selector .dropdown-bikes .list-bikes a {
	color: #000;
	text-decoration: none
}

.modelselect__selector .dropdown-bikes.open .btn-select {
	color: #000;
	background-image: url("../../images/close-icon-black.png")
}

.modelselect__selector .dropdown-bikes .divider {
	background-color: #000
}

.modelselect__selector .dropdown-bikes .iScrollIndicator {
	background: #000;
	opacity: 1
}

.modelselect__selector .dropdown-bikes .dropdown-backdrop {
	z-index: 99
}

.modelselect__selector-input {
	margin: 0 auto;
	text-align: center;
	padding-top: 2rem
}

.modelselect__hero-image {
	margin: 1.5rem auto 1.5rem auto
}

.modelselect__hero-image img {
	width: 100%;
	max-width: 100%;
	height: auto
}

.modelselect__hero-image--centred {
	float: none
}

.modelselect__bikedetails ul {
	padding: 0;
	margin-bottom: 0
}

.modelselect__bikedetails ul li {
	list-style: none;
	padding: 1rem;
	overflow: hidden
}

.modelselect__bikedetails ul li:nth-of-type(even) {
	background-color: #e1e1e1
}

.modelselect__bikedetails--link {
	margin-top: 1.5rem;
	margin-bottom: 2.5rem
}

.modelselect__continue {
	margin: 0 auto
}

.modelselect__continue-button {
	width: 100%
}

.modelselect .btn,.modelselect .button {
	text-align: left;
	position: relative;
	max-width: 30rem;
	margin-top: 4rem;
	padding-left: 2.5rem;
	color: #000;
	background-color: #ff6600
}

.modelselect .btn span,.modelselect .button span {
	font-size: smaller
}

.modelselect__disclaimer {
	padding-top: 2rem;
	margin: 0 auto;
	text-align: left
}

.modelselect__pagination {
	margin: 1.5rem auto;
	text-align: center
}

.modelselect__pagination--next,.modelselect__pagination--prev {
	height: 2rem;
	font-weight: bolder;
	cursor: pointer
}

.modelselect__pagination--next:after,.modelselect__pagination--prev:after {
	content: "\e901";
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.modelselect__pagination--next:after {
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
	-ms-transform: rotate(-180deg);
	-o-transform: rotate(-180deg);
	transform: rotate(-180deg);
	display: inline-block
}

.modelselect__pagination .cta-link {
	display: inline
}

.modelselect__pagination--content {
	font-size: .9rem;
	margin: 0 1.5rem
}

.modelselect__pagination--item {
	font-weight: bold
}

@media only screen and (max-width: 767px) {
	.modelselect__selector {
		margin: 8rem auto 4rem auto
	}

	.modelselect__selector .dropdown-bikes .btn-select {
		padding: 1rem 2rem;
		min-height: 7rem
	}

	.modelselect__selector .dropdown-bikes .list-bikes {
		position: fixed;
		width: 100%;
		height: 100%;
		min-height: 100%;
		top: 0;
		z-index: 9999999;
		border: 0
	}

	.modelselect__selector .dropdown-bikes .list-bikes .mobile-select {
		display: block;
		border-bottom: 0.3rem solid #000;
		padding-top: 2rem
	}
}

@media only screen and (min-width: 768px) {
	.modelselect .btn,.modelselect .button {
		width: 90%
	}

	.modelselect__selector {
		margin: 8rem auto 4rem auto
	}

	.modelselect__selector .dropdown-bikes .list-bikes {
		overflow: hidden;
		height: 30rem;
		padding: 0 2rem;
		margin-top: -0.3rem
	}

	.modelselect__selector .dropdown-bikes .list-bikes ul {
		list-style: none;
		padding-bottom: 1rem
	}

	.modelselect__selector .dropdown-bikes.open .btn-select {
		background-image: url("../../images/dropdown-arrow-black.png")
	}

	.modelselect__selector .dropdown-bikes .list-bikes .mobile-select {
		display: none
	}

	.modelselect__selector__disclaimer {
		width: 90%;
		text-align: left
	}

	.modelselect__continue-button {
		width: auto
	}

	.modelselect__continue {
		margin: 4rem auto 0 auto
	}

	.modelselect__bikedetails--link {
		margin-top: 2.5rem
	}
}

.rtl .modelselect__disclaimer {
	text-align: right
}

.testride-dealerlocator {
	background-color: #fff;
	padding: 8rem 0;
	position: relative
}

.testride-dealerlocator__hidden {
	display: none
}

.testride-dealerlocator .parsley-error {
	border-color: #ad181f
}

.testride-dealerlocator input::-ms-clear {
	display: none
}

.testride-dealerlocator .testride-error--state {
	color: #ff0000
}

.testride-dealerlocator .testride_locator {
	margin: 0rem auto 0 auto;
	float: none
}

.testride-dealerlocator .testride__header-headline {
	text-align: center;
	float: none;
	margin: 0 auto
}

.testride-dealerlocator .testride__header-headline h1 {
	font-weight: normal
}

@media screen and (min-width: 320px) {
	.testride-dealerlocator .testride__header-headline h1 {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.testride-dealerlocator .testride__header-headline h1 {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.testride-dealerlocator-btn {
	text-align: center
}

@media screen and (min-width: 768px) {
	.testride-dealerlocator-btn {
		min-width: 30rem
	}
}

.testride-dealerlocator__divider {
	text-align: center;
	margin: 3rem auto;
	margin-bottom: 1px;
	position: relative
}

@media screen and (min-width: 768px) {
	.testride-dealerlocator__divider {
		width: 30rem
	}
}

.testride-dealerlocator__divider:before,.testride-dealerlocator__divider:after {
	content: "";
	display: block;
	height: 1px;
	width: 13.5rem;
	border-top: 1px solid #000;
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	z-index: 0
}

.testride-dealerlocator__divider:before {
	left: 0
}

.testride-dealerlocator__divider:after {
	right: 0
}

.testride-dealerlocator__divider span {
	display: inline-block;
	margin: 0;
	padding: 0 5px;
	line-height: 1.8rem;
	vertical-align: text-top;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 1.8rem;
	background-color: #fff;
	position: relative;
	z-index: 1
}

.testride-dealerlocator__divider .testride-dealerlocator__dividerleft {
	float: left
}

.testride-dealerlocator__divider .testride-dealerlocator__dividerright {
	float: right
}

.testride-dealerlocator-field {
	margin: 2rem auto;
	position: relative
}

@media screen and (min-width: 768px) {
	.testride-dealerlocator-field {
		width: 30rem
	}
}

.testride-dealerlocator-field input {
	width: 100%;
	border: 0.2rem solid #000;
	padding: 1.2rem 5rem 1.2rem 2rem;
	font-size: 1.6rem
}

.testride-dealerlocator-field select {
	width: 100%;
	min-width: 50%;
	border: 2px solid #000;
	padding: 1.2rem 2rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	background-image: url("../../images/dropdown-arrow-black.png");
	background-color: transparent;
	background-repeat: no-repeat;
	background-position-x: 93%;
	background-position-y: 50%;
	cursor: pointer;
	background-size: 1.2rem;
	font-size: 1.6rem;
	color: #7c7c7c;
	border-radius: 0
}

.testride-dealerlocator-field select option:first-child {
	color: #7c7c7c
}

.testride-dealerlocator-field select option:not(:first-child) {
	color: #000
}

.testride-dealerlocator-field select.active {
	color: #000
}

.testride-dealerlocator-field label {
	width: 100%;
	display: inline-block;
	font-size: 1.8rem;
	margin: 0 0 .5rem 0;
	text-transform: uppercase;
	font-weight: bold;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.testride-dealerlocator .btn,.testride-dealerlocator .button {
	margin-top: 1.5rem;
	padding-left: 2.5rem;
	border: #000
}

.testride-dealerlocator .btn:hover,.testride-dealerlocator .button:hover,.testride-dealerlocator .btn:active,.testride-dealerlocator .button:active,.testride-dealerlocator .btn:focus,.testride-dealerlocator .button:focus {
	color: #fff;
	background-color: #000
}

.testride-dealerlocator .btn[disabled],.testride-dealerlocator [disabled].button {
	color: #9e9b9b;
	background-color: #dfdfdf
}

.testride-dealerlocator .btn span,.testride-dealerlocator .button span {
	position: absolute;
	top: 0;
	right: 1rem;
	width: 2.2rem;
	height: 100%;
	overflow: hidden
}

.testride__dealerlocator-results {
	background-color: #fff;
	padding: 8rem 0 0 0
}

.testride__dealerlocator-results .testride__header-headline {
	text-align: center
}

.testride__dealerlocator-results .testride__header-headline h1 {
	float: none;
	font-size: 3rem;
	line-height: 3.5rem;
	font-weight: normal
}

.testride__dealerlocator-results .testride__dealers-results {
	margin: 6rem auto;
	float: none;
	display: flex;
	flex-wrap: wrap
}

.testride__dealerlocator-results .testride__dealers-results .button--testride-dealers {
	text-align: left;
	position: relative;
	width: 100%;
	max-width: 30rem;
	margin-top: 2rem;
	padding-left: 2.5rem;
	border: #000;
	font-size: 1.4rem;
	border-radius: inherit
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers {
	padding: 1rem 1rem 4rem 1rem;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers .testride__btn-continue {
	flex: 0 0 auto
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers .button--testride-dealers {
	margin: 0 auto
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-wrap {
	flex: 1 0 auto;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-mile {
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 25%;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-mile p {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-mile p:first-child {
	font-size: 1.8rem
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-mile p:last-child {
	font-size: 1.2rem
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-detail,.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-no-otherdealers {
	text-align: left
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-detail .testride__otherdealers-contact,.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-no-otherdealers .testride__otherdealers-contact {
	margin-bottom: 2rem;
	margin-top: 0.5rem
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-detail {
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 75%;
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%
}

.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers-no-otherdealers {
	margin: 0 auto;
	max-width: 20.5rem
}

.testride__dealerlocator-results .testride__dealers-results p {
	margin: 0;
	word-break: break-all;
	overflow-wrap: break-word
}

.testride__dealerlocator-results .testride__dealers-results [dealer-name] {
	font-size: 1.8rem;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	line-height: 2.2rem
}

.testride__dealerlocator-results .testride__dealers-results span {
	font-size: 1.6rem
}

.firefox .testride-dealerlocator__divider span {
	font-weight: normal
}

.firefox .testride-dealerlocator-field label {
	font-weight: normal
}

@media (max-width: 768px) {
	.testride__dealerlocator-results .testride__dealers-results .btn.button--testride-dealers,.testride__dealerlocator-results .testride__dealers-results .button--testride-dealers.button {
		width: 95%;
		font-size: 1.1rem
	}

	.testride__dealerlocator-results .testride__dealers-results .btn.button--testride-dealers:after,.testride__dealerlocator-results .testride__dealers-results .button--testride-dealers.button:after {
		right: 0.75rem
	}
}

@media (min-width: 320px) {
	.testride-datepicker .testride__header-headline p {
		width: 60%;
		margin: 0 auto
	}

	.testride__dealerlocator-results .button--testride-dealers {
		font-size: 1rem
	}

	.testride__dealerlocator-results .button--testride-dealers:after {
		right: 0.75rem
	}

	.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers {
		margin: 0 0 2rem 0;
		text-align: center
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers {
		width: 33%
	}

	.testride__dealerlocator-results .testride__dealers-results .button--testride-dealers {
		font-size: 1.2rem
	}
}

@media only screen and (min-width: 992px) {
	.safari .testride__dealerlocator-results .testride__dealers-results .testride__otherdealers {
		width: 24.95%
	}

	.testride__dealerlocator-results .testride__header-headline h1 {
		font-size: 4.5rem;
		line-height: 5rem
	}
}

@media only screen and (max-width: 320px) {
	.testride__dealerlocator-results .testride__dealers-results .testride__otherdealers {
		width: 90%;
		margin: 0 auto
	}
}

.testride--datepicker {
	background-color: #fff;
	text-align: center;
	padding: 0 0 6rem 0;
	min-height: 50vh
}

.testride--datepicker__hidden {
	display: none
}

@media screen and (min-width: 320px) {
	.testride--datepicker--cta {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.testride--datepicker--cta {
		font-size: 1.4rem;
		line-height: 1
	}
}

.testride--datepicker-container {
	float: none;
	margin: 8rem auto
}

.testride--datepicker-container .btn,.testride--datepicker-container .button {
	text-align: left;
	position: relative;
	width: 100%;
	max-width: 30rem;
	margin-top: 4rem;
	padding-left: 2.5rem;
	border: #000
}

.testride--datepicker-container [datepicker] {
	margin: 1rem auto
}

.testride--datepicker-container [datepicker] .datepicker-inline {
	margin: 0 auto;
	min-width: 220px;
	width: 33.5rem
}

.testride--datepicker-container [datepicker] .datepicker {
	padding: 0
}

.testride--datepicker-container [datepicker] .datepicker .datepicker-switch {
	color: #000;
	height: 4.5rem;
	text-transform: uppercase;
	font-family: "NotoSans-Bold",sans
}

.testride--datepicker-container [datepicker] .datepicker .next,.testride--datepicker-container [datepicker] .datepicker .prev {
	font-size: 1.1rem;
	font-family: "cta-icon"
}

.testride--datepicker-container [datepicker] .datepicker .next::before {
	content: "\e93b"
}

.testride--datepicker-container [datepicker] .datepicker .prev::before {
	content: "\e901"
}

.testride--datepicker-container [datepicker] .datepicker table {
	border-spacing: .2rem;
	border-collapse: separate
}

.testride--datepicker-container [datepicker] .datepicker .table-condensed thead tr:first-of-type {
	outline: 1px solid #000
}

.testride--datepicker-container [datepicker] .datepicker .table-condensed thead tr:first-of-type .next,.testride--datepicker-container [datepicker] .datepicker .table-condensed thead tr:first-of-type .prev {
	color: #000
}

.testride--datepicker-container [datepicker] .datepicker .table-condensed thead tr:first-of-type th:hover {
	background: none;
	border: none;
	padding: 0
}

.testride--datepicker-container [datepicker] .datepicker .table-condensed thead th {
	background-color: transparent
}

.testride--datepicker-container [datepicker] .datepicker table tr td,.testride--datepicker-container [datepicker] .datepicker table tr th {
	background-color: rgba(180,180,180,0.2);
	border-radius: 0;
	min-width: 4.5rem;
	height: 4.5rem;
	font-size: 1.6rem;
	font-weight: 700
}

.testride--datepicker-container [datepicker] .datepicker table tr td.day,.testride--datepicker-container [datepicker] .datepicker table tr th.day {
	font-family: "NotoSans-Bold",sans;
	color: #000
}

.testride--datepicker-container [datepicker] .datepicker table tr td.active.day,.testride--datepicker-container [datepicker] .datepicker table tr th.active.day {
	background-color: #ff6600;
	border-color: transparent
}

.testride--datepicker-container [datepicker] .datepicker table tr td.today.day,.testride--datepicker-container [datepicker] .datepicker table tr th.today.day {
	background-color: #ff6600
}

.testride--datepicker-container [datepicker] .datepicker table tr td.new.day,.testride--datepicker-container [datepicker] .datepicker table tr td.old.day,.testride--datepicker-container [datepicker] .datepicker table tr th.new.day,.testride--datepicker-container [datepicker] .datepicker table tr th.old.day {
	background-color: transparent;
	opacity: 0
}

.testride--datepicker-container [datepicker] .datepicker table tr td.disabled.day,.testride--datepicker-container [datepicker] .datepicker table tr th.disabled.day {
	background-color: transparent
}

.testride--datepicker-container [datepicker] .datepicker table tbody tr td {
	border: 2px solid #fff
}

.ie11 .testride--datepicker-container [datepicker] .datepicker table {
	border-collapse: collapse;
	width: 99%
}

.ie11 .testride--datepicker-container [datepicker] .datepicker .table-condensed thead tr:first-of-type {
	border: 1px solid #000;
	outline: none
}

.firefox .testride--datepicker-container [datepicker] .datepicker table tr td.day,.firefox .testride--datepicker-container [datepicker] .datepicker table tr th.day,.firefox .testride--datepicker-container [datepicker] .datepicker .datepicker-switch {
	font-family: "NotoSans-Regular",sans
}

@media (min-width: 320px) {
	.testride-datepicker-container {
		width: 90%
	}
}

@media (max-width: 768px) {
	.testride-datepicker .datepicker-inline {
		margin: 0
	}

	.testride-datepicker .btn,.testride-datepicker .button {
		max-width: none
	}
}

@media (max-width: 320px) {
	.testride--datepicker-container [datepicker] .datepicker table tr td,.testride--datepicker-container [datepicker] .datepicker table tr th {
		min-width: 4rem;
		height: 4rem;
		font-size: 1.4rem;
		font-weight: 700
	}

	.testride--datepicker-container [datepicker] .datepicker-inline {
		width: 30rem
	}
}

.triage--hidden {
	display: none !important
}

.triage__static-billboard {
	color: #fff;
	text-transform: uppercase;
	position: relative;
	overflow: hidden
}

.triage__static-billboard__details {
	padding: 4rem 0 0 3rem;
	width: 70%
}

.triage__static-billboard__details--headline {
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.triage__static-billboard__details--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.triage__static-billboard__details--headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.triage__static-billboard__details--subheading {
	text-transform: none;
	letter-spacing: 0.1rem;
	margin-top: 1.4rem
}

@media screen and (min-width: 320px) {
	.triage__static-billboard__details--subheading {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.triage__static-billboard__details--subheading {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.triage__static-billboard__image {
	width: 95%;
	margin-top: 2rem
}

.triage__main-content {
	background: url("../../images/test-ride-triage/main-content-bg-mob.jpg");
	background-size: cover;
	padding-top: 4.2rem;
	padding-bottom: 8rem;
	overflow: hidden
}

.triage__main-content--headline {
	display: block;
	text-transform: uppercase;
	text-align: center;
	width: 70%;
	margin: 0 auto
}

@media screen and (min-width: 320px) {
	.triage__main-content--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.triage__main-content--headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.triage__main-content--description {
	text-align: center;
	width: 70%;
	margin: 0.5rem auto 2rem auto
}

@media screen and (min-width: 320px) {
	.triage__main-content--description {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.triage__main-content--description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.triage__main-content--no-license {
	text-align: center
}

.triage__main-content--no-license .triage__button {
	text-align: left;
	margin: 2.5rem auto 0 auto;
	padding-right: 9rem
}

.triage__main-content--no-license .triage__button:after {
	right: 2.5rem
}

.triage__main-content--jumpstart {
	padding-top: 8rem
}

.triage__buttons {
	margin: 0 auto;
	overflow: hidden;
	text-align: center
}

.triage__buttons-wrap {
	display: inline-block;
	width: 16rem
}

.triage__cta {
	margin-top: 2.5rem;
	min-width: 225px
}

.triage__cta .cta-label {
	min-width: 155px
}

.triage__button .cta-label {
	min-width: 79px
}

.triage__button:hover {
	color: #fff;
	background: #000
}

@media screen and (max-width: 320px) {
	.triage__button .cta-label {
		min-width: 59px
	}

	.triage__buttons-wrap {
		display: inline-block;
		width: 15rem
	}
}

@media screen and (min-width: 768px) {
	.triage__static-billboard__details {
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		width: 45%;
		padding: 0 0 0 5rem
	}

	.triage__static-billboard__details--headline {
		letter-spacing: 0.2rem
	}

	.triage__static-billboard__details--price {
		margin-top: 0.6rem
	}

	.triage__static-billboard__image {
		width: 75%;
		float: right;
		margin-top: 0;
		padding: 0 2rem 2rem 0
	}

	.triage__main-content {
		background-size: contain;
		margin-top: 0;
		padding-top: 8rem
	}

	.triage__main-content--headline,.triage__main-content--description {
		margin-bottom: 1rem
	}

	.triage__main-content--no-license {
		display: flex;
		overflow: hidden
	}

	.triage__main-content--find-class {
		border-right: 1px solid #202020
	}

	.triage__main-content--find-class,.triage__main-content--jumpstart {
		display: flex;
		flex-direction: column;
		padding: 4.5rem 0
	}

	.triage__main-content--find-class .triage__main-content--headline,.triage__main-content--jumpstart .triage__main-content--headline {
		max-width: 41.5rem
	}

	.triage__main-content--find-class .triage__main-content--description,.triage__main-content--jumpstart .triage__main-content--description {
		max-width: 41.5rem;
		margin-top: 1rem;
		flex: 1 0 auto
	}

	.triage__main-content--description {
		margin-bottom: 3.3rem
	}

	.triage__buttons-wrap {
		display: inline-block;
		width: 18rem
	}
}

.rtl .triage__static-billboard__details--headline,.rtl .triage__static-billboard__details--subheading {
	float: right;
	clear: both
}

.rtl .triage__button {
	clear: none;
	padding: 1.55rem 5.6rem 1.55rem 1.5rem
}

.tr-form {
	background-color: #fff;
	text-align: center;
	padding-top: 2rem !important;
	padding-bottom: 2rem !important;
	overflow: hidden
}

.tr-form__headline {
	text-transform: uppercase;
	margin-bottom: 2rem
}

@media screen and (min-width: 320px) {
	.tr-form__headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.tr-form__headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.tr-form__form {
	width: 90%;
	max-width: 30rem;
	margin: 0 auto;
	text-align: left
}

.tr-form__form--hidden {
	display: none !important
}

.tr-form__form--label {
	z-index: 0;
	margin: 0;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	-webkit-transform: translate3d(0, -50%, 0);
	-moz-transform: translate3d(0, -50%, 0);
	-ms-transform: translate3d(0, -50%, 0);
	-o-transform: translate3d(0, -50%, 0);
	transform: translate3d(0, -50%, 0);
	-webkit-transition: transform 0.25s ease-out;
	-moz-transition: transform 0.25s ease-out;
	-ms-transition: transform 0.25s ease-out;
	-o-transition: transform 0.25s ease-out;
	transition: transform 0.25s ease-out;
	padding-left: 2rem;
	padding-top: 1rem
}

@media screen and (min-width: 320px) {
	.tr-form__form--label {
		font-size: 1.6rem;
		line-height: 1.6rem
	}
}

.tr-form__form--text-input {
	margin-top: 1rem;
	display: block;
	padding: 1rem 2rem;
	padding-right: 2.85rem;
	width: 100%;
	position: relative;
	background: transparent 0 0 repeat url(data:image/gif;
	base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);border: none
}

.tr-form__form--text-input.input-sup+.tr-form__form--input-border+.tr-form__form--label {
	-webkit-transform: translateY(-130%);
	-moz-transform: translateY(-130%);
	-ms-transform: translateY(-130%);
	-o-transform: translateY(-130%);
	transform: translateY(-130%);
	-webkit-transform: translate3d(0, -130%, 0);
	-moz-transform: translate3d(0, -130%, 0);
	-ms-transform: translate3d(0, -130%, 0);
	-o-transform: translate3d(0, -130%, 0);
	transform: translate3d(0, -130%, 0)
}

.tr-form__form--text-input:focus+.tr-form__form--input-border+.tr-form__form--label {
	-webkit-transform: translateY(-130%);
	-moz-transform: translateY(-130%);
	-ms-transform: translateY(-130%);
	-o-transform: translateY(-130%);
	transform: translateY(-130%);
	-webkit-transform: translate3d(0, -130%, 0);
	-moz-transform: translate3d(0, -130%, 0);
	-ms-transform: translate3d(0, -130%, 0);
	-o-transform: translate3d(0, -130%, 0);
	transform: translate3d(0, -130%, 0)
}

.tr-form__form--text-input-error+.tr-form__form--input-border {
	stroke: #ff0000
}

.tr-form__form--text-input-error+.tr-form__form--input-border+.tr-form__form--label {
	color: #ff0000
}

.tr-form__form--input {
	position: relative;
	padding: 4px;
	margin-top: 3rem;
	max-width: 30rem;
	margin: 3rem auto
}

.tr-form__form--input-border {
	position: absolute;
	top: 4px;
	left: 0;
	width: 100%;
	height: 100%;
	stroke-dasharray: 1500, 0;
	-webkit-transition: stroke-dasharray 0.15s ease-out;
	-moz-transition: stroke-dasharray 0.15s ease-out;
	-ms-transition: stroke-dasharray 0.15s ease-out;
	-o-transition: stroke-dasharray 0.15s ease-out;
	transition: stroke-dasharray 0.15s ease-out
}

.tr-form__form--checkbox-wrapper:after {
	background: none;
	width: 0;
	height: 0
}

.tr-form__form--checkbox {
	display: none
}

.tr-form__form--checkbox+.tr-form__form--checkbox-placeholder {
	background-color: #fff;
	border: 1px solid #000;
	padding: 1rem !important;
	cursor: pointer;
	text-indent: -9999px;
	font-size: 0
}

.tr-form__form--checkbox:checked+.tr-form__form--checkbox-placeholder {
	background: url("../../images/checkbox-check.png") no-repeat;
	background-size: 65%;
	background-position: 0.35rem 0.35rem
}

.tr-form__form--checkbox-label {
	float: right;
	width: 89%
}

.tr-form__form--submit {
	text-align: left;
	position: relative;
	max-width: 30rem;
	margin-top: 3.5rem;
	padding-left: 2.5rem;
	border: #000;
	color: #fff
}

.testride-contact__hidden {
	display: none
}

.testride-contact--error {
	color: #ff0000;
	margin: 0 0 1rem 0
}

.testride-confirmation__hidden {
	display: none
}

.confirmation {
	padding: 2.5rem 0
}

.confirmation--paint-bg {
	background: #fff url("../../images/test-ride-confirmation/customer-info-bg.jpg");
	background-size: cover
}

.confirmation__container {
	padding: 0;
	max-width: 56rem
}

.confirmation__group {
	float: none;
	max-width: 114.5rem;
	margin: 0 auto;
	overflow: hidden
}

.confirmation__message {
	width: 80%;
	margin: 0 auto;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	letter-spacing: 0.2rem
}

.confirmation__message .confirmation__headline {
	display: block;
	margin-bottom: 2.5rem
}

@media screen and (min-width: 320px) {
	.confirmation__message .confirmation__headline {
		font-size: 3.8rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.confirmation__message .confirmation__headline {
		font-size: 4.5rem;
		line-height: 5.2rem
	}
}

.confirmation__message .confirmation__headline--small {
	display: block
}

@media screen and (min-width: 320px) {
	.confirmation__message .confirmation__headline--small {
		font-size: 1.8rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.confirmation__message .confirmation__headline--small {
		font-size: 3.2rem;
		line-height: 3.6rem
	}
}

.confirmation__message .confirmation__description {
	text-transform: none;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.confirmation__message .confirmation__description {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.confirmation__message .confirmation__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.confirmation__bike-img {
	margin: 2rem auto 0 auto;
	display: block;
	max-width: 55rem;
	width: 100%
}

.confirmation__details {
	padding-top: 0.5rem;
	padding-bottom: 1.5rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem
}

.confirmation__details--title {
	color: #8d8d8d;
	margin-top: 2rem;
	display: block
}

@media screen and (min-width: 320px) {
	.confirmation__details--title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.confirmation__details--selection {
	color: #fff;
	display: block
}

@media screen and (min-width: 320px) {
	.confirmation__details--selection {
		font-size: 2.4rem;
		line-height: 3.3rem
	}
}

.confirmation__details--dealer-info {
	color: #fff;
	text-transform: none;
	letter-spacing: 0;
	margin-bottom: 1.5rem
}

@media screen and (min-width: 320px) {
	.confirmation__details--dealer-info {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.confirmation__details--link {
	color: #fff;
	font-family: "NotoSans-Bold",sans
}

.confirmation__details--highlight {
	font-weight: bold;
	color: #fff
}

.confirmation__customer-info {
	padding: 0 1.5rem 3.5rem 1.5rem
}

.confirmation__customer-info--title {
	text-transform: uppercase;
	display: block;
	margin-top: 6rem
}

@media screen and (min-width: 320px) {
	.confirmation__customer-info--title {
		font-size: 2.1rem;
		line-height: 2.9rem
	}
}

.confirmation__customer-info--title:first-child {
	margin-top: 3.5rem
}

.confirmation__customer-info--details {
	margin-top: 1.5rem
}

@media screen and (min-width: 320px) {
	.confirmation__customer-info--details {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.confirmation__customer-info--instruction {
	font-family: "NotoSans-Bold",sans
}

.confirmation__customer-info--list {
	padding-left: 1.8rem
}

.confirmation__customer-info ul {
	padding-left: 1.8rem;
	margin-top: 1.5rem
}

@media screen and (min-width: 320px) {
	.confirmation__customer-info ul {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.confirmation {
		padding-top: 6rem
	}

	.confirmation__group {
		margin: 0 auto;
		padding: 0 2.5rem
	}

	.confirmation__description {
		max-width: 105rem;
		margin: 0 auto
	}

	.confirmation__message {
		margin-bottom: 6.5rem
	}

	.confirmation__details {
		padding-left: 3rem;
		padding-bottom: 8rem
	}

	.confirmation__customer-info {
		padding-bottom: 3.5rem
	}

	.confirmation__customer-info--details {
		margin-top: 1rem
	}

	.confirmation__customer-info--content {
		flex: 1 0 auto
	}

	.confirmation__customer-info ul {
		margin-top: 1rem
	}

	.confirmation__container:first-child {
		padding-right: 3rem
	}

	.confirmation--paint-bg .confirmation__container {
		padding: 2rem 4rem
	}

	.confirmation--paint-bg .confirmation__container:first-child {
		padding-left: 0
	}

	.confirmation--paint-bg .confirmation__container:last-child {
		padding-right: 0
	}

	.confirmation--paint-bg .confirmation__container--info {
		display: flex;
		flex-direction: column
	}
}

.confirmation .promotional {
	background: black;
	text-align: center;
	padding: 0;
	clear: both
}

.confirmation .promotional [class^='col-']:nth-child(1) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-1.jpg");
	background-size: cover
}

.confirmation .promotional [class^='col-']:nth-child(2) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-2.jpg");
	background-size: cover
}

.confirmation .promotional [class^='col-']:nth-child(3) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-3.jpg");
	background-size: cover
}

.confirmation .promotional__item-title,.confirmation .promotional__item-subtitle {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #000
}

.confirmation .promotional__item-desc {
	min-height: 7.2rem;
	margin-bottom: 2.5rem;
	margin-top: 1.5rem
}

.confirmation .promotional__item-top {
	position: relative
}

.confirmation .promotional__item-images {
	width: 100%
}

.confirmation .promotional__item-text {
	max-width: 31rem;
	min-height: 33rem;
	margin: 0 auto;
	padding: 5.5rem 0 5rem 0
}

.confirmation .promotional__item-content {
	height: 100%
}

.confirmation .promotional__item-content .h3:nth-child(2),.confirmation .promotional__item-content .h5:nth-child(2) {
	margin-bottom: 1.5rem
}

.confirmation .promotional__item-tag {
	position: absolute;
	bottom: 0;
	background: rgba(0,0,0,0.7);
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	color: white;
	text-transform: uppercase
}

.confirmation .promotional__item-link {
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	padding-right: 2.5rem;
	position: relative
}

.confirmation .promotional__item-link:after {
	content: '';
	display: inline-block;
	background: url("../../images/cta-arrow-right.png");
	width: 1.6rem;
	height: 1rem;
	background-size: 100%;
	position: absolute;
	top: 50%;
	right: 0;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

@media screen and (min-width: 768px) {
	.confirmation .promotional {
		padding: 1.5rem
	}

	.confirmation .promotional [class^='col-'] {
		display: flex;
		flex-direction: column;
		flex: 1
	}

	.confirmation .promotional .row {
		display: flex;
		justify-content: center
	}

	.confirmation .promotional__item {
		display: flex;
		flex: 1;
		flex-direction: column
	}

	.confirmation .promotional__item-text {
		padding-bottom: 8rem
	}
}

@media screen and (min-width: 768px) {
	.ie .confirmation .promotional__item {
		display: block;
		flex: auto;
		overflow: hidden
	}
}

.breadcrumb {
	transition: all .3s linear;
	-webkit-animation-iteration-count: 1;
	-moz-animation-iteration-count: 1;
	-ms-animation-iteration-count: 1;
	-o-animation-iteration-count: 1;
	animation-iteration-count: 1;
	width: 100%;
	position: fixed;
	left: 0;
	background-color: #000;
	z-index: 200;
	top: 65px;
	padding: 2rem
}

.breadcrumb::before {
	content: "";
	display: block;
	position: absolute;
	background: #000;
	width: 100%;
	height: 100px;
	top: -100px;
	left: 0
}

.breadcrumb__container {
	max-width: 1440px;
	margin: 0 auto
}

.breadcrumb__steps {
	display: inline-block;
	margin-right: 0.5rem
}

.breadcrumb__step {
	color: #fff;
	display: inline-block;
	padding: 0.4rem;
	border: 2px solid #fff;
	border-radius: 100px;
	font-family: "NotoSans-Bold",sans;
	margin-right: 1.5rem;
	position: relative;
	background-color: #fff
}

@media screen and (min-width: 320px) {
	.breadcrumb__step {
		font-size: 1.2rem;
		line-height: 1.2rem
	}
}

.breadcrumb__step:after {
	content: '';
	position: absolute;
	height: 0.2rem;
	width: 1rem;
	background-color: #fff;
	right: -1.6rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.breadcrumb__step:last-child {
	margin-right: 0
}

.breadcrumb__step:last-child:after {
	width: 0;
	height: 0;
	background-color: transparent
}

.breadcrumb__step--selected {
	background-color: #ff6600 !important;
	border-color: #ff6600;
	color: #000
}

.breadcrumb__titles {
	display: inline-block
}

.breadcrumb__title {
	display: none;
	letter-spacing: 0.1rem;
	color: #fff;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.breadcrumb__title {
		font-size: 1.3rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.breadcrumb__title {
		font-size: 3rem;
		line-height: 3.2rem
	}
}

.breadcrumb__title--active {
	display: inline-block
}

.breadcrumb__hidden {
	display: none
}

@media screen and (min-width: 768px) {
	.breadcrumb {
		padding: 2rem;
		top: 0
	}

	.breadcrumb__step {
		margin-right: 3rem;
		padding: 0.5rem
	}

	.breadcrumb__step:after {
		width: 2rem;
		right: -2.85rem
	}

	.breadcrumb__titles {
		display: block;
		margin: 0 0 0 4rem;
		display: inline-block
	}
}

.testride__cta {
	padding: 1.55rem 1rem 1.55rem 1.5rem;
	width: 100%
}

@media screen and (min-width: 768px) {
	.testride__cta {
		max-width: 30rem
	}
}

.testride__cta .cta-label {
	min-width: 225px
}

.testride__cta:hover {
	padding-right: 1rem !important
}

@media screen and (min-width: 768px) {
	.testride__cta:hover {
		padding-right: inherit
	}
}

.testride__cta:focus {
	outline: none
}

.testride__cta--select-date {
	min-width: 32.5rem
}

.testride__cta--select-date .cta-label {
	min-width: 250px
}

.testride-dealers--cta.cta-btn-primary.selectedDealer::after {
	content: "";
	background-color: #f60;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease
}

.testride-dealers--cta.cta-animation-expand-right.cta-btn-third::after {
	content: "";
	background-color: #000;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease
}

.testride__button {
	position: relative;
	border-radius: 0;
	font-size: 1.6rem;
	letter-spacing: 0.1rem;
	outline: none !important;
	padding: 1.5rem;
	text-transform: uppercase;
	min-width: 30rem;
	text-align: left;
	padding-left: 2rem;
	display: inline-block;
	cursor: pointer;
	font-family: "NotoSans-Bold",sans
}

.testride__button:hover {
	min-width: 30rem;
	text-decoration: none
}

.testride__button--default {
	color: #9e9b9b;
	background-color: #dfdfdf;
	cursor: not-allowed
}

.testride__button--default:hover {
	color: #9e9b9b;
	background-color: #dfdfdf
}

.testride__button--default:focus {
	outline: none
}

.testride__button--selected {
	color: #000;
	background-color: #f60
}

.testride__button--selected:hover {
	color: #000;
	background-color: #f60
}

.testride__button--active {
	color: #fff;
	background-color: #000
}

.testride__button--active:hover {
	color: #fff;
	background-color: #000
}

.testride__button span {
	font-size: 70%
}

.testride__button .cta-label {
	min-width: 225px
}

@media (max-width: 320px) {
	.testride__cta--select-date {
		min-width: 30rem
	}

	.testride__cta--select-date .cta-label {
		min-width: 22.5px
	}
}

.testride__form {
	padding: 0 2rem
}

@media screen and (min-width: 768px) {
	.testride__form {
		padding: 0
	}
}

.testride__form--header {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	line-height: 5rem;
	font-weight: normal
}

@media screen and (min-width: 320px) {
	.testride__form--header {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.testride__form--header {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.testride__form--field {
	margin: 2rem auto;
	position: relative
}

@media screen and (min-width: 768px) {
	.testride__form--field {
		width: 30rem
	}
}

.testride__form--field input {
	width: 100%;
	border: 0.2rem solid #000;
	padding: 1.2rem 5rem 1.2rem 2rem;
	font-size: 1.6rem
}

.testride__form--field input.parsley-error {
	border-color: #ad181f
}

.testride__form--field label {
	width: 100%;
	display: inline-block;
	margin: 0 0 .5rem 0;
	text-transform: uppercase;
	font-weight: bold;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media screen and (min-width: 320px) {
	.testride__form--field label {
		font-size: 1.6rem;
		line-height: 1.6rem
	}
}

.testride__form .parsley-errors-list {
	list-style: none;
	padding-left: 0
}

.testride__form .parsley-errors-list li {
	color: #ad181f;
	padding-left: 1.3rem;
	position: relative;
	font-size: 1.2rem;
	margin-top: 1rem
}

.testride__form .parsley-errors-list li:before {
	content: '';
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/find-a-dealer/error-icon.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.testride__form .parsley-errors-list li {
		margin-top: 2rem;
		padding-left: 1.5rem
	}

	.testride__form .parsley-errors-list li:before {
		width: 1rem;
		height: 1rem
	}
}

.firefox .testride__form--field label {
	font-weight: normal
}

.catalog {
	padding: 51px 0 74px 0;
	background: #fff url("../../images/catalog/mobile-bg.jpg") no-repeat;
	background-size: contain
}

.catalog .container {
	padding-left: 15px;
	padding-right: 15px
}

.catalog__header {
	padding-bottom: 32px
}

.catalog__header-text {
	display: block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-align: center;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.catalog__header-text {
		font-size: 3rem;
		line-height: 1.2
	}
}

@media screen and (min-width: 768px) {
	.catalog__header-text {
		font-size: 4.5rem;
		line-height: 1.2
	}
}

.catalog__header-description {
	display: block;
	margin-top: 17px;
	text-align: center
}

@media screen and (min-width: 320px) {
	.catalog__header-description {
		font-size: 1.4rem;
		line-height: 1.3
	}
}

@media screen and (min-width: 768px) {
	.catalog__header-description {
		font-size: 1.6rem;
		line-height: 1.4
	}
}

.catalog__content {
	margin: 0 auto;
	max-width: 814px
}

.catalog__item {
	padding-top: 15px;
	padding-bottom: 15px;
	overflow: hidden
}

.catalog__item-content {
	display: inline-block;
	width: 58.55%
}

.catalog__thumbnail {
	max-width: 123px;
	height: 155px;
	margin-right: 5.22%;
	float: left
}

.catalog__title {
	font-size: 2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase
}

.catalog__button-wrapper {
	position: relative;
	width: 100%;
	text-transform: uppercase;
	float: left
}

.catalog__view-btn {
	display: inline-block;
	padding: 15px 20px;
	font-family: "NotoSans-Bold",sans;
	letter-spacing: 1.2px;
	min-width: 204px
}

.catalog__view-btn:hover {
	text-decoration: none
}

.rtl .catalog__button-wrapper .catalog__view-btn {
	float: right
}

@media only screen and (min-width: 768px) {
	.catalog {
		background: #fff url("../../images/catalog/bg.jpg");
		background-size: cover
	}

	.catalog__view-btn .cta-icon {
		right: 7px
	}

	.catalog__view-btn .cta-icon::after {
		content: "";
		display: block;
		width: 12px;
		height: 16px;
		background: url("../../images/download.png");
		background-size: cover
	}
}

@media only screen and (max-width: 480px) {
	.catalog__item-content {
		width: 52%
	}

	.catalog__view-btn {
		min-width: 154px
	}
}

@media only screen and (min-width: 768px) {
	.th-th .global-navigation__dropdown {
		left: -90px
	}
}

@media only screen and (min-width: 992px) {
	.th-th .global-navigation__dropdown {
		left: -70px
	}
}

.global-navigation {
	width: 100%;
	max-width: 1440px;
	position: fixed;
	z-index: 1000;
	transition: none;
	backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	-ms-transform: translate3d(0, 0, 0);
	-o-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0)
}

.global-navigation .hide {
	display: none
}

.global-navigation--not-sticky {
	position: relative
}

.ie .global-navigation {
	backface-visibility: visible
}

.global-navigation--wrapper {
	position: relative;
	max-width: 1440px;
	min-height: 70px;
	margin: 0 auto
}

@media (min-width: 768px) {
	.global-navigation,.global-navigation--wrapper {
		height: 113px;
		z-index: 9999
	}
}

.global-navigation__mobile-motorcycles-disclaimer-text {
	color: #7c7c7c
}

@media (min-width: 768px) {
	.global-navigation__mobile-motorcycles-disclaimer-text {
		margin: 0 20rem 5rem 20rem
	}
}

@media (min-width: 768px) {
	.global-navigation {
		transition: transform 0.3s linear
	}
}

.global-navigation--unpinned {
	-webkit-transform: translate3d(0, -100%, 0);
	-moz-transform: translate3d(0, -100%, 0);
	-ms-transform: translate3d(0, -100%, 0);
	-o-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0)
}

.global-navigation--not-top {
	position: fixed;
	position: -ms-device-fixed;
	left: 0;
	right: 0;
	margin: auto
}

.global-navigation__nav-bar {
	width: 100%;
	background-color: #000;
	z-index: 9999
}

.global-navigation__nav-bar--unpinned {
	-webkit-transform: translate3d(0, -100%, 0);
	-moz-transform: translate3d(0, -100%, 0);
	-ms-transform: translate3d(0, -100%, 0);
	-o-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
	opacity: 0
}

.global-navigation__nav-bar--not-top {
	position: fixed;
	top: 0;
	opacity: 1;
	transition: all 300ms cubic-bezier(0.42, 0, 0.42, 1.03)
}

@media (min-width: 768px) {
	.global-navigation__nav-bar-container {
		width: 100%
	}
}

@media (min-width: 800px) {
	.global-navigation__nav-bar-container {
		width: 100%;
		padding-left: calc(43/1440 * 100%);
		padding-right: calc(43/1440 * 100%)
	}
}

@media screen and (min-width: 768px) and (max-width: 1440px) {
	.global-navigation__nav-bar-container .col-sm-12 .pull-right .global-navigation__nav-menu .global-navigation__nav-menu-item:last-child .global-navigation__dropdown {
		left: auto;
		right: -40px
	}

	.global-navigation__nav-bar-container .col-sm-12 .pull-right .global-navigation__nav-menu .global-navigation__nav-menu-item:nth-last-child(2) .global-navigation__dropdown {
		left: auto;
		right: -60px
	}
}

.global-navigation__mobile-header-hr {
	margin-top: 6rem
}

.global-navigation__logo {
	display: block;
	float: left;
	margin-top: 15px;
	margin-right: 15px;
	width: 61px;
	height: 48px;
	text-indent: -1000px;
	background: url("../../svg/h-d-logo.svg") no-repeat;
	background-size: 61px 48px
}

@media (min-width: 768px) {
	.global-navigation__logo {
		width: 84px;
		height: 70px;
		margin-top: 15px;
		margin-right: 25px;
		background-size: 84px 70px
	}
}

@media (min-width: 992px) {
	.global-navigation__logo {
		margin-right: 30px
	}
}

@media (max-width: 767px) {
	.global-navigation__logo {
		background-size: 61px 38px
	}
}

.global-navigation__icon {
	margin-top: -2px;
	margin-right: 10px
}

.global-navigation__icon--active {
	display: none
}

.global-navigation__icon--right {
	margin-right: 0;
	margin-left: 5px
}

.global-navigation__nav-menu {
	margin: 0;
	padding: 0;
	list-style: none;
	display: none
}

@media (min-width: 768px) {
	.global-navigation__nav-menu {
		display: block
	}
}

.global-navigation__nav-menu__top-nav {
	position: absolute;
	right: 4rem;
	top: 1rem;
	max-height: 2rem
}

@media (max-width: 768px) {
	.global-navigation__nav-menu__top-nav {
		display: none
	}
}

@media (min-width: 768px) {
	.global-navigation__nav-menu__top-nav {
		display: block
	}
}

.global-navigation__nav-menu__top-nav a {
	font-family: "NotoSans-Regular",sans !important;
	margin-top: 0rem !important;
	margin-bottom: 0rem !important;
	color: #7f7f7f !important
}

.global-navigation__nav-menu__top-nav .top-nav-sub-menu-item {
	color: #fff !important;
	cursor: pointer !important;
	padding: 0 !important;
	margin: 0px !important;
	font-size: 1rem;
	text-transform: none
}

.global-navigation__nav-menu__top-nav .top-nav-sub-menu-item:hover {
	color: #f60 !important
}

.global-navigation__nav-menu__top-nav .top-nav-sub-menu-item .cta-icon {
	top: 2px !important
}

.global-navigation__nav-menu__top-nav .login-dropdown {
	padding: 21px 13px 7px 24px !important;
	margin-top: -12px;
	width: 100%;
	min-width: 90px;
	background: #000
}

@media screen and (max-width: 895px) {
	.global-navigation__nav-menu__top-nav .login-dropdown {
		padding: 21px 13px 15px 24px !important
	}
}

.global-navigation__nav-menu__top-nav .login-dropdown .global-navigation__dropdown-item {
	margin-top: 0px
}

@media screen and (max-width: 895px) {
	.global-navigation__nav-menu__top-nav .login-dropdown .global-navigation__dropdown-item {
		margin-top: 4px
	}
}

.global-navigation__nav-menu__top-nav .login-dropdown a {
	color: white !important
}

.global-navigation__nav-menu__top-nav .login-text {
	text-decoration: none;
	font-size: 1rem
}

@media screen and (max-width: 895px) {
	.global-navigation__nav-menu__top-nav .login-text {
		font-size: 0.85rem
	}
}

.global-navigation__nav-menu__top-nav a:hover .login-text {
	color: #f60;
	cursor: pointer
}

.global-navigation__nav-menu__top-nav a:hover .cta-icon {
	color: #f60 !important
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Search {
	top: 2px
}

.global-navigation__nav-menu__top-nav .sign-in-greeting-text {
	z-index: 10;
	text-decoration: none;
	bottom: 3px;
	top: 0px
}

.global-navigation__nav-menu__top-nav .load-gigya-screenset {
	z-index: 10;
	text-decoration: none;
	bottom: 3px;
	top: 0px
}

.global-navigation__nav-menu__top-nav .global-navigation__nav-menu:first-child a {
	margin-right: 0
}

.global-navigation__nav-menu__top-nav .global-navigation__nav-menu-item {
	margin-right: 12px;
	margin-left: 12px
}

.global-navigation__nav-menu__top-nav .global-navigation__nav-menu-item .cta-link {
	padding-right: .75rem
}

.global-navigation__nav-menu__top-nav .global-navigation__nav-menu-item .cta-link .cta-icon {
	right: -9px
}

.global-navigation__nav-menu__top-nav .global-navigation__menu-divider {
	margin-top: 0rem;
	left: -1px;
	background-color: #777;
	height: 1.5rem;
	margin-right: 5px;
	margin-left: 20px;
	opacity: .6
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Find-A-Dealer {
	padding-right: 0 !important
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Find-A-Dealer .cta-icon {
	margin-top: -5px !important;
	left: 2px !important
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Find-A-Dealer .cta-icon:after {
	font-size: 1.7rem;
	margin-top: 1px
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Search {
	padding-right: 0 !important;
	top: 0px
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Search .cta-icon {
	width: 1.6rem;
	margin-top: -3px !important
}

.global-navigation__nav-menu__top-nav .cta-icon__H-D-Search .cta-icon::after {
	content: "\e917" !important;
	font-size: 1.4rem
}

.global-navigation__nav-menu__top-nav .cta-motorcycle-price .cta-icon {
	background: pink
}

.global-navigation__nav-menu__top-nav .cta-motorcycle-price .cta-icon::after {
	content: "\e917" !important
}

.global-navigation__nav-menu__top-nav .cta-icon--left .cta-icon {
	left: 2px
}

.global-navigation__nav-menu__top-nav .global-navigation__nav-menu-item .global-navigation__nav-menu-link {
	font-size: 1rem
}

@media screen and (min-width: 768px) and (max-width: 895px) {
	.global-navigation__nav-menu__top-nav .global-navigation__nav-menu-item .global-navigation__nav-menu-link {
		font-size: 0.8rem
	}
}

.global-navigation__nav-menu__top-nav .cta-link {
	padding-right: 2rem
}

.global-navigation__nav-menu__top-nav .cta-icon {
	width: 13px;
	margin-top: -4px !important
}

@media screen and (min-width: 768px) and (max-width: 895px) {
	.global-navigation__nav-menu__top-nav .cta-icon {
		margin-top: -4px !important
	}
}

.global-navigation .cta-icon__H-D-Profile {
	padding-right: 0 !important
}

.global-navigation .cta-icon__H-D-Profile .cta-icon {
	width: 1.75rem;
	padding-top: 10px
}

@media screen and (max-width: 767px) {
	.global-navigation .cta-icon__H-D-Profile .cta-icon {
		top: -3px
	}
}

.global-navigation .cta-icon__H-D-Profile .cta-icon:after {
	font-family: 'cta-icon-new3' !important;
	content: "A";
	padding-top: 5px;
	font-size: 1.5rem
}

.global-navigation__nav-menu-item {
	position: relative;
	display: block;
	float: left;
	font-family: "NotoSans-Bold",sans;
	font-size: 10px;
	margin-right: 20px;
	text-transform: uppercase
}

@media (min-width: 992px) {
	.global-navigation__nav-menu-item {
		font-size: 12px
	}
}

@media (min-width: 768px) and (max-width: 800px) {
	.desktop .global-navigation__nav-menu-item {
		font-size: 11px
	}
}

@media screen and (max-width: 1024px) {
	.global-navigation__nav-menu-item {
		margin-right: 10px
	}
}

@media (min-width: 1280px) {
	.global-navigation__nav-menu-item {
		margin-right: 30px
	}
}

.global-navigation__nav-menu-item .global-navigation__nav-menu-link {
	display: block;
	color: #fff;
	text-decoration: none;
	font-size: 12px;
	margin-top: 4rem;
	margin-bottom: 2rem;
	min-height: 22px
}

@media (min-width: 992px) {
	.global-navigation__nav-menu-item .global-navigation__nav-menu-link {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 768px) and (max-width: 895px) {
	.global-navigation__nav-menu-item .global-navigation__nav-menu-link {
		font-size: 0.9rem;
		line-height: 1.5rem
	}
}

.global-navigation__nav-menu-item .global-navigation__nav-menu-link .cta-icon {
	transition: none;
	margin-top: -3px
}

.global-navigation__nav-menu-item .global-navigation__nav-menu-link:focus,.global-navigation__nav-menu-item .global-navigation__nav-menu-link:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__nav-menu-item .current-page.menu-deactived:hover,.global-navigation__nav-menu-item .global-navigation__nav-menu-link:hover {
	color: #f60 !important;
	text-decoration: none
}

.global-navigation__nav-menu-item .current-page.menu-deactived:hover .global-navigation__icon--active,.global-navigation__nav-menu-item .global-navigation__nav-menu-link:hover .global-navigation__icon--active {
	display: inline-block
}

.global-navigation__nav-menu-item .current-page.menu-deactived:hover .global-navigation__icon--active+.global-navigation__icon,.global-navigation__nav-menu-item .global-navigation__nav-menu-link:hover .global-navigation__icon--active+.global-navigation__icon {
	display: none
}

.global-navigation .current-page,.global-navigation .active-link {
	color: #f60 !important;
	text-decoration: none
}

.global-navigation .current-page .global-navigation__icon--active,.global-navigation .active-link .global-navigation__icon--active {
	display: inline-block
}

.global-navigation .current-page .global-navigation__icon--active+.global-navigation__icon,.global-navigation .active-link .global-navigation__icon--active+.global-navigation__icon {
	display: none
}

.global-navigation .current-page .icon--arrow,.global-navigation .active-link .icon--arrow {
	color: #f60
}

.global-navigation .current-page .cta-icon:after,.global-navigation .active-link .cta-icon:after {
	color: #f60
}

.global-navigation .current-page.menu-deactived {
	color: #fff !important
}

.global-navigation .current-page.menu-deactived .global-navigation__icon {
	display: inline-block
}

.global-navigation .current-page.menu-deactived .global-navigation__icon--active {
	display: none
}

.global-navigation__nav-menu-item:last-child {
	margin-right: 0
}

.global-navigation__primary-menu {
	float: left
}

.global-navigation__primary-menu .global-navigation__nav-menu-item {
	margin-right: 15px
}

@media (min-width: 992px) {
	.global-navigation__primary-menu .global-navigation__nav-menu-item {
		margin-right: 32.5px
	}
}

.global-navigation__primary-menu .global-navigation__nav-menu-item a {
	padding-bottom: 2rem;
	padding-left: 3rem;
	padding-right: 0rem;
	transition: none
}

@media (min-width: 992px) {
	.global-navigation__primary-menu .global-navigation__nav-menu-item a {
		padding-left: 4rem;
		padding-right: 1rem
	}
}

.global-navigation__primary-menu .global-navigation__nav-menu-item a .cta-icon {
	transition: none;
	margin-top: -1rem;
	margin-left: -0.5rem
}

@media (min-width: 992px) {
	.global-navigation__primary-menu .global-navigation__nav-menu-item a .cta-icon {
		margin-left: 0rem
	}
}

.global-navigation__primary-menu .shopping-tools-dropdown a {
	margin-top: 0;
	padding-left: 5rem;
	padding-top: 1.9rem;
	padding-bottom: 1.8rem
}

.global-navigation__primary-menu .shopping-tools-dropdown a .cta-icon {
	transition: none;
	margin-top: 0;
	width: 3.4rem
}

.global-navigation__primary-menu .shopping-tools-dropdown a .cta-icon:after {
	top: 50%;
	left: 50%;
	right: auto;
	transform: translate(-50%, -50%)
}

.global-navigation__primary-menu .shopping-tools-dropdown a .global-navigation__link-out {
	height: 1rem;
	position: relative;
	top: 1px
}

.global-navigation__primary-menu .shopping-tools-dropdown a .global-navigation__link-out .cta-icon:after {
	width: 2.5rem;
	font-size: 1rem !important;
	margin-left: 0.6rem
}

.global-navigation.cta-icon__H-D-Shop .cta-icon {
	font-size: 23px
}

.global-navigation__menu-divider {
	width: 1px;
	height: 10px;
	margin-top: 43px;
	background-color: #fff
}

.global-navigation__dropdown {
	position: absolute;
	top: 100%;
	left: -40px;
	margin: 0;
	padding: 10px 40px 20px 40px;
	background-color: rgba(0,0,0,0.9);
	list-style: none;
	display: none;
	white-space: nowrap
}

@media (max-width: 767px) {
	.global-navigation__dropdown {
		display: none !important
	}
}

.global-navigation__dropdown-item {
	display: block;
	font-family: "NotoSans-Bold",sans;
	font-size: 12px;
	line-height: 20px;
	text-transform: uppercase
}

.global-navigation__dropdown-item:hover a,.global-navigation__dropdown-item.active a {
	color: #f60
}

.global-navigation__dropdown-item:hover .global-navigation__link-out .cta-icon,.global-navigation__dropdown-item.active .global-navigation__link-out .cta-icon {
	color: #f60 !important
}

.global-navigation__dropdown-item .global-navigation__icon {
	max-width: none;
	margin-right: 14px
}

.global-navigation__dropdown-item a {
	padding-top: 2rem;
	padding-bottom: 2rem;
	display: block;
	color: #fff;
	text-decoration: none
}

.global-navigation__dropdown-item a .cta-icon {
	transition: none
}

.global-navigation__dropdown-item a .cta-icon :after {
	font-size: 2rem
}

@media screen and (min-width: 992px) {
	.global-navigation__dropdown-item a:hover {
		color: #f60 !important
	}
}

@media screen and (min-width: 768px) and (max-width: 895px) {
	.global-navigation__dropdown-item a {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

@media screen and (max-width: 992px) {
	.global-navigation__dropdown-item {
		font-size: 0.9rem
	}
}

.global-navigation__motorcycles-family-menu {
	background: #202020;
	z-index: 1001;
	max-width: 1440px
}

.global-navigation__motorcycles-family-menu-container {
	overflow: auto;
	white-space: nowrap
}

@media (min-width: 768px) {
	.global-navigation__motorcycles-family-menu-container {
		width: 92%
	}
}

.global-navigation__motorcycles-family-menu-item {
	position: relative;
	display: inline-block;
	font-family: "NotoSans-Bold",sans;
	font-size: 12px;
	margin-right: 20px;
	text-transform: uppercase;
	vertical-align: top
}

.global-navigation__motorcycles-family-menu-link {
	display: block;
	color: #fff;
	line-height: 44px;
	padding-top: 3px;
	text-decoration: none;
	border-bottom: 3px solid transparent
}

.global-navigation__motorcycles-family-menu-link:focus,.global-navigation__motorcycles-family-menu-link:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__motorcycles-family-menu-link:hover {
	color: #f60;
	text-decoration: none
}

.global-navigation__motorcycles-family-menu-divider {
	width: 2px;
	height: 15px;
	margin-top: 17px;
	background-color: #fff
}

.global-navigation .active-family {
	color: #f60;
	text-decoration: none;
	border-bottom: 3px solid
}

.global-navigation__motorcycles-dropdown {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 1440px;
	background-color: #000
}

@media (max-width: 767px) {
	.global-navigation__motorcycles-dropdown {
		display: none !important
	}
}

@media (min-width: 768px) {
	.global-navigation__motorcycles-dropdown {
		display: none
	}
}

.global-navigation__motorcycles-dropdown-container {
	background-color: #000;
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	height: calc(100% - 163px);
	overflow-x: hidden
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__close-button {
	padding-bottom: 52px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__title {
	color: #fff;
	margin-bottom: 30px;
	text-transform: uppercase
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__linkWrapper {
	line-height: 1
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link {
	text-transform: uppercase;
	line-height: 1.5;
	margin-bottom: auto
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family,.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family-header {
	margin-bottom: 3rem;
	padding-right: 15px;
	color: #7f7f7f !important
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family .cta-icon,.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family-header .cta-icon {
	width: 7px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family-hdeader {
	margin-bottom: 2rem;
	padding-right: 15px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__link-family-hdeader .cta-icon {
	width: 7px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__family-title,.global-navigation__motorcycles-dropdown .motorcycles-dropdown__single-family-title {
	margin: 20px auto 40px;
	color: #fff;
	text-transform: uppercase;
	border-top: 2px solid #fff;
	border-bottom: 2px solid #fff;
	padding-top: 6px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__family-title--has-link {
	margin-bottom: 2rem
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__family-header--margin-lg {
	margin-bottom: 7rem
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__single-family-title {
	display: none;
	margin-top: 4rem;
	margin-bottom: 2rem
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycles-wrapper {
	float: left;
	display: -ms-flexbox;
	-ms-flex-flow: row wrap;
	display: flex;
	flex-flow: row wrap;
	width: 100%
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle {
	margin-bottom: 50px;
	display: -ms-flexbox;
	-ms-flex-direction: column;
	display: flex;
	flex-direction: column
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle>a {
	overflow: hidden;
	display: block;
	height: 100%;
	background-color: #202020
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-panel {
	background: #202020;
	display: -ms-flexbox;
	-ms-flex-direction: column;
	-ms-flex-pack: flex-start;
	-ms-flex: 1 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex: 1 0 auto;
	padding: 20px 15px 7px 15px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-image {
	width: 100%;
	-ms-flex-shrink: 0;
	flex-shrink: 0
}

@media (min-width: 768px) {
	.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-image {
		min-height: auto;
		min-width: 222px;
		background-color: #fff
	}
}

@media (min-width: 1440px) {
	.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-image {
		min-height: auto;
		min-width: 320px
	}
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-name {
	color: #fff;
	font-size: 2rem;
	line-height: 1;
	display: block;
	text-transform: uppercase;
	margin-bottom: 12px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-price {
	color: #fff;
	margin-bottom: auto;
	line-height: 1;
	margin-bottom: 15px
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-price span {
	font-size: 80%
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-link {
	margin-right: 20px;
	font-size: 12px;
	text-transform: uppercase
}

@media screen and (max-width: 1024px) {
	.global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle-link {
		margin-right: 10px
	}
}

.global-navigation__motorcycles-dropdown .motorcycles-dropdown__family-title {
	margin-bottom: 2rem
}

.global-navigation .about-us-dropdown .cta-link .cta-icon {
	right: -6px !important
}

.global-navigation__motorcycles-footer {
	text-align: center;
	padding-bottom: 30px
}

.global-navigation__motorcycles-footer-line {
	margin-top: 0
}

.global-navigation__motorcycles-footer-link {
	padding: 0 36px 36px 36px;
	display: inline-block;
	text-align: center;
	width: 240px
}

.global-navigation__motorcycles-footer-link:hover {
	text-decoration: none !important
}

.global-navigation__motorcycles-footer-link:hover .global-navigation__motorcycles-footer-label {
	color: #f60
}

.global-navigation__motorcycles-footer-icon {
	height: 2.5rem;
	max-width: 35px
}

.global-navigation__motorcycles-footer-label {
	padding-top: 18.5px;
	font-size: 1.4rem;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase
}

.global-navigation__motorcycles-footer--dark-custom {
	width: auto;
	height: 33px
}

.global-navigation__mobile-motorcycles-footer {
	padding: 0 15px
}

.global-navigation__mobile-motorcycles-footer-icon-wrapper {
	display: inline-block;
	width: 71px;
	text-align: center
}

.global-navigation__mobile-motorcycles-footer-link {
	display: block;
	padding: 21px 0;
	border-top: 1px solid #202020
}

.global-navigation__mobile-motorcycles-footer-link:first-child {
	border-top: 0
}

.global-navigation__mobile-motorcycles-footer-icon {
	height: 3.5rem;
	max-width: 45px
}

.global-navigation__mobile-motorcycles-footer-label {
	display: inline-block;
	color: #fff;
	font-weight: 700;
	font-size: 1.4rem;
	text-transform: uppercase
}

.global-navigation__mobile-motorcycles-footer--dark-custom {
	width: auto;
	height: 33px
}

.global-navigation__close-button {
	float: right;
	margin-top: 10px;
	margin-bottom: 35px;
	color: #fff;
	font-family: "NotoSans-Bold",sans;
	font-size: 10px;
	text-transform: uppercase;
	cursor: pointer
}

.global-navigation__close-button:hover {
	color: #f60;
	text-decoration: none
}

.global-navigation__close-button:focus,.global-navigation__close-button:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__menu-dropdown-open-button,.global-navigation__menu-dropdown-close-button,.global-navigation__mobile-dropdown-close-button {
	float: right;
	margin-bottom: 20px;
	line-height: 50px;
	color: #fff;
	font-family: "NotoSans-Bold",sans;
	font-size: 10px;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer
}

.global-navigation__menu-dropdown-open-button:hover,.global-navigation__menu-dropdown-close-button:hover,.global-navigation__mobile-dropdown-close-button:hover {
	color: #f60;
	text-decoration: none
}

.global-navigation__menu-dropdown-open-button:focus,.global-navigation__menu-dropdown-open-button:active,.global-navigation__menu-dropdown-close-button:focus,.global-navigation__menu-dropdown-close-button:active,.global-navigation__mobile-dropdown-close-button:focus,.global-navigation__mobile-dropdown-close-button:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__menu-dropdown-open-button {
	display: block;
	margin-bottom: 0
}

@media (min-width: 768px) {
	.global-navigation__menu-dropdown-open-button {
		display: none
	}
}

.global-navigation__menu-dropdown-open-button .cta {
	font-size: 1rem;
	position: relative;
	left: 0.5rem;
	transition: none;
	top: 0.8rem
}

.global-navigation__menu-dropdown-open-button .cta .cta-icon {
	transition: none
}

.global-navigation__menu-dropdown-open-button .cta .cta-icon:after {
	font-size: 1rem
}

.global-navigation__menu-dropdown-close-button {
	line-height: 0;
	position: absolute;
	top: 5px;
	right: 5rem;
	z-index: 1
}

.global-navigation__mobile-dropdown-close-button {
	margin-bottom: 0;
	position: relative;
	top: 5px
}

.global-navigation__mobile-dropdown {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #000;
	display: none
}

@media (min-width: 768px) {
	.global-navigation__mobile-dropdown {
		display: none !important
	}
}

.global-navigation__mobile-dropdown-header {
	position: absolute;
	top: 0;
	width: 100%;
	height: 70px;
	padding: 0 25px;
	background-color: #000;
	z-index: 999
}

.global-navigation__mobile-dropdown .icon--arrow {
	top: -1px;
	margin-left: 5px;
	margin-right: 0;
	color: #7f7f7f;
	font-size: 75%
}

.global-navigation__mobile-dropdown a {
	cursor: pointer
}

.global-navigation__mobile-dropdown .cta-icon__H-D-Apply-for-Credit .cta.cta-icon__left-to-top .cta-icon:after {
	left: -7px;
	color: #7f7f7f
}

.global-navigation__mobile-dropdown .cta.cta-icon__left-to-top .cta-icon:after {
	top: 10px;
	left: 0;
	color: #7f7f7f
}

.global-navigation__mobile-dropdown .cta-icon--small .cta-icon:after {
	font-size: 60%
}

.global-navigation__mobile-dropdown-menu.overthrow {
	padding-right: 2rem;
	padding-left: 2rem
}

.global-navigation .mobile-top-nav-item {
	color: #7f7f7f
}

.global-navigation__mobile-search-field {
	color: #fff;
	font-weight: normal;
	float: left;
	position: relative;
	top: 10px;
	left: 8px;
	line-height: 46px;
	padding-left: 20px;
	text-decoration: none;
	cursor: pointer
}

.global-navigation__mobile-search-field:hover {
	color: #f60;
	text-decoration: none
}

.global-navigation__mobile-search-field:focus,.global-navigation__mobile-search-field :active {
	color: #fff;
	text-decoration: none
}

.global-navigation__mobile-search-field .cta-icon {
	right: 46px
}

.global-navigation__mobile-search-field .cta-icon:after {
	font-size: 140%
}

.global-navigation__mobile-dropdown-menu .mobile-motorcycles-panel__motorcycles-link {
	margin-top: 85px
}

.global-navigation__mobile-dropdown-menu-item {
	display: block;
	margin-bottom: 25px;
	margin-top: 25px;
	font-family: "NotoSans-Bold",sans;
	font-size: 12px;
	line-height: 20px;
	text-transform: uppercase;
	padding-left: 2rem
}

.global-navigation__mobile-dropdown-menu-item a {
	display: block;
	color: #fff;
	position: relative;
	text-decoration: none;
	transition: none
}

.global-navigation__mobile-dropdown-menu-item a .global-navigation__icon {
	margin-right: 0
}

.global-navigation__mobile-dropdown-menu-item a .global-navigation__icon-container {
	display: inline-block;
	width: 30px;
	margin-right: 12px
}

.global-navigation__mobile-dropdown-menu-item .global-navigation__link-out span.cta-icon {
	position: relative;
	top: -13px;
	left: 10px
}

.global-navigation__mobile-dropdown-menu-item-footer-link {
	padding: 0 36px;
	display: inline-block;
	text-align: center;
	text-transform: none
}

.global-navigation__mobile-dropdown-menu-item-footer-link:hover {
	text-decoration: none !important
}

.global-navigation__mobile-dropdown-menu-item-footer-icon {
	width: 45px
}

.global-navigation__mobile-dropdown-menu-item-footer-label {
	padding-top: 7px;
	font-family: "NotoSans-Regular",sans;
	font-size: .8rem;
	font-weight: normal;
	color: #7f7f7f
}

.global-navigation__mobile-dropdown-menu .global-navigation__mobile-dropdown-menu-item-footer-logo {
	padding-left: 0;
	list-style-type: none
}

.global-navigation__mobile-dropdown-menu .global-navigation__mobile-dropdown-menu-item-footer-logo .global-navigation__mobile-dropdown-menu-item-footer-link {
	display: block
}

.global-navigation__mobile-dropdown-accordion {
	padding: 0;
	margin-top: 20px;
	list-style: none;
	display: none
}

.global-navigation__mobile-dropdown-accordion a {
	transition: none;
	margin-left: 4rem;
	padding-top: 1.5rem;
	padding-left: 0;
	padding-bottom: 1.5rem;
	font-size: 12px
}

.global-navigation__mobile-dropdown-accordion a .cta-icon {
	width: 3.4rem
}

.global-navigation__mobile-dropdown-accordion a .cta-icon:after {
	top: 50%;
	left: 50%;
	right: auto;
	transform: translate(-50%, -50%)
}

.global-navigation__mobile-dropdown-accordion a .global-navigation__icon {
	margin-right: 12px
}

.global-navigation__mobile-dropdown-accordion.shopping-tools-accordion a {
	margin-left: 4rem;
	padding-left: 5rem
}

.global-navigation__mobile-dropdown-accordion.shopping-tools-accordion a .global-navigation__link-out .cta-icon:after {
	font-size: 1rem;
	margin-left: 0.6rem
}

.global-navigation .no-header .motorcycle--first {
	margin-top: 10px
}

.global-navigation .cta-icon__H-D-Shop .cta-icon::after {
	content: "\e923";
	font-size: 1.5rem
}

.global-navigation__mobile-motorcycles-panel {
	position: absolute;
	top: 0;
	left: 100%;
	width: 100%;
	min-height: 100%;
	background: #000;
	z-index: 1001;
	display: none
}

@media (min-width: 768px) {
	.global-navigation__mobile-motorcycles-panel {
		display: none !important
	}
}

.global-navigation__mobile-motorcycles-panel hr {
	margin-top: 0
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-nav-bar {
	position: fixed;
	top: 70px;
	width: 100%;
	background: #202020;
	z-index: 1001
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-nav-bar:after {
	content: '';
	height: 100%;
	width: 40px;
	position: absolute;
	right: 0;
	top: 0;
	background: -moz-linear-gradient(right, rgba(0,0,0,0.9) 0%, transparent 100%);
	background: -webkit-linear-gradient(right, rgba(0,0,0,0.9) 0%, transparent 100%);
	background: linear-gradient(to left, rgba(0,0,0,0.9) 0%, transparent 100%)
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-container {
	white-space: nowrap;
	padding-right: 0
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-item {
	position: relative;
	display: inline-block;
	font-family: "NotoSans-Bold",sans;
	font-size: 12px;
	margin-right: 20px;
	text-transform: uppercase;
	vertical-align: top
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-item--pinned {
	float: left;
	z-index: 1;
	background-color: #202020;
	margin-right: 0
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-item--pinned .global-navigation__motorcycles-family-menu-divider {
	margin-right: 0
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-item--pinned .mobile-motorcycles-panel__family-menu-link {
	display: inline-block;
	margin-right: 20px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-scrollable-nav {
	-webkit-overflow-scrolling: touch;
	overflow-x: auto;
	padding-left: 20px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-link {
	display: block;
	color: #fff;
	line-height: 44px;
	padding-top: 3px;
	text-decoration: none;
	border-bottom: 3px solid transparent
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-link:focus,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-menu-link:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__mobile-motorcycles-panel .active-mobile-family {
	color: #f60;
	text-decoration: none;
	border-bottom: 3px solid
}

.global-navigation__mobile-motorcycles-panel .active-mobile-family:focus {
	color: #f60
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header {
	position: fixed;
	top: 0;
	width: 100%;
	height: 70px;
	background-color: #000;
	z-index: 1004
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__back-button,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__close-button {
	line-height: 70px;
	color: #fff;
	font-family: "NotoSans-Bold",sans;
	font-size: 10px;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__back-button:hover,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__close-button:hover {
	color: #f60;
	text-decoration: none
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__back-button:focus,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__back-button:active,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__close-button:focus,.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__close-button:active {
	color: #fff;
	text-decoration: none
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__header .mobile-motorcycles-panel__close-button {
	padding-right: 5px
}

.global-navigation__mobile-motorcycles-panel .global-navigation__motorcycles-nav-bar {
	position: absolute;
	margin-top: 70px;
	z-index: 1002
}

.global-navigation__mobile-motorcycles-panel .global-navigation__motorcycles-nav-bar .active-family {
	color: #f60;
	text-decoration: none;
	border-bottom: 3px solid
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__container {
	top: 120px;
	margin-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
	height: calc(100% - 120px)
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__container .col-xs-12 {
	padding-left: 0;
	padding-right: 0
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__title {
	color: #fff;
	margin-bottom: 20px;
	text-transform: uppercase
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__link {
	margin-bottom: 20px;
	text-transform: uppercase
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__link-family {
	margin-top: 35px;
	margin-bottom: 5px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__link-family--single-family {
	color: #7f7f7f;
	margin-bottom: 25px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__link-family-header {
	margin-top: 0px;
	margin-bottom: 35px;
	color: #7f7f7f
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__link-family-header--single-family {
	margin-bottom: 25px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__content {
	width: 85%;
	display: inline-block
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-title {
	margin: 10px auto 40px;
	color: #fff;
	text-transform: uppercase;
	border-top: 2px solid #fff;
	border-bottom: 2px solid #fff
}

.webkit .global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-title {
	padding-top: 0.4rem
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__family-title--has-link {
	margin-bottom: 20px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle {
	margin-bottom: 30px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-panel {
	background: #202020;
	padding: 25px 15px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-panel .arrow-icon {
	display: inline-block;
	color: #7f7f7f
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-image {
	width: 100%
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-name {
	color: #fff;
	font-size: 2rem;
	line-height: 1;
	margin-bottom: 12px;
	text-transform: uppercase
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-price {
	color: #7f7f7f;
	line-height: 1;
	margin-bottom: 13px
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-price span {
	font-size: 80%
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-link {
	margin-right: 20px;
	text-transform: uppercase;
	line-height: 1
}

@media screen and (max-width: 1024px) {
	.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-link {
		margin-right: 10px
	}
}

.global-navigation__mobile-motorcycles-panel .mobile-motorcycles-panel__motorcycle-link:nth-child(2) {
	display: none
}

.global-navigation__scroll-up {
	padding: 1.7rem;
	background: #333 url("../../images/dropdown-arrow-white.png") no-repeat center center;
	background-size: 1.5rem 0.9rem;
	-webkit-transform: rotate(180deg) translateX(-100%);
	-moz-transform: rotate(180deg) translateX(-100%);
	-ms-transform: rotate(180deg) translateX(-100%);
	-o-transform: rotate(180deg) translateX(-100%);
	transform: rotate(180deg) translateX(-100%);
	cursor: pointer;
	z-index: 1002;
	display: none;
	text-indent: -9999px;
	font-size: 0;
	position: absolute;
	bottom: 2rem;
	right: 0rem
}

.global-navigation__scroll-up--active {
	-webkit-transform: rotate(180deg) translateX(0);
	-moz-transform: rotate(180deg) translateX(0);
	-ms-transform: rotate(180deg) translateX(0);
	-o-transform: rotate(180deg) translateX(0);
	transform: rotate(180deg) translateX(0)
}

.global-navigation__scroll-up--cookie-open {
	bottom: 25rem
}

@media screen and (min-width: 768px) {
	.global-navigation__scroll-up--cookie-open {
		bottom: 16rem
	}
}

@media screen and (min-width: 992px) {
	.global-navigation__scroll-up--cookie-open {
		bottom: 12rem
	}
}

@media screen and (min-width: 768px) {
	.global-navigation__scroll-up {
		right: 1.1rem;
		height: 60px;
		width: 60px
	}
}

.ie .global-navigation__scroll-up {
	right: 1.1rem !important
}

.no-flexboxlegacy .global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle {
	display: table-cell
}

.no-flexboxlegacy .global-navigation__motorcycles-dropdown .motorcycles-dropdown__motorcycle .motorcycles-dropdown__motorcycle-panel {
	min-height: 43px
}

.windows .global-navigation__motorcycles-dropdown .motorcycles-dropdown__family-title {
	padding-top: 0px
}

.rtl .global-navigation__logo {
	direction: ltr
}

.rtl .global-navigation__primary-menu .shopping-tools-dropdown a .global-navigation__link-out {
	top: 5px
}

.rtl .global-navigation__primary-menu .global-navigation__nav-menu-item a {
	text-align: right
}

.rtl .global-navigation__primary-menu .shopping-tools-dropdown .cta-icon__left-to-top .cta-icon {
	height: 2.5rem
}

.rtl .global-navigation__primary-menu .shopping-tools-dropdown .cta-icon__left-to-top .cta-icon:after {
	margin-left: 0
}

.rtl .global-navigation__motorcycles-dropdown .motorcycles-dropdown__linkWrapper {
	text-align: right
}

.rtl .global-navigation__nav-menu-link.cta-icon__left-to-top .cta-icon {
	top: -9px
}

@media only screen and (max-width: 767px) {
	.rtl .global-navigation .cta-link-secondary.cta-link .cta-icon {
		margin-right: 5rem
	}
}

.rtl .global-navigation__dropdown {
	left: -130px
}

.rtl .global-navigation__dropdown.learn-to-ride-dropdown .cta-icon__long-arrow .cta-icon {
	top: -9px;
	left: -22px
}

.rtl .global-navigation__dropdown.learn-to-ride-dropdown .cta-icon__long-arrow .cta-icon:after {
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg)
}

.rtl .global-navigation__mobile-dropdown .icon--arrow {
	-webkit-transform: rotate(-180deg);
	-moz-transform: rotate(-180deg);
	-ms-transform: rotate(-180deg);
	-o-transform: rotate(-180deg);
	transform: rotate(-180deg);
	margin-right: 5px
}

.rtl .global-navigation__mobile-dropdown .cta.cta-icon__left-to-top .cta-icon {
	margin-right: auto
}

.rtl .global-navigation__mobile-dropdown .cta.cta-icon__left-to-top .cta-icon::after {
	left: -18px;
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg);
	top: 0
}

.rtl .global-navigation__mobile-dropdown-accordion a {
	margin-right: 0rem;
	padding-right: 5rem;
	cursor: pointer !important
}

.rtl .global-navigation__mobile-dropdown-accordion.shopping-tools-accordion a .cta.cta-icon__left-to-top .cta-icon::after {
	left: 0px;
	margin-left: 1rem
}

.rtl .global-navigation__mobile-dropdown .learn-to-ride-accordion .cta-link-secondary.cta-link .cta-icon {
	right: 5% !important;
	margin-right: 0.5rem !important
}

.rtl .global-navigation__mobile-dropdown .learn-to-ride-accordion .cta-link-secondary.cta-link .cta-icon:after {
	left: 0
}

.rtl .global-navigation__mobile-dropdown .global-navigation__link-out span.cta-icon::after {
	left: 0px
}

.rtl .global-navigation__mobile-dropdown .cta-link-secondary.cta-link .cta-icon {
	right: 25%;
	position: relative;
	margin-right: 0
}

.rtl .global-navigation__mobile-dropdown .cta-link-secondary.cta-link.cta-icon__left-to-top .cta-icon {
	margin-right: 2rem;
	top: 0
}

.rtl .global-navigation__mobile-dropdown-menu-item {
	padding-left: 0;
	padding-right: 2rem
}

@media only screen and (max-width: 767px) {
	.rtl .global-navigation__menu-dropdown-open-button .cta-link-secondary.cta-link .cta-icon {
		left: 0
	}
}

.cta-icon__H-D-Shop .cta-icon {
	font-size: 22px
}

.mobile.iphone .global-navigation__logo {
	background-size: 61px 38px
}

.family_0 hr {
	display: none
}

.family hr {
	margin-top: 0
}

.whats_new {
	height: 100px;
	margin-bottom: 25px;
	background-size: cover
}

.whats_new .cta {
	margin-top: 40px
}

.price-wrap {
	max-width: 80%
}

.arrow-icon {
	font-family: 'cta-icon-new3' !important;
	text-align: right;
	flex: auto;
	font-size: 40px
}

.motorcycles-dropdown__motorcycle a {
	text-decoration: none;
	color: #7f7f7f
}

.motorcycles-dropdown__motorcycle p,.motorcycles-dropdown__motorcycle span {
	text-transform: capitalize;
	color: #7f7f7f !important
}

.motorcycles-dropdown__motorcycle .arrow-icon {
	color: #202020
}

.motorcycles-dropdown__motorcycle.is-selected a {
	text-decoration: none
}

.motorcycles-dropdown__motorcycle.is-selected .arrow-icon {
	color: #7f7f7f
}

.motorcycles-dropdown__motorcycle.is-selected h5 {
	color: #f60
}

.translate-sticky {
	transform: translateZ(0);
	-webkit-transform: translateZ(0)
}

.global-footer {
	width: 100%;
	padding: 40px 0;
	background: #000
}

@media print {
	.global-footer {
		display: none
	}
}

.global-footer__disclaimers {
	width: 100%;
	padding: 3rem 2rem;
	font-family: "NotoSans-Regular",sans;
	color: #fff;
	text-align: center;
	font-size: 1rem;
	line-height: 1.3;
	color: #7f7f7f
}

.global-footer__disclaimers p,.global-footer__disclaimers span {
	font-size: 1rem;
	line-height: 1.3
}

.global-footer.global-footer--has-contextual-links .global-footer__disclaimers {
	padding-bottom: 0
}

.global-footer h5 {
	display: block;
	margin-bottom: 20px;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 2rem
}

@media (min-width: 768px) {
	.global-footer h5 {
		font-size: 2.4rem
	}
}

.global-footer h5 span {
	color: #f60
}

.global-footer__dropdown {
	display: block;
	box-sizing: border-box;
	margin: 0 auto 30px;
	padding: 10px 15px;
	border: 1px solid #fff;
	color: #fff;
	width: 100%;
	max-width: 320px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-ms-border-radius: 0;
	-o-border-radius: 0;
	border-radius: 0;
	background: #000 url("../../images/dropdown-arrow-white-2.png") no-repeat right center;
	text-transform: uppercase;
	cursor: pointer;
	background-position-x: 280px
}

.global-footer__social-icons {
	margin-bottom: 30px
}

.global-footer__social-icons img {
	max-width: 37px
}

.global-footer__social-icon {
	margin-right: 20px
}

.global-footer__social-icon:hover {
	text-decoration: none
}

.global-footer__social-icon:last-child {
	margin-right: 0
}

.global-footer__links {
	display: inline-block;
	padding: 0;
	text-align: center;
	line-height: 2rem
}

@media (min-width: 768px) {
	.global-footer__links {
		line-height: 2.8rem;
		margin-bottom: 30px
	}
}

.global-footer__links-row {
	margin-bottom: 30px
}

@media (min-width: 768px) {
	.global-footer__links-row {
		display: inline-block;
		margin-bottom: 0;
		margin-right: 5px
	}
}

@media (min-width: 992px) {
	.global-footer__links-row {
		display: inline-block;
		margin-bottom: 0;
		margin-right: 20px
	}
}

.global-footer__links-row:last-child {
	margin-right: 0
}

.global-footer__divider {
	display: inline-block;
	width: 1px;
	height: 12px;
	background: #7f7f7f;
	margin-right: 5px
}

@media (min-width: 992px) {
	.global-footer__divider {
		margin-right: 10px
	}
}

.global-footer__link {
	display: inline-block;
	margin-right: 5px
}

@media (min-width: 992px) {
	.global-footer__link {
		margin-right: 10px
	}
}

.global-footer__link a {
	color: #7f7f7f;
	text-transform: uppercase;
	text-decoration: none
}

.global-footer__link a:focus,.global-footer__link a:active {
	color: #fff;
	text-decoration: none
}

.global-footer__link a:hover {
	color: #f60;
	text-decoration: none
}

.global-footer__link:last-child {
	margin-right: 0
}

.global-footer__copyright {
	color: #7f7f7f;
	font-size: 10px;
	text-align: left;
	line-height: 16px;
	margin: 0 auto;
	max-width: 54%;
	display: inline-block;
	position: relative
}

.global-footer__copyright span {
	width: 33px;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

@media (min-width: 768px) {
	.global-footer__copyright span {
		margin-right: 20px
	}
}

.global-footer__logo {
	margin-bottom: 1rem
}

.ar-ac .specs-pricing__bikedata-title {
	float: right
}

@media only screen and (min-width: 768px) {
	.ar-ac .specs-pricing__spec-table-heading {
		float: right
	}
}

@media only screen and (max-width: 991px) {
	.ar-ac .specs-pricing__spec-table-heading .icon {
		right: auto;
		left: 0rem
	}
}

.specs-pricing {
	background-color: #202020
}

.specs-pricing__header {
	background-color: #fff;
	position: relative;
	overflow: hidden
}

.specs-pricing__hero-image {
	text-align: center;
	padding-top: 4rem
}

@media screen and (min-width: 768px) {
	.specs-pricing__hero-image {
		padding-top: 0rem
	}

	.specs-pricing__hero-image img {
		width: auto
	}
}

@media screen and (min-width: 992px) {
	.specs-pricing__hero-image img {
		width: auto;
		height: 65rem
	}
}

.specs-pricing__footer {
	background-color: #fff
}

.specs-pricing__footer-smallcopy {
	float: none;
	margin: 0 auto 4rem auto;
	color: #808080;
	font-family: "NotoSans-Regular",sans;
	font-size: 1.4rem;
	line-height: 2rem
}

.specs-pricing__footer-smallcopy ul {
	list-style: none;
	padding: 0
}

.specs-pricing__backBtn {
	left: 0;
	margin-top: 1rem;
	margin-bottom: 2rem;
	text-transform: uppercase;
	color: #000;
	display: none
}

.specs-pricing__backBtn--text {
	font-family: "Trade-Gothic", sans;
	font-size: 3rem;
	vertical-align: middle;
	position: relative;
	top: 2px;
	left: 10px
}

.specs-pricing__backBtn:hover,.specs-pricing__backBtn:focus {
	color: #000;
	text-decoration: none
}

.specs-pricing__title {
	padding: 2.5rem
}

@media screen and (min-width: 768px) {
	.specs-pricing__title {
		position: absolute;
		max-width: 50%;
		padding: 4.5rem 3rem
	}
}

@media screen and (min-width: 992px) {
	.specs-pricing__title {
		padding: 7.5rem 5rem
	}
}

.specs-pricing__title h1 {
	font-size: 3rem;
	line-height: 3rem;
	text-transform: uppercase;
	margin: 0 0 2rem 0
}

.specs-pricing__title-biketitle {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 7.2rem;
	line-height: 7.5rem;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	position: relative;
	z-index: 1
}

.specs-pricing__main {
	background-color: #fff;
	background-image: url(../../images/specs-prices/bg.jpg);
	background-size: 100%;
	background-repeat: no-repeat
}

.specs-pricing__units {
	margin: 2.5rem auto 0rem auto;
	float: none
}

.specs-pricing__units p {
	text-transform: uppercase;
	font-family: "NotoSans-Bold",sans
}

.specs-pricing__units p span {
	margin: 0 1rem;
	color: rgba(0,0,0,0.6);
	cursor: pointer
}

.specs-pricing__units p span:hover,.specs-pricing__units p .selected_unit {
	color: #000;
	border-bottom: 3px solid #ff6600
}

.specs-pricing__countryselector {
	color: #fff;
	padding: 1.2rem 3rem 0 1rem;
	overflow: hidden;
	text-align: right
}

.specs-pricing__countryselector p {
	text-transform: uppercase;
	font-family: "NotoSans-Bold",sans;
	margin: 0
}

.specs-pricing__countryselector p span {
	margin: 0 1rem;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	position: relative
}

.specs-pricing__countryselector p span:after {
	content: "";
	display: block;
	width: 100%;
	height: 0rem;
	border-bottom: 3px solid transparent;
	padding: 0 0 0.8rem 0
}

.specs-pricing__countryselector p span:hover,.specs-pricing__countryselector p .selected_country {
	color: #ff6600
}

.specs-pricing__countryselector p span:hover:after,.specs-pricing__countryselector p .selected_country:after {
	display: block;
	border-bottom: 3px solid #ff6600
}

.specs-pricing__bikedata {
	margin: 0 auto;
	float: none
}

.specs-pricing__bikedata ul {
	list-style: none;
	margin: 0;
	padding: 0;
	font-size: 0
}

.specs-pricing__bikedata ul span {
	padding: 1rem
}

.specs-pricing__bikedata ul li {
	display: inline-block;
	padding: 1rem 2rem;
	width: 100%;
	background: #fff;
	font-size: 1.4rem
}

.specs-pricing__bikedata ul li:nth-of-type(odd) {
	background-color: #e1e1e1
}

.specs-pricing__bikedata-title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase
}

.specs-pricing__bikedata-title sup {
	top: -0.3em
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.specs-pricing__bikedata-title sup {
		top: -0.7em !important
	}
}

.specs-pricing__bikedata-value {
	font-family: "NotoSans-Regular",sans
}

.specs-pricing__spec-table {
	margin: 4rem 0 6rem 0
}

.specs-pricing__spec-table-heading {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 2.6rem;
	margin-left: 2rem;
	text-transform: uppercase
}

.specs-pricing__spec-table-heading .icon {
	display: none
}

.specs-pricing__spec-table-heading sup {
	top: -1.3em !important
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.specs-pricing__spec-table-heading sup {
		top: -1.8em !important
	}
}

.specs-pricing__sup-label {
	color: #4A4A4A
}

.specs-pricing__sup-label sup {
	font-size: 0.96rem
}

@media screen and (min-width: 320px) and (max-width: 767px) {
	.specs-pricing__title-biketitle {
		font-size: 4rem;
		line-height: 4.8rem;
		letter-spacing: 0.2rem
	}

	.specs-pricing__title h1 {
		font-size: 2rem;
		margin: 0 0rem 0 0;
		line-height: 1rem;
		letter-spacing: 0.2rem
	}

	.specs-pricing__spec-table-heading {
		font-size: 2.6rem
	}

	.specs-pricing__footer-smallcopy {
		margin: 4rem auto 4rem auto;
		font-size: 1.2rem
	}

	.specs-pricing__units {
		margin: 2rem auto 2rem auto;
		float: none
	}
}

@media screen and (min-width: 768px) {
	.specs-pricing__accordion-content {
		display: block !important
	}
}

@media screen and (max-width: 767px) {
	.specs-pricing__countryselector {
		padding-right: 2rem
	}
}

@media screen and (max-width: 767px) {
	.specs-pricing__units {
		margin: 2rem 0rem;
		text-align: center
	}

	.specs-pricing__units p {
		font-size: 1.1rem
	}

	.specs-pricing__backBtn {
		margin-top: 1rem
	}

	.specs-pricing__backBtn--text {
		font-size: 2rem
	}

	.specs-pricing__spec-table {
		margin: 0
	}

	.specs-pricing__spec-table-heading {
		position: relative;
		display: block;
		padding-top: 0.6rem;
		cursor: pointer
	}

	.specs-pricing__spec-table-heading .icon {
		display: inline-block;
		position: absolute;
		top: 1rem;
		right: 1.5rem;
		height: 2.2rem;
		width: 2.2rem;
		background: url("../../images/accordion-expand.png") no-repeat;
		background-size: 100%
	}

	.specs-pricing__spec-table-heading.expanded-heading .icon {
		background: url("../../images/accordion-close.png") no-repeat;
		background-size: 100%
	}

	.specs-pricing__accordion-container {
		border-top: 0.2rem solid #000000
	}

	.specs-pricing__accordion-container:last-child {
		border-bottom: 0.2rem solid #000
	}

	.specs-pricing__accordion-content {
		display: none;
		overflow: hidden;
		margin-bottom: 4rem
	}

	.specs-pricing__countryselector {
		padding: 1.2rem 2rem 0 2rem;
		float: none !important
	}

	.specs-pricing__countryselector p {
		font-size: 1.2rem
	}
}

.rtl .specs-pricing__title {
	right: 0;
	clear: both;
	text-align: right
}

.rtl .specs-pricing__backBtn {
	display: inherit;
	float: right
}

.rtl .specs-pricing h1 {
	float: right;
	clear: both
}

.rtl .specs-pricing__title-biketitle {
	float: right
}

h1,h2,h3 {
	font-weight: 300
}

.timeline--wrapper div {
	outline: none
}

.decades--wrapper {
	overflow-x: hidden
}

.timeline {
	position: relative;
	overflow: hidden;
	background-color: #fff;
	padding-top: 60px;
	padding-bottom: 60px
}

.timeline .container {
	padding: 1em
}

.timeline:before {
	content: '';
	position: absolute;
	height: 100%;
	width: 5px;
	left: 8px;
	margin-top: 25px;
	height: calc(100% - 95px);
	background: linear-gradient(to bottom, #000 0%, #000 calc(100% - 100px), transparent 100%)
}

@media screen and (min-width: 768px) {
	.timeline:before {
		margin-top: 10px;
		height: calc(100% - 70px)
	}
}

.timeline h2 {
	background: #555;
	max-width: 6em;
	margin: 0 auto 1em;
	padding: 0.5em;
	text-align: center;
	position: relative;
	clear: both
}

.timeline ul {
	list-style: none;
	padding: 0 0 0 1em;
	z-index: 1
}

.timeline li {
	display: block;
	margin-bottom: 1em;
	position: relative
}

.timeline h3.date {
	text-align: left;
	margin-top: 0;
	display: block
}

.timeline h3.date:before {
	content: '';
	position: absolute;
	width: 8px;
	height: 8px;
	border: 9px solid #f60;
	background-color: #000;
	border-radius: 100%;
	z-index: 1000;
	transform: translateY(50%)
}

.timeline time {
	font-style: italic
}

.timeline .feature-event__arrow--next {
	cursor: pointer;
	position: absolute;
	right: 1.5em;
	width: 2.5rem;
	height: 4.7rem;
	background: url(../../images/slide-arrow-right-white.png) no-repeat;
	background-size: cover
}

.timeline .feature-event__arrow--prev {
	cursor: pointer;
	position: absolute;
	left: 1.5em;
	width: 2.5rem;
	height: 4.7rem;
	background: url(../../images/slide-arrow-left-white.png) no-repeat;
	background-size: cover
}

.timeline .slick-slider {
	position: relative;
	display: block;
	box-sizing: border-box;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-ms-touch-action: pan-y;
	touch-action: pan-y;
	-webkit-tap-highlight-color: transparent
}

.timeline .slick-slider .slick-arrow {
	top: calc(50% - 10px);
	height: 50px;
	width: 30px
}

.timeline .slick-slider .slick-arrow:before {
	height: 30px;
	width: 30px;
	display: block;
	transform: rotate(45deg) translateY(-50%);
	content: " ";
	position: absolute;
	top: 20px
}

.timeline .slick-slider .slick-arrow.slick-prev {
	left: 30px
}

.timeline .slick-slider .slick-arrow.slick-prev:before {
	border-left: 3px solid #fff;
	border-bottom: 3px solid #fff
}

.timeline .slick-slider .slick-arrow.slick-next {
	right: 30px
}

.timeline .slick-slider .slick-arrow.slick-next:before {
	border-right: 3px solid #fff;
	border-top: 3px solid #fff;
	right: 20px
}

.timeline .slick-list {
	position: relative;
	overflow: hidden;
	display: block;
	margin: 0;
	padding: 0
}

.timeline .slick-list:focus {
	outline: none
}

.timeline .slick-list.dragging {
	cursor: pointer;
	cursor: hand
}

.timeline .slick-slider .slick-track,.timeline .slick-slider .slick-list {
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	-ms-transform: translate3d(0, 0, 0);
	-o-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0)
}

.timeline .slick-track {
	position: relative;
	left: 0;
	top: 0;
	display: block;
	margin-left: auto;
	margin-right: auto
}

.timeline .slick-track:before,.timeline .slick-track:after {
	content: "";
	display: table
}

.timeline .slick-track:after {
	clear: both
}

.slick-loading .timeline .slick-track {
	visibility: hidden
}

.timeline .slick-slide {
	float: left;
	height: 100%;
	min-height: 1px;
	position: relative
}[dir="rtl"] .timeline .slick-slide {
	float: right
}

.timeline .slick-slide .video-section {
	position: relative
}

.timeline .slick-slide img {
	display: block
}

.timeline .slick-slide.slick-loading img {
	display: none
}

.timeline .slick-slide.dragging img {
	pointer-events: none
}

.slick-initialized .timeline .slick-slide {
	display: block
}

.slick-loading .timeline .slick-slide {
	visibility: hidden
}

.slick-vertical .timeline .slick-slide {
	display: block;
	height: auto;
	border: 1px solid transparent
}

.timeline .slick-arrow.slick-hidden {
	display: none
}

.timeline .b1__images.timeline__collage--images {
	width: 100%
}

.timeline .slick-next {
	right: 1.5em
}

.timeline .slick-prev {
	left: 1.5em;
	z-index: 100000
}

.timeline .timeline__nav--wrapper {
	width: 100%;
	overflow-x: scroll;
	left: 0;
	right: 0
}

.timeline ul li {
	padding: 1em
}

.timeline ul li.timeline__entry {
	margin-left: 10px
}

.timeline ul li.timeline__entry .video-section {
	position: relative
}

.timeline ul li h3.date:before {
	left: -23px
}

.timeline ul li .timelate__date-icon:before {
	content: ' ';
	transform: translateY(50%);
	border-top: 2px solid #000;
	width: 20px;
	left: -10px;
	position: absolute;
	margin-top: 16px
}

.paginator--wrapper {
	width: 100%;
	background: white;
	height: 150px;
	display: flex;
	align-content: center;
	justify-content: center
}

.decades__paginator {
	position: relative;
	width: 300px;
	margin: 50px calc(50% - 140px);
	text-align: center;
	border: 2px solid #000;
	padding: 12px 120px;
	height: 50px;
	font-weight: bold
}

.decades__paginator .timeline__arrow--prev {
	position: absolute;
	left: 1em;
	cursor: pointer;
	padding: 14px;
	top: 0
}

.decades__paginator .timeline__arrow--prev:after {
	content: '\e903';
	font-family: 'cta-icon'
}

.decades__paginator .timeline__arrow--next {
	position: absolute;
	right: 1em;
	cursor: pointer;
	padding: 14px;
	top: 0
}

.decades__paginator .timeline__arrow--next:after {
	content: '\e904';
	font-family: 'cta-icon'
}

.timeline__entry {
	opacity: 0
}

.timeline__entry .caption {
	display: block;
	margin-top: 5px
}

.timeline__entry .carousel__entry--caption p {
	margin-top: 0
}

.timeline__entry .left_align {
	display: flex;
	justify-content: center;
	align-content: left;
	flex-direction: row-reverse
}

.timeline__entry .left_align .copy {
	flex: 3;
	padding-left: 10px
}

.timeline__entry .left_align .copy p {
	margin-top: 0
}

.timeline__entry .left_align .image-left {
	flex: 2
}

.timeline__entry .left_align .image-left img {
	width: 100%
}

.timeline__entry .right_align {
	display: flex;
	align-content: right;
	justify-content: center
}

.timeline__entry .right_align .copy {
	flex: 3
}

.timeline__entry .right_align .image-right {
	flex: 2;
	order: 2
}

.timeline__entry .right_align .image-right img {
	width: 100%
}

.timeline__entry .entries__divider {
	background-color: #f60;
	height: 4px;
	width: 30px;
	display: block;
	margin-top: 30px;
	margin-bottom: 30px
}

.timeline__entry .entries__divider:first-of-type {
	display: none
}

.timeline__entry .collage-desc {
	margin-left: 0
}

@media screen and (min-width: 768px) {
	.timeline__entry .collage-desc {
		margin-left: 10.4%
	}
}

.timeline__entry p {
	font-size: 12px;
	margin-top: 0;
	line-height: 1.7rem
}

.timeline__entry div {
	font-size: 12px
}

.timeline__entry.in-view {
	opacity: 1;
	transition: opacity 0.5s ease-in
}

@media screen and (min-width: 768px) {
	.timeline:before {
		left: 50%
	}

	.timeline .container {
		max-width: 1000px;
		margin: 0 auto
	}

	.timeline ul {
		padding-left: 0;
		max-width: 84%;
		margin: 0 auto
	}

	.timeline ul li {
		width: 46%;
		padding: 0
	}

	.timeline ul li:nth-child(even) {
		float: right;
		margin-top: 7em
	}

	.timeline ul li:nth-child(even) h3.date {
		text-align: left
	}

	.timeline ul li:nth-child(even) h3.date:before {
		left: calc(-8.7% - 7px)
	}

	.timeline ul li:nth-child(even) h3.date .timelate__date-icon:before {
		content: ' ';
		transform: translateY(50%);
		border-top: thin solid #000;
		width: 20px;
		left: calc(-8.7% + 3px);
		position: absolute;
		margin-top: 16px
	}
}

@media screen and (min-width: 768px) and (min-width: 992px) {
	.timeline ul li:nth-child(even) h3.date .timelate__date-icon:before {
		width: 30px
	}
}

@media screen and (min-width: 768px) {
	.timeline ul li:nth-child(odd) {
		float: left
	}

	.timeline ul li:nth-child(odd).timeline__entry {
		margin-left: 0
	}

	.timeline ul li:nth-child(odd):before {
		border-top: 1em solid #555;
		border-right: 1em solid transparent;
		right: -1em;
		left: auto
	}

	.timeline ul li:nth-child(odd) h3.date {
		text-align: right
	}

	.timeline ul li:nth-child(odd) h3.date:before {
		left: calc(108.7% - 6px)
	}

	.timeline ul li:nth-child(odd) h3.date .timelate__date-icon:before {
		content: ' ';
		transform: translateY(50%);
		border-top: thin solid #000;
		width: 20px;
		left: calc(108.7% - 18px);
		position: absolute;
		margin-top: 16px
	}
}

@media screen and (min-width: 768px) and (min-width: 992px) {
	.timeline ul li:nth-child(odd) h3.date .timelate__date-icon:before {
		width: 30px;
		left: calc(108.7% - 30px)
	}
}

@media screen and (min-width: 768px) {
	.timeline ul li:nth-of-type(2n+1) {
		clear: both
	}
}

.is-hidden {
	display: none
}

.timeline__decade--hero {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	position: relative;
	width: 100%
}

.timeline__hero {
	position: relative;
	margin-top: 50px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 7px;
	margin-left: 7px
}

@media screen and (min-width: 768px) {
	.timeline__hero {
		margin-right: 15px;
		margin-left: 15px
	}
}

.timeline__hero h2 {
	color: #fff;
	text-transform: uppercase
}

.timeline__hero p {
	max-width: 75%;
	text-align: center;
	color: #fff
}

.timeline__nav--wrapper {
	width: 100%;
	max-width: 1440px;
	background: #fff;
	position: fixed;
	z-index: 10000;
	top: 0;
	display: none
}

.timeline__nav--wrapper.slide-down {
	top: 0
}

.timeline__nav {
	background: #fff;
	width: 100%;
	background: #fff;
	white-space: nowrap;
	margin: 0;
	text-align: center;
	padding: 20px 0 17px 0;
	transform: translate3d(0, 0, 0);
	scrollbar-face-color: transparent;
	scrollbar-arrow-color: transparent
}

@media screen and (max-width: 768px) {
	.timeline__nav {
		overflow-x: scroll
	}
}

.timeline__nav::-webkit-scrollbar {
	width: 0;
	height: 0
}

.timeline__nav::-webkit-scrollbar-thumb {
	background: transparent
}

.timeline__nav::-webkit-scrollbar-button {
	display: none
}

.timeline__nav div {
	display: inline-block;
	padding-left: 10px;
	padding-right: 10px
}

.timeline__herosec .slick-arrow {
	height: 50px;
	width: 30px;
	top: calc(50% + 25px)
}

.timeline__herosec .slick-arrow:before {
	height: 23px;
	width: 23px;
	display: block;
	transform: rotate(45deg) translateY(-50%);
	content: " ";
	position: absolute
}

.timeline__herosec .slick-arrow.slick-prev {
	z-index: 1;
	left: 2%
}

.timeline__herosec .slick-arrow.slick-prev:before {
	border-left: 3px solid #fff;
	border-bottom: 3px solid #fff
}

.timeline__herosec .slick-arrow.slick-next {
	right: 2%
}

.timeline__herosec .slick-arrow.slick-next:before {
	border-right: 3px solid #fff;
	border-top: 3px solid #fff
}

@media screen and (min-width: 768px) {
	.timeline__herosec .slick-arrow:before {
		height: 30px;
		width: 30px;
		display: block;
		transform: rotate(45deg) translateY(-50%);
		content: " ";
		position: absolute
	}

	.timeline__herosec .slick-arrow.slick-prev:before {
		border-left: 3px solid #fff;
		border-bottom: 3px solid #fff
	}

	.timeline__herosec .slick-arrow.slick-next:before {
		border-right: 3px solid #fff;
		border-top: 3px solid #fff;
		right: 20px
	}
}

@media screen and (min-width: 992px) {
	.timeline__herosec .slick-arrow.slick-prev {
		left: 3%
	}

	.timeline__herosec .slick-arrow.slick-next {
		right: 3%
	}
}

.timeline__content {
	background: #fff url("../../images/timeline/bg.png") repeat-y
}

.timeline__content .timeline {
	background-color: transparent;
	padding-left: 0;
	padding-right: 0
}

@media screen and (min-width: 768px) {
	.timeline__content .timeline {
		padding-left: 60px;
		padding-right: 60px
	}
}

.timeline__herosec {
	background-color: #fff
}

.bike-builder__button {
	padding-left: 2rem;
	padding-right: 4rem;
	position: relative;
	text-align: left
}

@media screen and (min-width: 320px) {
	.bike-builder__button {
		font-size: 1.4rem
	}
}

.bike-builder__button:after {
	content: '';
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	right: 1.8rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/cta-arrow-right.png");
	background-size: 100%
}

.bike-builder-mobile {
	padding: 1.5rem;
	color: #ffffff
}

.bike-builder-mobile__headline {
	margin-bottom: 2rem;
	padding: 1.5rem 1.5rem 0 1.5rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.bike-builder-mobile__headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

.bike-builder-mobile__description {
	line-height: 2.4rem;
	padding: 0 1.5rem
}

@media screen and (min-width: 320px) {
	.bike-builder-mobile__description {
		font-size: 1.4rem
	}
}

.bike-builder-mobile__image {
	margin: 3rem 0 2.5rem 0
}

.bike-builder-mobile .cta-btn-secondary {
	color: #fff;
	background-color: #000;
	padding-top: 0;
	padding-bottom: 0
}

.bike-builder-mobile .cta-btn-secondary .cta-label {
	min-width: auto
}

.bike-builder-mobile .cta {
	margin-bottom: 1rem
}

.bike-builder-mobile .cta-icon {
	background-color: transparent
}

.bike-builder__headline {
	text-transform: uppercase;
	margin: 3.5rem 0;
	padding-left: 4rem;
	color: #ffffff;
	letter-spacing: 0.14rem
}

@media screen and (min-width: 320px) {
	.bike-builder__headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

.bike-builder-filter {
	overflow: hidden;
	background-color: #202020;
	padding: 0 3rem
}

.bike-builder-filter__options--left {
	float: left
}

.bike-builder-filter__options--left .bike-builder-filter__option:first-child {
	margin-right: 0;
	padding-right: 5rem;
	position: relative
}

.bike-builder-filter__options--left .bike-builder-filter__option:first-child:after {
	content: '';
	height: 1.2rem;
	width: 0.2rem;
	background-color: #ffffff;
	position: absolute;
	right: 2.4rem;
	top: 46%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.bike-builder-filter__options--left .bike-builder-filter__option.bike-builder-filter__container .bike-builder-filter__option:first-child {
	padding-right: 2rem
}

.bike-builder-filter__options--left .bike-builder-filter__option.bike-builder-filter__container .bike-builder-filter__option:first-child:after {
	content: '';
	display: none
}

.bike-builder-filter__options--right {
	float: right
}

.bike-builder-filter__options--right .bike-builder-filter__option {
	margin-right: 0;
	padding-right: 3rem;
	position: relative
}

.bike-builder-filter__options--right .bike-builder-filter__option:after {
	content: '';
	height: 1.2rem;
	width: 0.2rem;
	background-color: #ffffff;
	position: absolute;
	right: 1.4rem;
	top: 48%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.bike-builder-filter__options--right .bike-builder-filter__option:last-child {
	padding-right: 0
}

.bike-builder-filter__options--right .bike-builder-filter__option:last-child:after {
	height: 0;
	width: 0
}

.bike-builder-filter__option {
	display: inline-block;
	margin-right: 2rem
}

.bike-builder-filter__option:last-child {
	margin-right: 0
}

.bike-builder-filter__link {
	text-transform: uppercase;
	line-height: 4.4rem;
	padding-top: 0.3rem;
	text-decoration: none;
	border-bottom: 3px solid transparent
}

@media screen and (min-width: 320px) {
	.bike-builder-filter__link {
		font-size: 1.2rem
	}
}

.bike-builder-filter__link:hover,.bike-builder-filter__link:focus {
	color: #f60
}

.bike-builder-filter__link--active {
	color: #f60;
	border-bottom: 3px solid #f60
}

.bike-builder-filter__title {
	text-transform: uppercase;
	line-height: 5rem;
	padding-right: 20px
}

@media screen and (min-width: 320px) {
	.bike-builder-filter__title {
		font-size: 1.2rem
	}
}

.bike-builder__family {
	clear: both;
	margin-top: 1.5rem
}

.bike-builder__family:last-child {
	margin-bottom: 0
}

.bike-builder__family-bikes {
	display: flex;
	flex-flow: row wrap;
	background-color: #fff
}

.bike-builder__family-bikes img {
	width: 100%;
	height: auto
}

.bike-builder__family-name {
	text-transform: uppercase;
	display: block;
	padding-left: 1.5rem;
	margin-bottom: 3rem;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.bike-builder__family-name {
		font-size: 2.4rem;
		line-height: 2.6rem
	}
}

.bike-builder__bike {
	padding: 0 1.5rem;
	display: table-cell;
	margin-bottom: 3rem
}

.bike-builder__bike-action-group {
	bottom: -10px
}

.bike-builder__bike-name {
	text-transform: uppercase;
	margin-top: 2rem;
	display: block;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.bike-builder__bike-name {
		font-size: 1.6rem;
		line-height: 1.6rem
	}
}

.bike-builder__bike-start-price {
	margin-top: 1rem;
	margin-bottom: 0;
	letter-spacing: 0.05rem;
	display: block;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.bike-builder__bike-start-price {
		font-size: 1.2rem
	}
}

@media screen and (min-width: 320px) {
	.bike-builder__bike-start-price--value {
		font-size: 1.4rem
	}
}

.bike-builder__bike .cta {
	white-space: normal;
	padding: 1.05rem 5.6rem 1.05rem 1.5rem
}

.bike-builder-selector {
	background: #fff url("../../images/bike-builder/bg.jpg") repeat-y;
	background-size: 100%;
	overflow: hidden;
	padding: 6rem 1.5rem
}

.bike-builder-selector-no-image {
	background-image: none
}

.bike-builder-main {
	display: none
}

.bike-builder__container {
	width: 100% !important
}

.bike-builder__container #ngp-main {
	margin-left: 50%;
	transform: translateX(-50%)
}

.tablet .bike-builder__bike .cta {
	white-space: nowrap;
	padding-right: 5.6rem !important
}

@media screen and (min-width: 768px) {
	.bike-builder-mobile {
		display: none
	}

	.bike-builder-main {
		display: block
	}
}

@media screen and (min-width: 768px) and (max-width: 992px) {
	.bike-builder-filter__link {
		font-size: 0.9rem
	}
}

@media screen and (max-width: 768px) and (min-width: 992px) {
	.bike-builder-filter__link {
		font-size: 1rem
	}
}

@media screen and (min-width: 992px) {
	.bike-builder-filter {
		padding: 0 4rem 0 4rem
	}

	.bike-builder-filter__link,.bike-builder-filter__title {
		letter-spacing: 0.1rem;
		font-family: "NotoSans-Bold",sans;
		font-size: 1.2rem
	}
}

@media (min-width: 992px) {
	.bike-builder__family-bikes .col-md-3 {
		width: 24%
	}
}

.left-10 {
	margin-left: 5%
}

.content-cta__item--desc {
	max-width: 600px;
	margin: 0 auto 30px
}

@media screen and (min-width: 320px) {
	.content-cta__item--desc {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.content-cta__item--desc {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.content-cta__item--desc.dark {
	color: #fff
}

.cta-frame {
	height: 10px
}

.cta-frame.dark {
	background: #000
}

.cta-frame.light {
	background: #fff
}

.content-cta__item-text {
	margin: 0 auto;
	padding: 40px;
	width: 100%
}

.content-cta__item-text.cta_1 {
	min-height: 310px
}

.content-cta__item-text.cta_2 {
	min-height: 267px
}

.content-cta__item-text.cta_3 {
	min-height: 310px
}

.content-cta__item-text.cta_5 {
	min-height: 310px
}

.content-cta__item-text.cta_6 {
	min-height: 310px
}

.content-cta__item-text.cta_9 {
	min-height: 295px
}

.content-cta__item-text.cta_10 {
	min-height: 250px;
	padding: 82px 10px 20px 10px
}

.content-cta__item-text.cta_11 {
	min-height: 215px;
	padding: 82px 10px 20px 10px
}

.hog_logo_white {
	width: auto;
	max-height: 60px;
	margin-bottom: 20px
}

.content-cta__item--subtitle,.content-cta__item--title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #000;
	letter-spacing: 1px;
	max-width: 600px;
	margin: 0 auto 10px
}

.content-cta__item--subtitle-white,.content-cta__item--title-white {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #fff;
	letter-spacing: 1px;
	max-width: 600px;
	margin: 0 auto 10px
}

@media screen and (min-width: 320px) {
	.content-cta__item--subtitle-white,.content-cta__item--title-white {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.content-cta__item--subtitle-white,.content-cta__item--title-white {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

@media screen and (min-width: 320px) {
	.content-cta__item--title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.content-cta__item--title {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.cta-icon__play-button .cta-icon {
	width: 18px;
	height: 18px;
	top: inherit;
	border-radius: 50%;
	border: thin solid
}

.cta-icon__play-button .cta-icon:after {
	font-family: cta-icon;
	content: "\e943";
	font-size: 20px;
	left: -2px
}

@media screen and (max-width: 767px) {
	.cta-icon__long-arrow .cta-icon {
		width: 18px
	}

	.cta-icon__long-arrow.cta.cta-btn.cta-animation-expand {
		padding-right: calc(3.5rem + 15px)
	}

	.cta-icon__long-arrow.cta.cta-btn.cta-animation-expand:hover {
		padding-right: calc(4.62rem + 15px)
	}
}

.content-cta {
	background: black;
	text-align: center
}

.content-cta__item {
	display: block;
	height: 100%;
	background-color: #f7f7f7
}

.content-cta__item .content-cta__item-content {
	background-size: cover
}

.content-cta__item .content-cta__item-content--black {
	background: black
}

.content-cta__item .content-cta__item-content--white {
	background: white
}

.content-cta__item .content-cta__item-content--image {
	background-size: cover
}

.content-cta__item .content-cta__item-content--image .content-cta__item-text {
	height: 100%;
	color: #fff
}

.content-cta__item .content-cta__item-content--image .content-cta__item-text h1,.content-cta__item .content-cta__item-content--image .content-cta__item-text h2,.content-cta__item .content-cta__item-content--image .content-cta__item-text h3,.content-cta__item .content-cta__item-content--image .content-cta__item-text h4,.content-cta__item .content-cta__item-content--image .content-cta__item-text h5,.content-cta__item .content-cta__item-content--image .content-cta__item-text h6,.content-cta__item .content-cta__item-content--image .content-cta__item-text p,.content-cta__item .content-cta__item-content--image .content-cta__item-text .cta-link {
	color: #fff
}

.content-cta__item .content-cta__item-content--image .content-cta__item-text .cta-btn {
	background: #fff;
	color: #000 !important
}

.content-cta__item .content-cta__item-content--image .content-cta__item-text .cta-btn .cta-link {
	color: #000
}

.content-cta__item .content-cta__item-content--image .content-cta__item-content--overlay {
	background-color: rgba(0,0,0,0.4)
}

.content-cta__item .content-cta__item-content--overlay {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	width: 100%
}

.content-cta__item .content-cta__item-content--overlay .content-cta__item-text .cta-btn,.content-cta__item .content-cta__item-content--overlay .content-cta__item-text .cta-link {
	margin: 1rem
}

.content-cta__item .content-cta__item-content--overlay .content-cta__item-text .button-video {
	display: inline-block
}

@media (max-width: 767px) {
	.left-10 {
		margin-left: 0;
		margin-top: 10px
	}
}

.bod__headline {
	background-color: #fff;
	margin-left: 10px;
	text-transform: uppercase
}

.bod__item--subtitle,.bod__item--title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #000;
	letter-spacing: 1px
}

.bod__member--wrapper {
	background-color: #fff;
	padding: 15px 0
}

.bod__member--flex-wrapper {
	background-color: #fff;
	display: -webkit-flex;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around
}

.bod__member {
	width: 250px;
	margin: 10px;
	height: 350px
}

.bod__member-name {
	font-family: "Trade-Gothic", sans-serif;
	text-transform: uppercase;
	font-size: 1.9rem;
	margin-top: 10px
}

.bod__member-desc {
	font-family: "NotoSans-Regular",sans;
	font-size: 12px
}

.bod__item--subtitle-white,.bod__item--title-white {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #fff;
	letter-spacing: 1px
}

.promotional {
	background: black;
	text-align: center;
	padding: 15px 0
}

.promotional__item {
	display: block;
	height: 100%;
	background-color: #f7f7f7
}

.promotional__item-wrapper {
	padding-left: 20px;
	padding-right: 20px
}

.promotional__item:nth-child(1) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-1.jpg");
	background-size: cover
}

.promotional__item:nth-child(2) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-2.jpg");
	background-size: cover;
	background-position: -100px
}

.promotional__item:nth-child(3) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-3.jpg");
	background-size: cover
}

.promotional .col-sm-4 .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-4.jpg")
}

.promotional .col-sm-4:nth-child(2) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-5.jpg")
}

.promotional .col-sm-4:nth-child(3) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-6.jpg")
}

.promotional .col-sm-6 .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-4.jpg");
	background-size: 100%;
	background-position: 0
}

@media screen and (min-width: 768px) {
	.promotional .col-sm-6 .promotional__item-content {
		background-image: url("../../images/promotional-card/bg-1.jpg");
		background-size: cover
	}
}

.promotional .col-sm-6:nth-child(2) .promotional__item-content {
	background-image: url("../../images/promotional-card/bg-4.jpg");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.promotional .col-sm-6:nth-child(2) .promotional__item-content {
		background-image: url("../../images/promotional-card/bg-1.jpg");
		background-position: -100px;
		background-size: cover
	}
}

.promotional .col-sm-6:nth-child(3) .promotional__item-content {
	background-position-x: -210px
}

.promotional--single .promotional__item {
	position: relative;
	display: inline-block;
	background: white;
	width: 100%;
	vertical-align: top
}

.promotional--single .promotional__item-top {
	width: 40%;
	float: left;
	height: 100%
}

.promotional--single .promotional__item-top img {
	height: 100%
}

.promotional--single .promotional__item-content {
	width: 60%;
	float: right;
	height: 100%
}

.promotional--single-right .promotional__item-content {
	float: left
}

.promotional--single-right .promotional__item-top {
	right: 0
}

.promotional__item-title,.promotional__item-subtitle {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #000;
	letter-spacing: 1px
}

@media screen and (min-width: 320px) {
	.promotional__item-title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.promotional__item-title {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.promotional__item-desc {
	margin-bottom: 30px;
	letter-spacing: 1px
}

@media screen and (min-width: 320px) {
	.promotional__item-desc {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.promotional__item-desc {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.promotional__item-top {
	position: relative
}

.promotional__item-images {
	width: 100%
}

.promotional__item-text {
	max-width: 400px;
	min-height: 330px;
	margin: 0 auto;
	padding: 60px 10px
}

.promotional__item-content {
	height: auto
}

.promotional__item-content .h3:nth-child(2),.promotional__item-content .h5:nth-child(2) {
	margin-bottom: 15px;
	margin-top: 5px
}

.promotional__item-tag {
	position: absolute;
	bottom: 0;
	background: rgba(0,0,0,0.7);
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	color: white;
	padding: 0 10px;
	min-width: 135px;
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 3px
}

@media screen and (min-width: 320px) {
	.promotional__item-tag {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.promotional__item-tag {
		font-size: 2rem;
		line-height: 4rem
	}
}

.promotional__item-link {
	position: relative;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.promotional__item-link {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.promotional__item-link {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

.promotional__item-link:after {
	font-family: 'icomoon';
	display: inline-block;
	content: "\e91a";
	font-size: 70%;
	height: auto;
	background: none;
	top: 50%;
	position: absolute;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	-webkit-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out
}

.promotional__item-link:hover:after {
	-ms-transform: translate(50%, -50%);
	-webkit-transform: translate(50%, -50%);
	transform: translate(50%, -50%)
}

@media (max-width: 767px) {
	.promotional .promotional__item {
		margin-bottom: 12px
	}

	.promotional .container-fluid {
		margin-bottom: -12px
	}

	.promotional__item-wrapper {
		padding-left: 0;
		padding-right: 0
	}

	.promotional__item-tag {
		padding: 5px 10px;
		min-width: 100px
	}

	.promotional--single .promotional__item-top {
		width: 100%;
		position: relative
	}

	.promotional--single .promotional__item-content {
		width: 100%
	}
}

@media (min-width: 768px) {
	.promotional__item-text {
		max-width: 400px
	}
}

@media (min-width: 768px) {
	.promotional .row {
		display: flex
	}

	.promotional__item-wrapper {
		padding-left: 0px;
		padding-right: 0px;
		margin-left: 15px;
		margin-right: 15px;
		background-color: #f6f6f6
	}
}

.find-event__filter-datepicker .datepicker {
	position: relative;
	top: 0 !important;
	left: 0 !important;
	margin: 0 auto;
	padding-top: 2.5rem;
	clear: both;
	padding-left: 0;
	padding-right: 0;
	max-width: 30rem;
	width: 100%
}

.find-event__filter-datepicker .datepicker-days td {
	border: 0.5rem solid #ffffff
}

.find-event__filter-datepicker .datepicker thead>tr:first-child .prev,.find-event__filter-datepicker .datepicker thead>tr:first-child .datepicker-switch,.find-event__filter-datepicker .datepicker thead>tr:first-child .next {
	padding: 1rem
}

.find-event__filter-datepicker .datepicker-switch {
	font-size: 1.6rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	color: #000000 !important;
	font-family: "NotoSans-Bold",sans
}

.find-event__filter-datepicker .datepicker:before,.find-event__filter-datepicker .datepicker:after {
	display: none
}

.find-event__filter-datepicker .datepicker .table-condensed {
	font-size: 1.6rem;
	margin: 0 auto;
	border-collapse: collapse;
	border-spacing: 0.5rem;
	width: 100%;
	max-width: 34rem;
	box-sizing: border-box
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr th {
	border-radius: 0
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child {
	outline: 0.1rem solid #000000
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child>.prev,.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child>.next {
	text-indent: -9999px
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child>.datepicker-switch:hover {
	background: none
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child>.prev {
	background: url("../../images/calendar-prev-arrow.png") no-repeat right center;
	background-size: 0.65rem 1.1rem
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:first-child>.next {
	background: url("../../images/calendar-next-arrow.png") no-repeat left center;
	background-size: 0.65rem 1.1rem
}

.find-event__filter-datepicker .datepicker .table-condensed thead tr:nth-child(2) th {
	padding-top: 3rem
}

.find-event__filter-datepicker .datepicker .day {
	font-family: "NotoSans-Bold",sans;
	background-color: #f5f5f5;
	border-radius: 0;
	padding: 1rem;
	color: #000000
}

.find-event__filter-datepicker .datepicker .day.active {
	background: #f5f5f5;
	color: #000000
}

.find-event__filter-datepicker .datepicker .day.old,.find-event__filter-datepicker .datepicker .day.new {
	visibility: hidden
}

.find-event__filter-datepicker .datepicker .day.selected {
	color: #000000;
	text-shadow: none;
	background: #e0e0e0 url("../../images/events-calendar/calendar-selected-to.png") no-repeat;
	background-size: 100% 100%;
	text-shadow: none;
	border-color: #ffffff
}

.find-event__filter-datepicker .datepicker .day.selected.active {
	background: #e0e0e0 url("../../images/events-calendar/calendar-selected-from.png") no-repeat;
	background-size: 100% 100%
}

.find-event__filter-datepicker .datepicker .day.selected:hover {
	color: #000000;
	border-color: #ffffff;
	background-color: #e0e0e0
}

.find-event__filter-datepicker .datepicker .day.range {
	background-color: #e0e0e0
}

.find-event__filter-datepicker .datepicker .day.disabled {
	background-color: #ffffff
}

.find-event__filter-datepicker .datepicker.to-datepicker-cal .day.selected {
	background: #e0e0e0 url("../../images/events-calendar/calendar-selected-from.png") no-repeat;
	background-size: 100% 100%
}

.find-event__filter-datepicker .datepicker.to-datepicker-cal .day.selected.active {
	background: #e0e0e0 url("../../images/events-calendar/calendar-selected-to.png") no-repeat;
	background-size: 100% 100%;
	color: #000000
}

.events-calendar {
	overflow-x: hidden
}

.events-calendar--overlay-active {
	position: static;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 0
}

.events-calendar .loader {
	width: 32px;
	height: 47px;
	background-image: url("../../images/ajax-loader.gif");
	display: none;
	margin: 2rem auto 0 auto;
	background-repeat: no-repeat
}

.events-calendar .feature-event {
	padding: 1.5rem;
	margin-bottom: 3rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event {
		padding: 1rem 6rem 0rem 6rem
	}
}

.events-calendar .feature-event__headline {
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 0.14rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__headline {
		font-size: 3rem;
		line-height: 3.1rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

@media screen and (max-width: 767px) {
	.events-calendar .feature-event__headline {
		padding-top: 1rem
	}
}

.events-calendar .feature-event__arrow {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	z-index: 1;
	cursor: pointer;
	display: none;
	height: 0;
	width: 0
}

.events-calendar .feature-event__arrow:active {
	outline: none
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__arrow {
		display: block;
		width: 2.5rem;
		height: 4.7rem
	}
}

.events-calendar .feature-event__arrow--next {
	background: url("../../images/slide-arrow-right-white.png") no-repeat;
	background-size: 100%;
	right: 3.1rem
}

@media screen and (min-width: 480px) {
	.events-calendar .feature-event__arrow--next {
		right: 1.5rem
	}
}

@media screen and (min-width: 768px) and (max-width: 991px) {
	.events-calendar .feature-event__arrow--next {
		right: .5rem
	}
}

.events-calendar .feature-event__arrow--prev {
	background: url("../../images/slide-arrow-left-white.png") no-repeat;
	background-size: 100%;
	left: 3.1rem
}

@media screen and (min-width: 480px) {
	.events-calendar .feature-event__arrow--prev {
		left: 1.5rem
	}
}

@media screen and (min-width: 768px) and (max-width: 991px) {
	.events-calendar .feature-event__arrow--prev {
		left: .5rem
	}
}

.events-calendar .feature-event__carousel .slick-track {
	display: flex
}

.events-calendar .feature-event__carousel .slick-track .feature-event__carousel-item {
	background: transparent;
	min-height: initial
}

.events-calendar .feature-event__carousel .slick-track .feature-event__carousel-item:not(:first-child) {
	display: flex
}

.events-calendar .feature-event__carousel--multi .slick-list {
	padding-right: 3rem
}

.events-calendar .feature-event__carousel--multi .feature-event__carousel-item {
	margin-right: 1.5rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel--multi .feature-event__carousel-item {
		margin: 0 1.5rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel--multi .feature-event__carousel-item-header {
		width: 67.69%;
		flex: 0 0 67.69%
	}

	.events-calendar .feature-event__carousel--multi .feature-event__carousel-item-description {
		width: 32.31%;
		flex: 0 0 32.31%
	}
}

.events-calendar .feature-event__carousel-container {
	position: relative;
	margin-right: -1.5rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-container {
		margin: 2rem -6rem 0 -6rem
	}
}

.events-calendar .feature-event__carousel-slide-numbers {
	color: #ffffff;
	text-align: center;
	display: none;
	margin-top: 3rem;
	margin-bottom: 0
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-slide-numbers {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-slide-numbers {
		font-size: 1.4rem
	}
}

.events-calendar .feature-event__carousel-slide-number {
	font-family: "NotoSans-Bold",sans
}

.events-calendar .feature-event__carousel-item {
	position: relative;
	display: -ms-flexbox;
	display: flex;
	flex-direction: column;
	min-height: 400px;
	height: auto;
	background: #fff
}

.events-calendar .feature-event__carousel-item:not(:first-child) {
	display: none
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item {
		flex-direction: row
	}
}

.events-calendar .feature-event__carousel-item:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.4)
}

.events-calendar .feature-event__carousel-item:focus {
	outline: none
}

.events-calendar .feature-event__carousel-item.slick-current:after {
	height: 0;
	width: 0
}

.events-calendar .feature-event__carousel-item-header {
	position: relative
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-header {
		width: 56.52%;
		flex: 0 0 56.52%
	}
}

.events-calendar .feature-event__carousel-item-header .feature-event__date-container {
	background-color: #222222;
	position: absolute;
	top: 0;
	left: 0;
	padding: 1.2rem 2rem 0.6rem 2rem;
	text-align: center;
	z-index: 1
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date-container {
		left: inherit;
		right: 0;
		padding: 0.2rem 1rem 0.4rem;
		-webkit-transform: translateX(132%);
		-moz-transform: translateX(132%);
		-ms-transform: translateX(132%);
		-o-transform: translateX(132%);
		transform: translateX(132%)
	}
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date-container {
		left: inherit;
		right: 0;
		padding: 0.5rem 1.7rem 0.6rem;
		-webkit-transform: translateX(144%);
		-moz-transform: translateX(144%);
		-ms-transform: translateX(144%);
		-o-transform: translateX(144%);
		transform: translateX(144%)
	}
}

.events-calendar .feature-event__carousel-item-header .feature-event__date {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0;
	color: #ffffff;
	text-transform: uppercase
}

.events-calendar .feature-event__carousel-item-header .feature-event__date--month {
	line-height: 2rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--month {
		font-size: 1.6rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--month {
		font-size: 1.4rem
	}
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--month {
		font-size: 1.6rem
	}
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--day {
		font-size: 3rem;
		line-height: 3rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--day {
		font-size: 2rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__carousel-item-header .feature-event__date--day {
		font-size: 3rem;
		line-height: 3rem
	}
}

.events-calendar .feature-event__carousel-item-header .feature-event__image.hidden-xs {
	position: relative;
	background-color: #fff
}

.events-calendar .feature-event__carousel-item-description {
	background: url("../../images/events-calendar/feautre-event-carousel-bg.jpg");
	background-size: cover;
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	position: relative
}

.events-calendar .feature-event__carousel-item-description-content {
	padding: 1.8rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description {
		width: 43.48%;
		flex: 0 0 43.48%;
		padding-left: 2.1rem
	}

	.events-calendar .feature-event__carousel-item-description-content {
		position: absolute;
		top: 50%;
		left: 0;
		padding: 1rem;
		-webkit-transform: translateY(-32.31%);
		-moz-transform: translateY(-32.31%);
		-ms-transform: translateY(-32.31%);
		-o-transform: translateY(-32.31%);
		transform: translateY(-32.31%);
		width: 100%;
		margin: 0 auto
	}
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__carousel-item-description-content {
		padding: 2.2rem;
		-webkit-transform: translateY(-45%);
		-moz-transform: translateY(-45%);
		-ms-transform: translateY(-45%);
		-o-transform: translateY(-45%);
		transform: translateY(-45%)
	}
}

.events-calendar .feature-event__carousel-item-description .feature-event__name {
	text-transform: uppercase;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__name {
		font-size: 1.8rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__name {
		font-size: 2.1rem;
		line-height: 2.1rem
	}
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__name {
		font-size: 2.6rem;
		line-height: 2.6rem
	}
}

@media screen and (min-width: 1440px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__name {
		font-size: 3.6rem;
		line-height: 4.2rem
	}
}

.events-calendar .feature-event__carousel-item-description .feature-event__location {
	letter-spacing: 0.05rem;
	margin-top: 0.6rem;
	margin-bottom: 0;
	text-transform: capitalize
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__location {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__location {
		font-size: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__location {
		margin-top: 1.2rem
	}
}

.events-calendar .feature-event__carousel-item-description .feature-event__cta {
	letter-spacing: 0.05rem;
	margin-top: 1.4rem;
	padding-right: 2.3rem;
	align-self: flex-start;
	right: 0;
	padding-right: 3rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__cta {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__cta {
		font-size: 1.4rem
	}
}

.events-calendar .feature-event__carousel-item-description .feature-event__cta:hover {
	padding-right: 4rem
}

.events-calendar .feature-event__carousel-item-description .feature-event__cta:active {
	outline: none
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__carousel-item-description .feature-event__cta {
		margin-top: 2.4rem
	}
}

.events-calendar .feature-event__image {
	width: 100%
}

.events-calendar .feature-event__image:focus {
	outline: none
}

.events-calendar .feature-event__overlay-content {
	padding-bottom: 2.5rem
}

@media screen and (min-width: 992px) {
	.events-calendar .feature-event__overlay-content {
		height: 45%;
		max-height: 45%
	}
}

.events-calendar .feature-event__event-overlay {
	display: none;
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: #ffffff;
	top: 0;
	left: 0;
	z-index: 10000;
	overflow: auto
}

.events-calendar .feature-event__event-overlay-image {
	width: 100%
}

@media screen and (min-width: 1440px) {
	.events-calendar .feature-event__event-overlay-image {
		display: block;
		max-width: 1440px;
		margin: 0 auto
	}
}

.events-calendar .feature-event__event-overlay-details {
	padding: 0 1.25rem;
	overflow: hidden;
	max-width: 120rem;
	margin: 0 auto 4.5rem
}

.events-calendar .feature-event__event-overlay-button {
	margin: 3rem 0 0 0
}

@media screen and (max-width: 480px) {
	.events-calendar .feature-event__event-overlay-button {
		display: none
	}
}

.events-calendar .feature-event__event-overlay-button-mobile {
	font-size: 1.4rem;
	position: relative;
	text-align: left;
	display: inline-block;
	margin: 3rem 0 0 2rem
}

.events-calendar .feature-event__event-overlay-button-mobile .icon--long-arrow-right {
	font-size: 1.2rem;
	position: absolute;
	line-height: 49px;
	right: 1.5px;
	top: 0
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-button-mobile {
		display: none
	}
}

.events-calendar .feature-event__event-overlay-date {
	float: left;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0;
	color: #ffffff;
	text-transform: uppercase;
	background-color: #222222;
	text-align: center;
	padding: 0.7rem 1.5rem 0.4rem 1.5rem
}

.events-calendar .feature-event__event-overlay-date-month {
	line-height: 2.4rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__event-overlay-date-month {
		font-size: 1.6rem
	}
}

.events-calendar .feature-event__event-overlay-date-day {
	font-size: 2.8rem;
	line-height: 3.3rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0
}

.events-calendar .feature-event__event-overlay-event-info {
	float: left;
	width: 70%;
	margin-top: 2.2rem;
	margin-left: 2.1rem;
	padding-bottom: 1.1rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-event-info {
		margin-top: 4rem
	}
}

.events-calendar .feature-event__event-overlay-info-group {
	vertical-align: top;
	padding: 0;
	float: none;
	display: inline-block;
	padding-left: 2rem;
	margin-bottom: 3rem
}

.events-calendar .feature-event__event-overlay-info-left,.events-calendar .feature-event__event-overlay-info-right {
	padding: 0
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-info-right {
		padding-left: 4rem
	}

	.events-calendar .feature-event__event-overlay-info-left {
		padding-left: 7.2rem
	}
}

.events-calendar .feature-event__event-overlay-header {
	overflow: hidden;
	border-bottom: 0.1rem solid #797979;
	margin-bottom: 2.4rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-header {
		border-bottom: none
	}
}

.events-calendar .feature-event__event-overlay-name {
	text-transform: uppercase;
	display: block
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__event-overlay-name {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-name {
		font-size: 3.6rem;
		line-height: 4rem
	}
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__event-overlay-location {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-location {
		font-size: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-location {
		clear: both;
		padding-top: 0.6rem
	}
}

.events-calendar .feature-event__event-overlay-headline {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin-top: 2.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__event-overlay-headline {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-headline {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-headline {
		margin-top: 0
	}
}

.events-calendar .feature-event__event-overlay-copy {
	font-size: 1.2rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
	margin-top: 1rem;
	margin-bottom: 0;
	word-break: break-word
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-copy {
		font-size: 1.4rem
	}

	.events-calendar .feature-event__event-overlay-copy:first-child {
		margin-top: 0
	}
}

.events-calendar .feature-event__event-overlay-link {
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: "NotoSans-Regular",sans
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__event-overlay-link {
		font-size: 1.4rem
	}
}

.events-calendar .feature-event__event-overlay-link--underline {
	text-decoration: underline
}

.events-calendar .feature-event__share-overlay {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	z-index: 10000
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay {
		position: fixed;
		top: 6.3rem;
		max-width: 42.5rem;
		height: auto
	}

	.events-calendar .feature-event__share-overlay .feature-event__overlay-top-bar {
		background-color: transparent
	}

	.events-calendar .feature-event__share-overlay .feature-event__overlay-top-bar .feature-event__overlay-close {
		text-indent: -9999px
	}

	.events-calendar .feature-event__share-overlay .feature-event__overlay-top-bar .feature-event__overlay-close:after {
		background: url("../../images/close-btn-black.png") no-repeat;
		background-size: 100%
	}
}

.events-calendar .feature-event__share-overlay-body {
	padding: 10rem 5rem 0rem 5rem
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay-body {
		padding-top: 0;
		padding-bottom: 6rem
	}
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__share-overlay-copy {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay-copy {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.events-calendar .feature-event__share-overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__share-overlay-copy--small {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay-copy--small {
		font-size: 1.4rem
	}
}

.events-calendar .feature-event__share-overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__share-overlay-heading {
		font-size: 3rem;
		line-height: 3.1rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay-heading {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.events-calendar .feature-event__share-overlay-share-ctas {
	margin: 2.8rem 0
}

.events-calendar .feature-event__share-overlay-share-cta {
	margin-right: 3.2rem
}

.events-calendar .feature-event__share-overlay-share-cta--facebook {
	width: 1.4rem
}

.events-calendar .feature-event__share-overlay-share-cta--twitter {
	width: 3.7rem
}

.events-calendar .feature-event__share-overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.events-calendar .feature-event__share-overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__share-overlay-textbox-value {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__share-overlay-textbox-value {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.events-calendar .feature-event__overlay-top-bar {
	background-color: #000000;
	overflow: hidden;
	min-height: 6rem
}

.events-calendar .feature-event__overlay-share {
	background-color: #202020;
	padding: 1.25rem 1.4rem 1rem 1.4rem;
	float: left
}

@media screen and (min-width: 768px) {
	.events-calendar .feature-event__overlay-share:hover,.events-calendar .feature-event__overlay-share--active {
		background-color: #f60;
		background-color: #f60;
		color: #000000
	}

	.events-calendar .feature-event__overlay-share:hover .feature-event__overlay-share-copy,.events-calendar .feature-event__overlay-share--active .feature-event__overlay-share-copy {
		color: #000000
	}

	.events-calendar .feature-event__overlay-share:hover .feature-event__overlay-share-image--white,.events-calendar .feature-event__overlay-share--active .feature-event__overlay-share-image--white {
		display: none
	}

	.events-calendar .feature-event__overlay-share:hover .feature-event__overlay-share-image--black,.events-calendar .feature-event__overlay-share--active .feature-event__overlay-share-image--black {
		display: block
	}
}

.events-calendar .feature-event__overlay-share-image {
	display: block;
	width: 2rem;
	margin: 0 auto
}

.events-calendar .feature-event__overlay-share-image--black {
	display: none
}

.events-calendar .feature-event__overlay-share-copy {
	font-family: "NotoSans-Regular",sans;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__overlay-share-copy {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.events-calendar .feature-event__overlay-title {
	line-height: 1.6rem;
	color: #ffffff;
	padding-top: 2.5rem;
	margin-left: 2rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__overlay-title {
		font-size: 1.6rem
	}
}

.events-calendar .feature-event__overlay-close {
	text-transform: uppercase;
	float: right;
	margin-top: 2.5rem;
	margin-right: 2rem;
	padding-right: 3.2rem;
	position: relative;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.events-calendar .feature-event__overlay-close {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.events-calendar .feature-event__overlay-close:after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	background: url("../../images/close-btn.png");
	background-size: 100%
}

.events-calendar .find-event {
	background-color: #fff;
	padding: 4rem 0
}

.events-calendar .find-event__search-again {
	padding: 2rem 1rem 1rem 1rem;
	background-color: #494949;
	position: relative;
	text-align: center;
	position: fixed;
	top: 30%;
	right: 0;
	z-index: 999;
	cursor: pointer;
	-webkit-transform: translateX(100%);
	-moz-transform: translateX(100%);
	-ms-transform: translateX(100%);
	-o-transform: translateX(100%);
	transform: translateX(100%)
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__search-again {
		display: none
	}
}

.events-calendar .find-event__search-again--active {
	-webkit-transform: translateX(0);
	-moz-transform: translateX(0);
	-ms-transform: translateX(0);
	-o-transform: translateX(0);
	transform: translateX(0)
}

.events-calendar .find-event__search-again-copy {
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin: 0;
	max-width: 4.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__search-again-copy {
		font-size: 0.9rem;
		line-height: 1.4rem
	}
}

.events-calendar .find-event__search-again:before {
	content: '';
	position: absolute;
	top: 0.6rem;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%);
	width: 1.5rem;
	height: 0.9rem;
	background: url("../../images/up-arrow-white.png") no-repeat;
	background-size: 100%
}

.events-calendar .find-event__headline {
	text-transform: uppercase;
	display: block;
	padding-left: 1.5rem;
	padding-right: 1.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__headline {
		font-size: 3rem;
		line-height: 3.1rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__headline {
		text-align: center;
		padding-left: 0;
		padding-right: 0
	}
}

.events-calendar .find-event__filters {
	border-bottom: 0.2rem solid #dfdfdf;
	padding-top: 2rem;
	max-width: 67.5rem;
	margin: 0 auto
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filters {
		padding-top: 1rem
	}
}

.events-calendar .find-event__filters--location {
	border-bottom: 0px
}

.events-calendar .find-event__filters--location.hidden-fileters .find-event__filter-container.find-event__filter-container--location {
	margin: 0 auto;
	text-align: left
}

.events-calendar .find-event__filter-container::last-child {
	border-bottom: 2px solid #ccc
}

.events-calendar .find-event__filter-container:last-child .find-event__filter-options-container {
	padding-bottom: 2em
}

.events-calendar .find-event__filter-container--location {
	margin: 0
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-container--location {
		display: table;
		width: 50%
	}
}

.events-calendar .find-event__filter-container--location.cta-container {
	margin: 3rem auto 0 auto
}

.events-calendar .find-event__filter-container--location.cta-container.show-margin {
	margin: 1rem auto
}

.events-calendar .find-event__filter-container--location .find-event__button.cta--black {
	width: 100%;
	outline: 2px solid #000
}

.events-calendar .find-event__filter-container--location .find-event__filter-input-container {
	max-width: 100%;
	margin-bottom: 2.2rem
}

.events-calendar .find-event__filter-container--location .cta-btn {
	width: 92.5%;
	margin: 0 auto
}

.events-calendar .find-event__filter-container--optional {
	display: none
}

.events-calendar .find-event__filter-title {
	text-transform: uppercase;
	border-top: 0.2rem solid #dfdfdf;
	border-bottom: 0.2rem solid #dfdfdf;
	display: block;
	margin-top: -2px;
	padding: 2.7rem 4.2rem 2.3rem 1.5rem;
	position: relative;
	cursor: pointer
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__filter-title {
		font-size: 2.1rem;
		line-height: 2.1rem
	}
}

.events-calendar .find-event__filter-title:active {
	outline: none
}

.events-calendar .find-event__filter-title-focus {
	outline-width: 0
}

.events-calendar .find-event__filter-title:after {
	content: '';
	position: absolute;
	right: 3.2rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 1rem;
	height: 0.5rem;
	background: url("../../images/dropdown-arrow-black.png") no-repeat;
	background-size: 100%
}

.events-calendar .find-event__filter-title--expanded:after {
	background-image: url("../../images/dropdown-arrow-black-up.png")
}

.events-calendar .find-event__filter-title--location {
	font-size: 1.8rem;
	line-height: 2.4rem;
	padding-bottom: 0.6rem;
	padding-top: 2.7rem;
	border: 0;
	cursor: normal
}

.events-calendar .find-event__filter-title--location:after {
	width: 0;
	height: 0;
	display: none
}

.events-calendar .find-event__filter-input {
	display: block;
	width: 100%;
	padding: 1.2rem;
	padding-right: 3.2rem;
	border: none;
	outline: 2px solid #000
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__filter-input {
		font-size: 1.6rem
	}
}

.events-calendar .find-event__filter-input:focus {
	outline: 2px solid #000
}

.events-calendar .find-event__filter-input::-webkit-input-placeholder {
	color: #a3a3a3
}

.events-calendar .find-event__filter-input::-moz-input-placeholder {
	color: #a3a3a3
}

.events-calendar .find-event__filter-input::-ms-input-placeholder {
	color: #a3a3a3
}

.events-calendar .find-event__filter-input--error {
	border-color: #a8000a
}

.events-calendar .find-event__filter-input-container {
	width: 92.5%;
	margin: 0 auto 3.2rem auto;
	position: relative
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-input-container {
		margin: 0 0 3.2rem 1.5rem;
		max-width: 34rem
	}
}

.events-calendar .find-event__filter-input-container .loader {
	position: absolute;
	right: 2rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	margin-top: 0;
	height: 32px
}

.events-calendar .find-event__filter-input-location {
	position: absolute;
	right: 0.8rem;
	width: 2.4rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

@media screen and (min-width: 992px) {
	.events-calendar .find-event__filter-input-location {
		display: none
	}
}

.events-calendar .find-event__filter-search-predictions {
	list-style-type: none;
	padding-left: 0;
	margin-bottom: 0;
	margin-top: 1rem;
	display: none;
	width: 92.5%;
	margin: 0 auto 2.2rem auto;
	max-width: 34rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__filter-search-predictions {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-search-predictions {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-search-predictions {
		margin: 0 0 2.2rem 1.5rem
	}
}

.events-calendar .find-event__filter-search-prediction {
	padding: 0.8rem 0.8rem 0.6rem 0.8rem;
	cursor: pointer
}

.events-calendar .find-event__filter-search-prediction:hover {
	background-color: #ccc
}

.events-calendar .find-event__filter-search-prediction-link {
	font-family: "NotoSans-Regular",sans
}

.events-calendar .find-event__filter-search-prediction-bg {
	background-color: #ccc
}

.events-calendar .find-event__filter-options-container {
	display: none;
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: #ffffff;
	z-index: 1000
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-options-container {
		position: relative;
		z-index: 1
	}
}

.events-calendar .find-event__filter-options {
	margin-top: 1.5rem
}

.events-calendar .find-event__filter-options-mobile-header {
	position: relative;
	border-bottom: 0.2rem solid #dfdfdf
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-options-mobile-header {
		display: none
	}
}

.events-calendar .find-event__filter-options-mobile-title {
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding: 1.8rem 0 1.8rem 1.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__filter-options-mobile-title {
		font-size: 2.1rem;
		line-height: 2.1rem
	}
}

.events-calendar .find-event__filter-options-mobile-close {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	height: 1.9rem;
	width: 1.9rem;
	background: url("../../images/close-icon-black.png") no-repeat;
	background-size: 100%;
	text-indent: -9999px;
	font-size: 0
}

.events-calendar .find-event__filter-option:focus {
	outline: none;
	background-color: #dfdfdf
}

.events-calendar .find-event__filter-datepicker {
	display: none;
	width: 100%;
	background-color: #ffffff;
	padding: 0 1.5rem;
	text-align: left
}

.events-calendar .find-event__filter-datepicker-container .dropdown-menu {
	border: 0;
	-webkit-box-shadow: none;
	box-shadow: none
}

.events-calendar .find-event__filter-datepicker-inputs {
	clear: both;
	max-width: 30rem;
	margin: 0 auto
}

.events-calendar .find-event__filter-datepicker-back {
	padding-left: 1.5rem;
	text-transform: uppercase;
	position: relative;
	margin-top: 2rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__filter-datepicker-back {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .find-event__filter-datepicker-back {
		font-size: 1.4rem
	}
}

.events-calendar .find-event__filter-datepicker-back:before {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 0.9rem;
	height: 1.5rem;
	background: url("../../images/pagination-arrow-prev.png") no-repeat;
	background-size: 100%
}

.events-calendar .find-event__filter-datepicker-input {
	border: none;
	outline: none;
	float: left;
	width: 47.5%;
	color: #999999;
	text-align: left;
	padding-top: 0.5rem;
	font-size: 1.6rem;
	cursor: pointer
}

.events-calendar .find-event__filter-datepicker-input-focus {
	outline: 5px auto -webkit-focus-ring-color !important
}

.events-calendar .find-event__filter-datepicker-input:first-child {
	position: relative;
	border-right: 0.1rem solid #000000
}

.events-calendar .find-event__filter-datepicker-input:nth-child(2) {
	float: right
}

.events-calendar .find-event__filter-datepicker-input::-webkit-input-placeholder {
	color: #999999
}

.events-calendar .find-event__filter-datepicker-input::-moz-input-placeholder {
	color: #999999
}

.events-calendar .find-event__filter-datepicker-input::-ms-input-placeholder {
	color: #999999
}

.events-calendar .find-event__filter-datepicker-input--active {
	color: #000000
}

.events-calendar .find-event__filter-datepicker-input--active::-webkit-input-placeholder {
	color: #000000
}

.events-calendar .find-event__filter-datepicker-input--active::-moz-input-placeholder {
	color: #000000
}

.events-calendar .find-event__filter-datepicker-input--active::-ms-input-placeholder {
	color: #000000
}

.events-calendar .find-event__filter-datepicker-input--date-selected {
	color: #000000
}

.events-calendar .find-event__filter-datepicker-input-titles {
	margin-top: 3.5rem;
	overflow: hidden;
	margin: 4rem auto 0 auto;
	text-align: center;
	max-width: 30rem;
	position: relative;
	display: -ms-flexbox;
	-ms-flex-pack: justify;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	display: flex;
	justify-content: space-between
}

.events-calendar .find-event__filter-datepicker-input-title {
	width: 47.5%;
	float: left;
	font-family: "NotoSans-Bold",sans;
	text-align: left;
	margin-bottom: 0;
	font-size: 1.6rem
}

.events-calendar .find-event__filter-datepicker-input-title:first-child {
	border-right: 0.1rem solid #000000
}

.events-calendar .find-event__filter-datepicker-input-title:nth-child(2) {
	float: right
}

.events-calendar .find-event__filter-option {
	padding: 1rem 0 1rem 3.5rem;
	margin: 0;
	cursor: pointer
}

.events-calendar .find-event__filter-option--selected {
	background-color: #dfdfdf
}

.events-calendar .find-event__button {
	display: block;
	margin: 3rem auto 0 auto
}

.events-calendar .find-event__button.cta--black {
	background-color: #000;
	color: #fff;
	width: 34rem
}

@media screen and (min-width: 320px) {
	.events-calendar .find-event__button {
		font-size: 1.4rem
	}
}

.events-calendar .find-event__button:active {
	outline: none !important
}

.events-calendar .find-event__button:focus {
	outline: 5px auto -webkit-focus-ring-color
}

.events-calendar .find-event__button--again {
	background-color: #dfdfdf;
	border: none;
	color: #777
}

.events-calendar .find-event__button--again:focus {
	outline: 5px auto -webkit-focus-ring-color
}

.events-calendar .find-event__button--inactive {
	display: none
}

.events-calendar .events-results {
	background-color: #ffffff;
	display: none
}

.events-calendar .events-results__headline {
	width: 80%;
	margin: 0 auto;
	text-align: center;
	text-transform: none;
	display: block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__headline {
		font-size: 2.4rem;
		line-height: 2.6rem
	}
}

.events-calendar .events-results__headline span {
	font-family: "Trade-Gothic-Regular",sans
}

.events-calendar .events-results__accordion-container {
	border-bottom: 0.2rem solid #000000;
	overflow: hidden;
	max-width: 67.5rem;
	margin: 0 auto;
	padding-top: 3.2rem
}

.events-calendar .events-results__no-border {
	border-bottom: none
}

.events-calendar .events-results__accordion-item {
	border-top: 0.2rem solid #000000;
	padding-left: 1.5rem;
	clear: both;
	margin-bottom: 2rem;
	overflow: hidden
}

.events-calendar .events-results__accordion-item:active {
	outline: none
}

.events-calendar .events-results__accordion-item-focus {
	outline-width: 0 !important
}

.events-calendar .events-results__accordion-item:last-child .events-results__accordion-item-content {
	margin-bottom: 2rem
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item {
		padding-left: 0;
		margin-bottom: 2rem
	}
}

.events-calendar .events-results__accordion-item-open {
	margin-bottom: 0
}

.events-calendar .events-results__accordion-item-date {
	float: left;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0;
	color: #ffffff;
	text-transform: uppercase;
	background-color: #222222;
	text-align: center;
	padding: 0.7rem 1.5rem 0.4rem 1.5rem
}

.events-calendar .events-results__accordion-item-month {
	line-height: 2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__accordion-item-month {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-month {
		font-size: 1.4rem
	}
}

.events-calendar .events-results__accordion-item-day {
	font-size: 1.8rem;
	line-height: 2.2rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0
}

.events-calendar .events-results__accordion-item-info {
	float: left;
	width: 80%;
	margin-left: 2rem;
	margin-top: 2.2rem;
	cursor: pointer
}

@media screen and (max-width: 767px) {
	.events-calendar .events-results__accordion-item-info {
		width: 70%
	}
}

@media screen and (max-width: 480px) {
	.events-calendar .events-results__accordion-item-info {
		width: 60%
	}
}

.events-calendar .events-results__accordion-item-name {
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__accordion-item-name {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-name {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

.events-calendar .events-results__accordion-item-location {
	margin-top: 1.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__accordion-item-location {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-location {
		font-size: 1.4rem
	}
}

.events-calendar .events-results__accordion-item-expand {
	float: right;
	height: 2.2rem;
	width: 2.2rem;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	margin-top: 2.1rem;
	margin-right: 3rem;
	cursor: pointer
}

.events-calendar .events-results__accordion-item-expand:active {
	outline: none
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-expand {
		margin-right: 1px
	}
}

.events-calendar .events-results__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.events-calendar .events-results__accordion-item-content {
	display: none;
	background-color: #EDEDED;
	color: #000000;
	clear: both;
	margin-left: -1.5rem;
	padding: 3rem 5rem
}

.events-calendar .events-results__accordion-item-headline {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin-top: 2.5rem
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__accordion-item-headline {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-headline {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

.events-calendar .events-results__accordion-item-copy {
	font-size: 1.2rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
	margin-top: 1rem;
	margin-bottom: 0
}

.events-calendar .events-results__accordion-item-copy .mobile {
	display: inline-block
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__accordion-item-copy .mobile {
		display: none
	}
}

.events-calendar .events-results__accordion-item-link {
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: "NotoSans-Regular",sans
}

.events-calendar .events-results__accordion-item-link--underline {
	text-decoration: underline
}

.events-calendar .events-results__accordion-item-link:active {
	outline: none
}

.events-calendar .events-results__accordion-item-link:focus {
	outline: 5px auto -webkit-focus-ring-color !important;
	outline-offset: -2px
}

.events-calendar .events-results__accordion-item-link.link--black {
	font-weight: bold
}

.events-calendar .events-results__see-more {
	clear: both;
	text-align: center;
	display: block;
	margin: 1rem auto 2rem auto;
	text-transform: uppercase;
	padding: 2rem
}

@media screen and (min-width: 320px) {
	.events-calendar .events-results__see-more {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.events-calendar .events-results__see-more {
		font-size: 1.4rem
	}
}

.events-calendar .events-results__see-more:after {
	font-family: 'cta-icon';
	content: "\E93D";
	padding-left: 0.5rem
}

.events-calendar .events-results__see-more:active {
	outline: none
}

.events-calendar .events-results__see-more:focus {
	outline: 5px auto -webkit-focus-ring-color !important
}

.events-calendar .events-results__tip {
	margin-top: 18px
}

.events-calendar .events-results__search-again {
	position: relative;
	padding-top: 8px;
	padding-right: 18px;
	color: inherit;
	font-family: "NotoSans-Bold",sans
}

.events-calendar .events-results__search-again:hover {
	color: inherit;
	text-decoration: none
}

.events-calendar .events-results__search-again:after {
	content: '';
	display: block;
	position: absolute;
	top: 14px;
	right: 0;
	width: 11.5px;
	height: 7.5px;
	background: url("../../images/up-arrow-black.png") no-repeat center;
	background-size: cover
}

.events-calendar .events-results__no-results-description {
	display: none
}

@media screen and (min-width: 992px) {
	.ie .events-calendar .slick-track {
		left: -10px
	}
}

@media screen and (min-width: 768px) {
	.ie .events-calendar .feature-event__carousel--multi .feature-event__carousel-item {
		margin: 0 1.5rem;
		margin-right: 3rem
	}

	.ie .events-calendar .feature-event__carousel--multi .feature-event__carousel-item:after {
		width: 103%
	}
}

@media screen and (min-width: 992px) {
	.ie .events-calendar .feature-event__carousel--multi .feature-event__carousel-item {
		margin: 0 2rem
	}
}

.more-events {
	background: #ffffff;
	max-width: 67.5rem;
	margin: 0 auto;
	text-align: center;
	padding-bottom: 70px;
	padding-top: 25px;
	border-top: thin solid #ccc
}

.more-events__headline {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	font-size: 1.9rem;
	text-align: center;
	margin-bottom: 10px
}

.more-events__desc {
	font-family: "NotoSans-Regular",sans;
	max-width: 53rem;
	text-align: center;
	margin: 0 auto;
	margin-bottom: 10px
}

.more-events__cta {
	margin-top: 30px
}

.ipad .events-calendar .feature-event__carousel-item-header .feature-event__image.hidden-xs {
	transform: translateY(0%);
	top: 0
}

.rtl .events-calendar .feature-event__event-overlay-event-info {
	float: right
}

@media screen and (min-width: 768px) {
	.rtl .events-calendar .feature-event__event-overlay-event-info {
		padding-right: 9.5rem
	}
}

@media screen and (min-width: 992px) {
	.rtl .events-calendar .feature-event__event-overlay-event-info {
		padding-right: 14rem
	}
}

.rtl .events-calendar .feature-event__carousel-container {
	clear: both;
	padding-top: 2rem
}

@media screen and (min-width: 768px) {
	.rtl .events-calendar .feature-event__carousel-container {
		padding-top: 3rem
	}
}

.rtl .events-calendar .feature-event__headline,.rtl .events-calendar .feature-event__carousel-item-description .feature-event__cta {
	float: right;
	padding-right: 0px
}

.rtl .events-calendar .feature-event__event-overlay-headline,.rtl .events-calendar .feature-event__event-overlay-copy,.rtl .events-calendar .feature-event__event-overlay-button {
	float: right;
	clear: both
}

.rtl .events-calendar .feature-event__event-overlay-info-group {
	padding-right: 2rem
}

.new-rider {
	color: #fff;
	position: relative;
	overflow: hidden;
	padding: 15px 0 0 0
}

.new-rider__header {
	position: relative
}

.new-rider__details {
	padding: 4rem 0 0 3rem;
	width: 95%;
	position: relative
}

.new-rider__details--name {
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.new-rider__details--name {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__details--name {
		font-size: 2.4rem;
		line-height: 3.6rem
	}
}

.new-rider__details--headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider__details--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__details--headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.new-rider__details--price {
	text-transform: none;
	letter-spacing: 0.1rem;
	margin-top: 1.4rem
}

@media screen and (min-width: 320px) {
	.new-rider__details--price {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__details--price {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 320px) {
	.new-rider__details--title {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__details--title {
		font-size: 2.4rem;
		line-height: 5.2rem
	}
}

.new-rider__image {
	width: 97%;
	margin-top: 2rem
}

.new-rider .button {
	position: relative;
	padding-right: 44px;
	min-width: 340px;
	width: auto;
	text-align: left;
	margin-top: 2rem
}

.new-rider .button:hover {
	background-color: #ffffff;
	border-color: #000000;
	color: #000000
}

.new-rider .button:after {
	content: '';
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	right: 1.8rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/cta-arrow-right.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.new-rider .button {
		margin-top: 5rem
	}
}

.new-rider__subnav {
	overflow: hidden;
	background-color: #202020;
	padding: 0;
	text-align: center;
	position: relative;
	min-width: 500px
}

.new-rider__subnav-option {
	display: inline-block;
	margin-right: 2rem;
	position: relative
}

.new-rider__subnav-link {
	padding: 2rem 0
}

.new-rider__subnav-link:hover {
	color: #ff6600;
	border-bottom: 3px solid #ff6600
}

@media screen and (min-width: 768px) {
	.new-rider__subnav-option {
		margin-right: 5rem
	}
}

.new-rider__accordion {
	background: #fff;
	padding: 5rem 0 11rem 0
}

.new-rider__accordion-heading {
	display: block;
	margin: 0 auto 4rem auto;
	color: #000;
	text-align: center
}

@media screen and (min-width: 320px) {
	.new-rider__accordion-heading {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__accordion-heading {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.new-rider__accordion-container {
	border-bottom: 0.2rem solid #000000;
	overflow: hidden;
	max-width: 67.5rem;
	margin: 3.2rem auto 0 auto;
	background-color: #fff
}

.new-rider__accordion-item {
	border-top: 0.2rem solid #000000;
	padding-left: 1.5rem;
	clear: both;
	margin-bottom: 1rem;
	overflow: hidden
}

@media screen and (min-width: 768px) {
	.new-rider__accordion-item {
		padding-left: 0;
		margin-bottom: 1rem
	}
}

.new-rider__accordion-item-name {
	color: #000000;
	font-size: 2.6rem
}

.new-rider__accordion-item-open {
	margin-bottom: 0
}

.new-rider__accordion-item-info {
	float: left;
	width: 60%;
	margin-left: 2rem;
	margin-top: 2.2rem
}

.new-rider__accordion-item-expand {
	float: right;
	height: 2.2rem;
	width: 2.2rem;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	margin-top: 3rem;
	margin-right: 3rem;
	cursor: pointer
}

@media screen and (min-width: 768px) {
	.new-rider__accordion-item-expand {
		margin-right: 0
	}
}

.new-rider__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.new-rider__accordion-item-content {
	display: none;
	background-color: #000000;
	color: #ffffff;
	clear: both;
	margin-left: -1.5rem;
	padding: 3rem 5rem
}

.new-rider__accordion-item-headline {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin-top: 2.5rem
}

@media screen and (min-width: 320px) {
	.new-rider__accordion-item-headline {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__accordion-item-headline {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

.new-rider__accordion-item-copy {
	font-size: 1.2rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
	margin-top: 1rem;
	margin-bottom: 0
}

.new-rider__accordion-item-link {
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: "NotoSans-Regular",sans
}

.new-rider__accordion-item-link--underline {
	text-decoration: underline
}

.new-rider__course {
	margin: 2rem auto;
	width: 90%;
	overflow: hidden
}

.new-rider__course-headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider__course-headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider__course-headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.new-rider__course-copy {
	font-size: 1.6rem;
	line-height: 2.4rem
}

.new-rider__jumpstart {
	margin: 2rem auto;
	width: 90%;
	overflow: hidden;
	padding: 2rem 0 0 0
}

.new-rider__jumpstart__image-pull {
	position: absolute;
	z-index: 1;
	width: 75%;
	left: 13%;
	transform: translateY(-20%)
}

.new-rider__jumpstart__video-pull {
	position: absolute;
	z-index: 10;
	transform: translateY(60%)
}

.new-rider__jumpstart .course__button {
	margin: 3rem 0rem
}

@media screen and (min-width: 768px) {
	.new-rider__jumpstart,.new-rider__course {
		margin: 10rem auto
	}

	.new-rider__jumpstart {
		padding: 10rem 0 21rem 0
	}

	.new-rider__jumpstart .course__button {
		margin-top: 5rem
	}
}

.new-rider .course__button-101 {
	margin: 2rem 3rem
}

@media screen and (min-width: 768px) {
	.new-rider__details {
		position: absolute;
		left: 73%;
		width: 25%;
		transform: translateY(0%)
	}

	.new-rider__image {
		width: 80%
	}

	.new-rider .course__button-101 {
		margin: 2rem 3rem
	}
}

@media screen and (min-width: 992px) {
	.new-rider__details {
		transform: translateY(50%)
	}
}

.new-rider-uk {
	color: #fff;
	position: relative;
	overflow: hidden;
	padding: 15px 0 0 0
}

.new-rider-uk__header-video {
	position: relative
}

.new-rider-uk__header-lockup {
	position: absolute;
	top: 3%;
	transform: translateX(0%);
	left: 18%;
	right: 18%;
	max-width: 25rem;
	text-align: center
}

@media screen and (min-width: 320px) {
	.new-rider-uk__header-lockup h1 {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__header-lockup h1 {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__header-lockup {
		position: absolute;
		top: 20%;
		left: 32%;
		max-width: 54rem;
		text-align: center
	}
}

@media screen and (max-width: 992px) {
	.new-rider-uk__header-lockup {
		top: 10%;
		left: 15%;
		right: 15%;
		max-width: 57rem
	}
}

@media screen and (min-width: 992px) {
	.new-rider-uk__header-lockup {
		top: 9%;
		left: 32%;
		right: 32%;
		max-width: 53rem
	}
}

.new-rider-uk__billboard {
	position: relative
}

.new-rider-uk__billboard-button {
	margin: 4rem auto
}

.new-rider-uk__details {
	padding: 4rem 0 0 3rem;
	width: 95%;
	position: relative
}

.new-rider-uk__details--name {
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.new-rider-uk__details--name {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__details--name {
		font-size: 2.4rem;
		line-height: 3.6rem
	}
}

.new-rider-uk__details--headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider-uk__details--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__details--headline {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

.new-rider-uk__details--price {
	text-transform: none;
	letter-spacing: 0.1rem;
	margin-top: 1.4rem
}

@media screen and (min-width: 320px) {
	.new-rider-uk__details--price {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__details--price {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.new-rider-uk__details--title {
	border-top: 8px solid #000
}

@media screen and (min-width: 320px) {
	.new-rider-uk__details--title {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__details--title {
		font-size: 2.4rem;
		line-height: 5.2rem
	}
}

.new-rider-uk__image {
	width: 100%;
	margin-top: 2rem
}

.new-rider-uk .button {
	position: relative;
	padding-right: 44px;
	min-width: 2.7rem;
	width: auto;
	text-align: left;
	margin-top: 2rem
}

.new-rider-uk .button:hover {
	background-color: #ffffff;
	border-color: #000000;
	color: #000000
}

.new-rider-uk .button:after {
	content: '';
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	right: 1.8rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/cta-arrow-right.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.new-rider-uk .button {
		margin-top: 5rem
	}
}

.new-rider-uk__accordion {
	background: #fff;
	padding: 5rem 0 11rem 0
}

.new-rider-uk__accordion-heading {
	display: block;
	margin: 0 auto 4rem auto;
	color: #000;
	text-align: center
}

@media screen and (min-width: 320px) {
	.new-rider-uk__accordion-heading {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__accordion-heading {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

.new-rider-uk__accordion-container {
	border-bottom: 0.2rem solid #000000;
	overflow: hidden;
	max-width: 67.5rem;
	margin: 3.2rem auto 0 auto;
	background-color: #fff
}

.new-rider-uk__accordion-item {
	border-top: 0.2rem solid #000000;
	padding-left: 1.5rem;
	clear: both;
	margin-bottom: 1rem;
	overflow: hidden
}

@media screen and (min-width: 768px) {
	.new-rider-uk__accordion-item {
		padding-left: 0;
		margin-bottom: 1rem
	}
}

.new-rider-uk__accordion-item-name {
	color: #000000;
	font-size: 2.6rem
}

.new-rider-uk__accordion-item-open {
	margin-bottom: 0
}

.new-rider-uk__accordion-item-info {
	float: left;
	width: 60%;
	margin-left: 2rem;
	margin-top: 2.2rem
}

.new-rider-uk__accordion-item-expand {
	float: right;
	height: 2.2rem;
	width: 2.2rem;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	margin-top: 3rem;
	margin-right: 3rem;
	cursor: pointer
}

@media screen and (min-width: 768px) {
	.new-rider-uk__accordion-item-expand {
		margin-right: 0
	}
}

.new-rider-uk__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.new-rider-uk__accordion-item-content {
	display: none;
	background-color: #000000;
	color: #ffffff;
	clear: both;
	margin-left: -1.5rem;
	padding: 3rem 5rem
}

.new-rider-uk__accordion-item-headline {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin-top: 2.5rem
}

@media screen and (min-width: 320px) {
	.new-rider-uk__accordion-item-headline {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__accordion-item-headline {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

.new-rider-uk__accordion-item-copy {
	font-size: 1.2rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
	margin-top: 1rem;
	margin-bottom: 0
}

.new-rider-uk__accordion-item-link {
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: "NotoSans-Regular",sans
}

.new-rider-uk__accordion-item-link--underline {
	text-decoration: underline
}

.new-rider-uk__icon-stars {
	height: 3rem;
	text-align: center
}

.new-rider-uk__icon-stars-star {
	display: inline-block;
	width: 2rem;
	height: 1rem;
	background-image: url(../../images/star.png);
	background-repeat: no-repeat;
	background-size: contain
}

.new-rider-uk__content {
	min-height: 50rem;
	position: relative
}

.new-rider-uk__content .new-rider-uk__details-container,.new-rider-uk__content .new-rider-uk__details--details {
	margin: 1em 3rem
}

@media screen and (min-width: 768px) {
	.new-rider-uk__details {
		position: absolute;
		left: 66%;
		width: 36rem;
		transform: translateY(0%)
	}

	.new-rider-uk__image {
		width: 100%
	}

	.new-rider-uk__billboard img {
		width: 75%
	}

	.new-rider-uk .course__button-101 {
		margin: 2rem 3rem
	}

	.new-rider-uk__content {
		min-height: 100rem;
		background-color: #fff
	}

	.new-rider-uk__content .new-rider-uk__details-container {
		color: #000;
		position: absolute;
		max-width: 36rem;
		top: 12%;
		left: 12%
	}

	.new-rider-uk__content .new-rider-uk__details--details {
		position: absolute;
		color: #000;
		max-width: 45rem;
		left: 53%;
		top: 69%
	}

	.new-rider-uk__content-image-right {
		position: absolute;
		width: 45%;
		left: 44%;
		top: 16%;
		z-index: 10
	}
}

@media screen and (min-width: 768px) and (max-width: 992px) {
	.new-rider-uk__content-image-right {
		width: 45%;
		left: 49%;
		top: 18%
	}
}

@media screen and (min-width: 768px) {
	.new-rider-uk__content-image-left {
		position: absolute;
		width: 35%;
		top: 51%;
		left: 13%;
		z-index: 5
	}
}

@media screen and (min-width: 992px) {
	.new-rider-uk__details {
		transform: translateY(37%)
	}

	.new-rider-uk .play-button {
		top: 56%
	}
}

@media screen and (max-width: 992px) and (min-width: 768px) {
	.new-rider-uk__details {
		transform: translateY(16%);
		left: 53%
	}

	.new-rider-uk .play-button {
		top: 55%
	}
}

.new-rider-china {
	color: #fff;
	position: relative;
	overflow: hidden;
	padding: 15px 0 0 0
}

.new-rider-china__header-video {
	position: relative
}

.new-rider-china__header-lockup {
	position: absolute;
	top: 3%;
	transform: translateX(0%);
	left: 18%;
	right: 18%;
	max-width: 25rem;
	text-align: center
}

@media screen and (min-width: 320px) {
	.new-rider-china__header-lockup h1 {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__header-lockup h1 {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__header-lockup {
		position: absolute;
		top: 20%;
		left: 32%;
		max-width: 54rem;
		text-align: center
	}
}

@media screen and (max-width: 992px) {
	.new-rider-china__header-lockup {
		top: 10%;
		left: 15%;
		right: 15%;
		max-width: 57rem
	}
}

@media screen and (min-width: 992px) {
	.new-rider-china__header-lockup {
		top: 9%;
		left: 32%;
		right: 32%;
		max-width: 53rem
	}
}

.new-rider-china__billboard {
	position: relative;
	margin: 4rem 0
}

.new-rider-china__billboard-button {
	margin: 4rem auto
}

.new-rider-china__details {
	padding: 4rem 0 0 3rem;
	width: 95%;
	position: relative
}

.new-rider-china__details--name {
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.new-rider-china__details--name {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__details--name {
		font-size: 2.4rem;
		line-height: 3.6rem
	}
}

.new-rider-china__details--headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider-china__details--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__details--headline {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

.new-rider-china__details--price {
	text-transform: none;
	letter-spacing: 0.1rem;
	margin-top: 1.4rem
}

@media screen and (min-width: 320px) {
	.new-rider-china__details--price {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__details--price {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.new-rider-china__details--title {
	border-top: 8px solid #000
}

@media screen and (min-width: 320px) {
	.new-rider-china__details--title {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__details--title {
		font-size: 2.4rem;
		line-height: 5.2rem
	}
}

.new-rider-china__image {
	width: 100%;
	margin-top: 2rem
}

.new-rider-china .button {
	position: relative;
	padding-right: 44px;
	min-width: 2.7rem;
	width: auto;
	text-align: left;
	margin-top: 2rem
}

.new-rider-china .button:hover {
	background-color: #ffffff;
	border-color: #000000;
	color: #000000
}

.new-rider-china .button:after {
	content: '';
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	right: 1.8rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/cta-arrow-right.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.new-rider-china .button {
		margin-top: 5rem
	}
}

.new-rider-china__accordion {
	background: #fff;
	padding: 5rem 0 11rem 0
}

.new-rider-china__accordion-heading {
	display: block;
	margin: 0 auto 4rem auto;
	color: #000;
	text-align: center
}

@media screen and (min-width: 320px) {
	.new-rider-china__accordion-heading {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__accordion-heading {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

.new-rider-china__accordion-container {
	border-bottom: 0.2rem solid #000000;
	overflow: hidden;
	max-width: 67.5rem;
	margin: 3.2rem auto 0 auto;
	background-color: #fff
}

.new-rider-china__accordion-item {
	border-top: 0.2rem solid #000000;
	padding-left: 1.5rem;
	clear: both;
	margin-bottom: 1rem;
	overflow: hidden
}

@media screen and (min-width: 768px) {
	.new-rider-china__accordion-item {
		padding-left: 0;
		margin-bottom: 1rem
	}
}

.new-rider-china__accordion-item-name {
	color: #000000;
	font-size: 2.6rem
}

.new-rider-china__accordion-item-open {
	margin-bottom: 0
}

.new-rider-china__accordion-item-info {
	float: left;
	width: 60%;
	margin-left: 2rem;
	margin-top: 2.2rem
}

.new-rider-china__accordion-item-expand {
	float: right;
	height: 2.2rem;
	width: 2.2rem;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	margin-top: 3rem;
	margin-right: 3rem;
	cursor: pointer
}

@media screen and (min-width: 768px) {
	.new-rider-china__accordion-item-expand {
		margin-right: 0
	}
}

.new-rider-china__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.new-rider-china__accordion-item-content {
	display: none;
	background-color: #000000;
	color: #ffffff;
	clear: both;
	margin-left: -1.5rem;
	padding: 3rem 5rem
}

.new-rider-china__accordion-item-headline {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin-top: 2.5rem
}

@media screen and (min-width: 320px) {
	.new-rider-china__accordion-item-headline {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__accordion-item-headline {
		font-size: 1.8rem;
		line-height: 2rem
	}
}

.new-rider-china__accordion-item-copy {
	font-size: 1.2rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
	margin-top: 1rem;
	margin-bottom: 0
}

.new-rider-china__accordion-item-link {
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: "NotoSans-Regular",sans
}

.new-rider-china__accordion-item-link--underline {
	text-decoration: underline
}

.new-rider-china__icon-stars {
	height: 3rem;
	text-align: center
}

.new-rider-china__icon-stars-star {
	display: inline-block;
	width: 2rem;
	height: 1rem;
	background-image: url(../../images/star.png);
	background-repeat: no-repeat;
	background-size: contain
}

.new-rider-china__content {
	min-height: 50rem;
	position: relative
}

.new-rider-china__content .new-rider-china__details-container,.new-rider-china__content .new-rider-china__details--details {
	margin: 1em 3rem
}

.new-rider-china .learn-ride-carousel {
	background-size: contain;
	padding: 4.2rem 0;
	text-align: center;
	position: relative;
	background-color: #fff
}

.new-rider-china .learn-ride-carousel__arrow {
	display: block;
	width: 2.5rem;
	height: 4.7rem;
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	z-index: 1;
	cursor: pointer
}

.new-rider-china .learn-ride-carousel__arrow--next {
	background: url(../../images/slide-arrow-right-white.png) no-repeat;
	background-size: 100%;
	right: 3.1rem
}

.new-rider-china .learn-ride-carousel__arrow--prev {
	background: url(../../images/slide-arrow-left-white.png) no-repeat;
	background-size: 100%;
	left: 3.1rem
}

.new-rider-china .learn-ride-carousel__title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	width: 80%;
	margin: 0 auto;
	float: none;
	color: #000
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__title {
		font-size: 4.5rem;
		line-height: 4.8rem
	}
}

.new-rider-china .learn-ride-carousel__description {
	font-family: "NotoSans-Regular",sans;
	margin: 0 auto 4rem auto;
	float: none;
	color: #000;
	max-width: 67rem
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__description {
		font-size: 1.4rem;
		line-height: 1.6
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__description {
		font-size: 1.133rem;
		line-height: 1.5
	}
}

.new-rider-china .learn-ride-carousel__item {
	position: relative;
	margin: 0 0.4rem 0 1.4rem
}

.new-rider-china .learn-ride-carousel__item:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.4)
}

.new-rider-china .learn-ride-carousel__item--zoom {
	display: none
}

.new-rider-china .learn-ride-carousel__item--image {
	width: 100%;
	position: relative
}

.new-rider-china .learn-ride-carousel__item.slick-current:after {
	width: 0;
	height: 0
}

.new-rider-china .learn-ride-carousel__overlay {
	opacity: 0;
	visibility: hidden;
	background-color: #000000;
	height: 100%;
	width: 100%;
	text-align: left;
	max-width: 144rem;
	position: fixed;
	top: 0;
	z-index: 999;
	-webkit-transition: opacity ease-out 0.25s;
	-moz-transition: opacity ease-out 0.25s;
	-ms-transition: opacity ease-out 0.25s;
	-o-transition: opacity ease-out 0.25s;
	transition: opacity ease-out 0.25s
}

.new-rider-china .learn-ride-carousel__overlay-header {
	background-color: #000000;
	color: #ffffff;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 5.5rem
}

.new-rider-china .learn-ride-carousel__overlay-share-btn {
	font-family: "NotoSans-Bold",sans;
	padding: 1.1rem 1.5rem;
	background-color: #202020;
	float: left
}

.new-rider-china .learn-ride-carousel__overlay-share-btn-icon {
	max-width: 2rem;
	margin-bottom: 0.9rem
}

.new-rider-china .learn-ride-carousel__overlay-share-btn-icon--white {
	display: block
}

.new-rider-china .learn-ride-carousel__overlay-share-btn-icon--black {
	display: none
}

.new-rider-china .learn-ride-carousel__overlay-share-btn-copy {
	text-transform: uppercase;
	margin: 0
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-share-btn-copy {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__overlay-share-btn-copy {
		font-size: 1.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-title {
	float: left;
	text-transform: uppercase;
	padding-top: 2.5rem;
	margin-left: 2rem
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__overlay-title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-close {
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 3.25rem;
	position: absolute;
	right: 2rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-close {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__overlay-close {
		font-size: 1.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-close:after {
	content: '';
	width: 2rem;
	height: 2rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/close-icon.png") no-repeat;
	background-size: 100%
}

.new-rider-china .learn-ride-carousel__overlay-image-wrapper {
	overflow: auto
}

.new-rider-china .learn-ride-carousel__overlay--image {
	width: 100%;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.new-rider-china .learn-ride-carousel__overlay-body {
	padding: 10rem 5rem 0 5rem
}

.new-rider-china .learn-ride-carousel__overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-heading {
		font-size: 2.4rem;
		line-height: 2.8rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-share-ctas {
	margin: 2.8rem 0
}

.new-rider-china .learn-ride-carousel__overlay-share-cta {
	margin-right: 3.2rem
}

.new-rider-china .learn-ride-carousel__overlay-share-cta--facebook {
	width: 1.4rem
}

.new-rider-china .learn-ride-carousel__overlay-share-cta--twitter {
	width: 3.7rem
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-copy {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-copy--small {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china .learn-ride-carousel__overlay-copy--small {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.new-rider-china .learn-ride-carousel__overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-textbox-value {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.new-rider-china .learn-ride-carousel__overlay-footer {
	background-color: #000000;
	color: #ffffff;
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 1rem 0
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__overlay-footer-pageNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.new-rider-china .learn-ride-carousel__overlay--active {
	opacity: 1;
	visibility: visible
}

.new-rider-china .learn-ride-carousel__overlay--share {
	background: url("../../images/bike-detail/product-carousel/paint-bg.jpg") no-repeat;
	background-size: cover
}

.new-rider-china .learn-ride-carousel__slideNum {
	font-family: "NotoSans-Regular",sans;
	text-align: center;
	margin: 1rem 0;
	color: #000
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__slideNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.new-rider-china .learn-ride-carousel__slideNum--number {
	font-family: "NotoSans-Bold",sans
}

.new-rider-china .learn-ride-carousel__paint-selector {
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
	width: 80%;
	margin: 0 auto
}

.new-rider-china .learn-ride-carousel__paint-selector--title {
	display: block;
	margin: 1rem 0
}

@media screen and (min-width: 320px) {
	.new-rider-china .learn-ride-carousel__paint-selector--title {
		font-size: 1.6rem;
		line-height: 2rem
	}
}

.new-rider-china .learn-ride-carousel__paint-selector--option {
	width: 4.5rem;
	margin-right: 1.5rem;
	cursor: pointer
}

.new-rider-china .learn-ride-carousel__paint-selector--option:last-child {
	margin-right: 0
}

.new-rider-china .learn-ride-carousel__paint-selector--option-hidden {
	display: none
}

.new-rider-china .learn-ride-carousel__paint-selector--overflow {
	border: 2px solid #000;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	vertical-align: middle;
	font-family: "NotoSans-Bold",sans;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	-ms-border-radius: 100px;
	-o-border-radius: 100px;
	border-radius: 100px;
	cursor: pointer
}

@media screen and (min-width: 768px) {
	.new-rider-china__details {
		position: absolute;
		left: 66%;
		width: 36rem;
		transform: translateY(0%)
	}

	.new-rider-china__image {
		width: 100%
	}

	.new-rider-china__billboard img {
		width: 75%
	}

	.new-rider-china .course__button-101 {
		margin: 2rem 3rem
	}

	.new-rider-china__content {
		min-height: 100rem;
		background-color: #fff
	}

	.new-rider-china__content .new-rider-china__details-container {
		color: #000;
		position: absolute;
		max-width: 36rem;
		top: 12%;
		left: 12%
	}

	.new-rider-china__content .new-rider-china__details--details {
		position: absolute;
		color: #000;
		max-width: 45rem;
		left: 53%;
		top: 69%
	}

	.new-rider-china__content-image-right {
		position: absolute;
		width: 45%;
		left: 44%;
		top: 16%;
		z-index: 10
	}
}

@media screen and (min-width: 768px) and (max-width: 992px) {
	.new-rider-china__content-image-right {
		width: 45%;
		left: 49%;
		top: 18%
	}
}

@media screen and (min-width: 768px) {
	.new-rider-china__content-image-left {
		position: absolute;
		width: 35%;
		top: 51%;
		left: 13%;
		z-index: 5
	}
}

@media screen and (min-width: 992px) {
	.new-rider-china__details {
		transform: translateY(37%)
	}

	.new-rider-china .play-button {
		top: 56%
	}
}

@media screen and (max-width: 992px) and (min-width: 768px) {
	.new-rider-china__details {
		transform: translateY(16%);
		left: 53%
	}

	.new-rider-china .play-button {
		top: 55%
	}
}

.new-rider {
	color: #fff;
	position: relative;
	overflow: hidden;
	padding: 15px 0 0 0
}

.new-rider .learn-ride-marquee__header {
	position: relative
}

.new-rider .learn-ride-marquee__details {
	padding: 4rem 0 0 3rem;
	width: 95%;
	position: relative
}

.new-rider .learn-ride-marquee__details--headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider .learn-ride-marquee__details--headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider .learn-ride-marquee__details--headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

@media screen and (min-width: 320px) {
	.new-rider .learn-ride-marquee__details--title {
		font-size: 2rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider .learn-ride-marquee__details--title {
		font-size: 2.4rem;
		line-height: 5.2rem
	}
}

.new-rider .learn-ride-marquee__image {
	width: 97%;
	margin-top: 2rem
}

.new-rider .learn-ride-marquee .button {
	position: relative;
	padding-right: 44px;
	min-width: 340px;
	width: auto;
	text-align: left;
	margin-top: 2rem
}

.new-rider .learn-ride-marquee .button:hover {
	background-color: #ffffff;
	border-color: #000000;
	color: #000000
}

.new-rider .learn-ride-marquee .button:after {
	content: '';
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	right: 1.8rem;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/cta-arrow-right.png");
	background-size: 100%
}

@media screen and (min-width: 768px) {
	.new-rider .learn-ride-marquee__details {
		position: absolute;
		left: 73%;
		width: 25%;
		transform: translateY(0%)
	}

	.new-rider .learn-ride-marquee__image {
		width: 80%
	}
}

@media screen and (min-width: 992px) {
	.new-rider .learn-ride-marquee__details {
		transform: translateY(50%)
	}
}

.new-rider .learn-ride__largevideo {
	margin: 2rem auto;
	overflow: hidden
}

.new-rider .learn-ride__largevideo-headline {
	letter-spacing: 0.1rem;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.new-rider .learn-ride__largevideo-headline {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.new-rider .learn-ride__largevideo-headline {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.new-rider .learn-ride__largevideo-copy {
	font-size: 1.6rem;
	line-height: 2.4rem
}

.new-rider .learn-ride__largevideo-right {
	position: relative
}

.new-rider .learn-ride__largevideo-left {
	position: relative
}

@media screen and (min-width: 768px) {
	.new-rider .learn-ride__largevideo-right {
		position: relative;
		margin-right: -20%;
		z-index: 20;
		float: right;
		top: 0;
		margin: 2rem -19% 2rem 0
	}

	.new-rider .learn-ride__largevideo-left {
		position: absolute;
		z-index: 40;
		transform: translateY(20%)
	}
}

@media screen and (min-width: 768px) {
	.new-rider .new-rider .learn-ride__largevideo__image {
		width: 80%
	}

	.new-rider .learn-ride__promos [data-component] {
		display: flex;
		flex-wrap: nowrap;
		align-content: space-between
	}

	.new-rider .learn-ride__promos-card {
		background-color: #f6f6f6;
		margin-left: 15px;
		margin-right: 15px;
		padding: 0
	}
}

.new-rider .learn-ride__promos {
	color: #000000
}

.new-rider .learn-ride__promos-body {
	background: url("../../images/new-rider/promo-background-3.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 6rem 4rem;
	text-align: center
}

.error-page {
	padding: 30px 0;
	color: white;
	background-size: cover;
	background-position: -275px center;
	vertical-align: middle
}

.error-page__logo {
	display: none
}

.error-page__wrapper {
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	font-size: 0;
	white-space: normal;
	display: table;
	margin: 0 auto
}

.error-page__wrapper:before {
	content: "";
	display: inline-block;
	height: 100%;
	vertical-align: middle
}

.error-page__container {
	display: table-cell;
	vertical-align: middle;
	padding: 0 2rem
}

@media only screen and (min-width: 768px) {
	.error-page__container {
		padding: 0px
	}
}

.error-page__title {
	max-width: 311px;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.error-page__title {
		font-size: 2.6rem;
		line-height: 1.2
	}
}

@media screen and (min-width: 768px) {
	.error-page__title {
		font-size: 3rem;
		line-height: 3.5rem
	}
}

.error-page__description {
	max-width: 311px
}

.error-page__description ul {
	margin-top: 2.5rem;
	padding-left: 0px
}

.error-page__description ul li {
	padding-bottom: 2rem
}

@media only screen and (min-width: 768px) {
	.error-page__description ul li {
		padding-bottom: 0px
	}
}

.error-page__description p {
	margin: 0
}

@media screen and (min-width: 320px) {
	.error-page__description p {
		font-size: 1.4rem;
		line-height: 1.6
	}
}

@media screen and (min-width: 768px) {
	.error-page__description p {
		font-size: 1.133rem;
		line-height: 1.5
	}
}

.error-page__description span {
	margin-top: 10px;
	margin-bottom: 10px
}

@media screen and (min-width: 320px) {
	.error-page__description span {
		font-size: 1.4rem;
		line-height: 1.6
	}
}

@media screen and (min-width: 768px) {
	.error-page__description span {
		font-size: 1.133rem;
		line-height: 1.5
	}
}

.error-page__description a {
	color: #f60;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-decoration: underline;
	text-transform: uppercase;
	margin-top: 5.5px;
	display: block
}

@media screen and (min-width: 320px) {
	.error-page__description a {
		font-size: 1.4rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.error-page__description a {
		font-size: 1.5rem;
		line-height: 1.875
	}
}

.error-page__description a:hover {
	color: #f60;
	text-decoration: none
}

.error-page__description--first {
	display: block
}

.error-page__description--first a {
	display: inline;
	font-size: inherit;
	text-transform: initial;
	text-decoration: none;
	margin: 0
}

.error-page .icon--star {
	margin-top: 11px;
	margin-bottom: 32px
}

.error-page--500 {
	padding: 0px
}

.error-page--500 .error-page__wrapper {
	min-height: 600px
}

.error-page--500__description {
	max-width: 363px
}

@media only screen and (min-width: 768px) {
	.error-page {
		color: white;
		background-size: cover;
		background-position: center;
		margin: 0 20px 31px 20px
	}

	.error-page--500 .error-page__container {
		padding-top: 6rem
	}
}

@media only screen and (min-width: 768px) and (min-width: 320px) {
	.error-page--500__description p,.error-page--500__description span {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

@media only screen and (min-width: 768px) and (min-width: 768px) {
	.error-page--500__description p,.error-page--500__description span {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

@media only screen and (min-width: 768px) {
	.error-page__wrapper {
		height: 677px
	}

	.error-page__wrapper:before {
		margin-top: 30px
	}

	.error-page__logo {
		display: inline-block;
		position: absolute;
		top: 55px;
		left: 50%;
		width: 208.5px;
		height: 163.5px;
		text-indent: -1000px;
		background: url(../../svg/h-d-logo.svg) no-repeat;
		background-size: 80%;
		transform: translateX(-50%);
		background-position: 20px 0px
	}

	.error-page__title {
		display: block;
		max-width: 600px
	}

	.error-page__description {
		margin: 0 auto;
		max-width: 430px
	}

	.error-page__description li {
		display: block;
		margin-top: 5.5px;
		color: #f60;
		font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
	}

	.error-page__description li:hover {
		color: #f60;
		text-decoration: none
	}
}

.cookie {
	background-image: url("../../images/cookies-page/Cookie_Page-bd-mobile.jpg");
	background-color: #fff;
	background-repeat: no-repeat;
	background-size: 100%;
	padding-top: 3rem;
	padding-bottom: 3rem
}

@media screen and (min-width: 768px) {
	.cookie {
		background-image: url("../../images/cookies-page/Cookie_Page-bd-desktop.jpg")
	}
}

.cookie__container {
	max-width: 760px;
	margin: 0 auto
}

.cookie__container h1,.cookie__container h2,.cookie__container h3,.cookie__container h4,.cookie__container h5,.cookie__container h6,.cookie__container .h1,.cookie__container .h2,.cookie__container .h3,.cookie__container .h4,.cookie__container .h5,.cookie__container .h6 {
	display: block
}

.cookie__container p span.cta-btn-primary:after,.cookie__container li span.cta-btn-primary:after {
	content: "\e94d";
	position: absolute;
	right: 22px;
	font-family: "cta-icon" !important;
	font-size: 1.1rem;
	margin-left: 15px
}

.cookie__container p span.cta-btn-third:after,.cookie__container li span.cta-btn-third:after {
	content: "\e94d";
	position: absolute;
	right: 22px;
	font-family: "cta-icon" !important;
	font-size: 1.1rem;
	margin-left: 15px
}

.cookie__container p span.cta-btn-third.link-out:after,.cookie__container li span.cta-btn-third.link-out:after {
	content: '\e913'
}

.cookie__container p a span.cta-link-third:after,.cookie__container li a span.cta-link-third:after {
	content: "\e94d";
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.cookie__container p a span.cta-link-third.link-out:after,.cookie__container li a span.cta-link-third.link-out:after {
	content: '\e913'
}

.cookie__container p a {
	color: #000;
	text-decoration: underline;
	font-weight: bold;
	word-break: break-word
}

.cookie__container ul {
	padding-left: 20px
}

.cookie__container ul li {
	word-break: break-word
}

.cookie__container ul li a {
	color: #000;
	text-decoration: underline;
	font-weight: bold
}

.cookie__container table tbody tr td {
	word-break: break-word
}

.cookie__container table tbody tr td a {
	color: #000;
	text-decoration: underline;
	font-weight: bold
}

.cookie__container table tbody tr td ul li a {
	word-break: break-word
}

.cookie__container table tbody tr td img {
	margin-top: 50px;
	margin-bottom: 50px;
	max-width: 325px
}

.cookie__container table tbody tr td ul {
	padding-left: 20px
}

.cookie__container table tbody tr td a {
	color: #000;
	text-decoration: underline;
	font-weight: bold
}

@media screen and (min-width: 768px) {
	.cookie__container table {
		margin-left: -20%;
		width: 120%
	}

	.cookie__container table td {
		padding-right: 20px
	}

	.cookie__container table.text-table {
		margin-left: auto;
		width: 100%
	}
}

.cookie__container .cookie-accordion-item {
	position: relative
}

.cookie__container .cookie-accordion-item-clickable-area {
	position: relative
}

.cookie__container .cookie-accordion-item-expand {
	position: absolute;
	top: 50%;
	right: 0;
	margin-top: -11px;
	height: 22px;
	width: 22px;
	cursor: pointer;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	float: right
}

@media (max-width: 767px) {
	.cookie__container .cookie-accordion-item-expand {
		margin-right: 2rem
	}
}

.cookie__container .cookie-accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.cookie__container .cookie-accordion-item-content {
	display: none
}

.ltr__group {
	background: #fff url("../../images/learn-to-ride/ltr-bg.jpg") no-repeat top center;
	background-size: 100%
}

.ltr__group--college-party {
	background: #ffffff
}

@media screen and (min-width: 768px) {
	.ltr__group--college-party {
		background: #fff url("../../images/learn-to-ride/college-party-bg.jpg") no-repeat top center;
		background-size: 100%
	}
}

.component__description--expandable {
	overflow: hidden
}

.component__description--expanded {
	max-height: none !important
}

.component__description--expanded .component__description--hidden {
	display: inline
}

.component__description--hidden {
	display: none
}

.component__description--shrink {
	max-height: 13.2rem
}

@media screen and (min-width: 768px) {
	.component__description--shrink {
		max-height: 15.3rem
	}
}

@media screen and (min-width: 992px) {
	.component__description--shrink {
		max-height: 15.4rem
	}
}

.component__play-btn {
	border: 0.2rem solid #ffffff;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 6.8rem;
	height: 6.8rem;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	background: transparent;
	text-indent: -9999px
}

.component__play-btn:after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	width: 1.6rem;
	height: 2rem;
	background: url("../../images/play-arrow.png") no-repeat;
	background-size: 100%
}

.component__cta-container--new-search {
	padding: 0 1.5rem;
	margin-bottom: 3rem
}

.b4 .component__cta-container {
	margin-top: 2.6rem
}

.b2 .component__cta-container,.b3 .component__cta-container {
	margin-top: 4.3rem
}

.component__cta-container .cta--ltr {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	min-width: 21.4rem;
	max-width: 100%;
	padding: 1.1rem 5.6rem 1.1rem 1.5rem;
	font-size: 1.5rem;
	line-height: 1.5
}

.component__cta-container .cta--ltr .cta-icon {
	right: 6px
}

.ltr-c02 {
	overflow: hidden;
	padding-left: 2.5rem;
	position: relative;
	overflow-x: auto;
	white-space: nowrap;
	background-color: transparent;
	z-index: 8;
	padding-bottom: 2rem
}

@media screen and (min-width: 768px) {
	.ltr-c02 {
		text-align: center
	}
}

.ltr-c02--sticky {
	position: fixed;
	top: 0;
	z-index: 899;
	width: 100%;
	max-width: 1440px;
	background-color: #fff
}

.ltr-c02--pull-down {
	padding-top: 70px;
	-webkit-transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03);
	-moz-transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03);
	-ms-transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03);
	-o-transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03);
	transition: padding-top 300ms cubic-bezier(0.42, 0, 0.42, 1.03)
}

@media screen and (min-width: 768px) {
	.ltr-c02--pull-down {
		padding-top: 113px
	}
}

.ltr-c02__option {
	display: inline-block;
	margin-right: 2rem;
	position: relative
}

.ltr-c02__link {
	font-family: "NotoSans-Regular",sans;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	padding: 3rem 0 1.2rem 0;
	border-bottom: 3px solid transparent
}

@media screen and (min-width: 320px) {
	.ltr-c02__link {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c02__link {
		font-size: 1.4rem;
		line-height: 1.6rem
	}
}

.ltr-c02__link--active {
	font-family: "NotoSans-Bold",sans;
	border-bottom: 3px solid #f60
}

@media screen and (min-width: 768px) {
	.ltr-c02__link:hover {
		font-family: "NotoSans-Bold",sans;
		border-bottom: 3px solid #f60
	}
}

.ltr-c04 {
	padding: 4rem 0 5rem 0;
	background-color: #ffffff
}

@media screen and (min-width: 768px) {
	.ltr-c04 {
		padding: 8rem 0 7.5rem 0
	}
}

.ltr-c04__accordion-container {
	padding: 2.5rem 0
}

.ltr-c04__headline {
	display: block;
	text-align: center;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.ltr-c04__headline {
		font-size: 3rem;
		line-height: 3.3rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c04__headline {
		font-size: 4.55rem;
		line-height: 5.2rem
	}
}

.ltr-c04__Intro {
	max-width: 68rem;
	margin: auto;
	padding: 35px 35px 0;
	text-align: center
}

.ltr-c04__accordion {
	width: 100%;
	max-width: 68rem;
	margin: 2rem auto 0 auto
}

.ltr-c04__accordion-subheader {
	text-transform: uppercase;
	max-width: 68rem;
	margin: 4rem auto 0;
	display: block
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-subheader {
		font-size: 2.6rem;
		line-height: 2.25rem
	}
}

@media (min-width: 320px) and (max-width: 767px) {
	.ltr-c04__accordion-subheader {
		padding-left: 2.3rem
	}
}

.ltr-c04__accordion-item {
	border-top: 0.2rem solid #000000
}

.ltr-c04__accordion-item:last-child {
	border-bottom: 0.2rem solid #000000
}

.ltr-c04__accordion-item-title {
	text-transform: uppercase;
	padding: 2rem 2.3rem;
	max-width: 80%;
	display: inline-block;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	padding-left: 0;
	padding-right: 0
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-title {
		font-size: 2.6rem;
		line-height: 1
	}
}

@media (min-width: 320px) and (max-width: 767px) {
	.ltr-c04__accordion-item-title {
		padding: 2rem 2.3rem
	}
}

.ltr-c04__accordion-item-title.title-light {
	text-transform: none;
	font-family: "NotoSans-Bold",sans;
	max-width: 100%;
	margin-right: 25px
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-title.title-light {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c04__accordion-item-title.title-light {
		font-size: 1.4rem;
		line-height: 1.6rem
	}
}

.ltr-c04__accordion-item.light {
	border-top: 0.15rem solid #ededed;
	position: relative
}

.ltr-c04__accordion-item.light:last-child {
	border-bottom: 0.15rem solid #ededed
}

.ltr-c04__accordion-item.light .ltr-c04__accordion-item-clickable-area {
	position: relative
}

.ltr-c04__accordion-item.light .ltr-c04__accordion-item-clickable-area .expand-light {
	position: absolute;
	top: 50%;
	right: 0;
	margin-top: -11px;
	margin-right: 2rem
}

@media (min-width: 767px) {
	.ltr-c04__accordion-item.light .ltr-c04__accordion-item-clickable-area .expand-light {
		margin-right: 0
	}
}

.ltr-c04__accordion-item-clickable-area {
	cursor: pointer
}

.ltr-c04__accordion-item-clickable-area:focus {
	outline: none
}

.ltr-c04__accordion-item-expand {
	height: 22px;
	width: 22px;
	cursor: pointer;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	float: right;
	margin-top: 1.8rem;
	margin-right: 0
}

@media (max-width: 767px) {
	.ltr-c04__accordion-item-expand {
		margin-right: 2rem
	}
}

.ltr-c04__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.ltr-c04__accordion-item-focus {
	outline-width: 0 !important
}

.ltr-c04__accordion-item-content {
	background-color: #000000;
	color: #ffffff;
	padding: 3rem;
	display: none;
	text-transform: none
}

.ltr-c04__accordion-item-content p {
	margin-top: 0
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-content p {
		font-size: 1.2rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c04__accordion-item-content p {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.ltr-c04__accordion-item-content p a {
	position: relative;
	text-decoration: underline;
	color: #fff;
	font-family: "NotoSans-Bold",sans;
	text-transform: none
}

.ltr-c04__accordion-item-content.content-light {
	background-color: #ededed;
	color: #000
}

.ltr-c04__accordion-item-content.content-light p a {
	color: #000
}

.ltr-c04__accordion-item-headline {
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-headline {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c04__accordion-item-answer {
	margin-top: 2rem;
	font-family: "NotoSans-Regular",sans;
	letter-spacing: 0.05rem;
	display: block
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-answer {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c04__accordion-item-answer--bold {
	font-family: "NotoSans-Bold",sans
}

.ltr-c04--dealer {
	padding: 4rem 0
}

@media screen and (min-width: 768px) {
	.ltr-c04--dealer {
		padding: 4rem 0
	}
}

.ltr-c04--dealer .ltr-c04__accordion {
	margin: 0
}

.ltr-c04--dealer .ltr-c04__accordion-item-content {
	background-color: #ededed;
	color: #000
}

.ltr-c04--dealer .ltr-c04__accordion-item-content table {
	width: 100%
}

.ltr-c04--dealer .ltr-c04__accordion-item-answer {
	margin: 0.9rem 0 2.2rem 0
}

@media screen and (min-width: 320px) {
	.ltr-c04--dealer .ltr-c04__accordion-item-answer {
		font-size: 1.2rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c04--dealer .ltr-c04__accordion-item-answer {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

.ltr-c04--dealer .ltr-c04__accordion-item-answer:last-child {
	margin-bottom: 0
}

.ltr-c04--dealer .ltr-c04__accordion-item-answer--bold {
	margin-bottom: 1rem
}

.ltr-c04--dealer .ltr-c04__accordion-item-answer--disclaimer {
	margin-bottom: 1rem
}

.ltr-c04--dealer .ltr-c04__accordion-item-list {
	list-style-type: disc;
	margin-bottom: 3rem
}

.ltr-c04--dealer .ltr-c04__accordion-item-list:last-child {
	margin-bottom: 0
}

.ltr-c04--dealer .ltr-c04__accordion-item-list-item {
	display: list-item;
	margin-bottom: 0.5rem
}

.ltr-c04--dealer .ltr-c04__accordion-item-list--sublist {
	margin-bottom: 0.5rem;
	list-style-type: circle
}

.ltr-c04--directions {
	padding: 4rem 0;
	display: none
}

@media screen and (min-width: 768px) {
	.ltr-c04--directions {
		padding: 4rem 0
	}
}

.ltr-c04--directions .ltr-c04__accordion {
	margin: 0
}

.ltr-c04--directions .ltr-c04__accordion-item-content {
	overflow-x: auto;
	background-color: #fff;
	color: #000;
	outline: none
}

.ltr-c04--transparent {
	background-color: transparent
}

.ltr-c05 {
	width: 100%;
	margin: 0 auto;
	position: relative
}

@media screen and (min-width: 768px) {
	.ltr-c05 {
		width: 96%
	}

	.ltr-c05__overlay {
		padding-top: 12rem
	}
}

.ltr-c05 .hero-marquee {
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 0;
	z-index: 9
}

.ltr-c05 .hero-marquee .container-fluid {
	padding-left: 0;
	padding-right: 0
}

.ltr-c05 .hero-marquee__caption {
	text-transform: uppercase;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.ltr-c05 .hero-marquee__caption {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c05 .hero-marquee__cta {
		bottom: -10px
	}
}

.ltr-c06 {
	background-color: #ffffff;
	text-align: center;
	padding: 1rem 0 3.5rem 1.5rem;
	overflow: hidden
}

.ltr-c06__headline {
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.ltr-c06__headline {
		font-size: 3rem;
		line-height: 3.3rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c06__headline {
		font-size: 4.55rem;
		line-height: 5.2rem
	}
}

.ltr-c06__subheader {
	width: 75%;
	margin: 1.4rem auto 2.5rem auto;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c06__subheader {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c06__arrow {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	z-index: 1;
	cursor: pointer;
	display: none;
	height: 0;
	width: 0
}

@media screen and (min-width: 768px) {
	.ltr-c06__arrow {
		display: block;
		width: 2.5rem;
		height: 4.7rem
	}
}

.ltr-c06__arrow--next {
	background: url("../../images/slide-arrow-right-white.png") no-repeat;
	background-size: 100%;
	right: 9.1rem
}

.ltr-c06__arrow--prev {
	background: url("../../images/slide-arrow-left-white.png") no-repeat;
	background-size: 100%;
	left: 9.1rem
}

.ltr-c06__carousel {
	margin-bottom: 4rem
}

.ltr-c06__carousel .slick-list {
	padding-right: 2rem
}

.ltr-c06__carousel-container {
	position: relative
}

@media screen and (min-width: 768px) {
	.ltr-c06__carousel-container {
		margin: 0 -6rem
	}
}

.ltr-c06__carousel-item {
	width: 85%;
	height: auto;
	margin-right: 1.25rem;
	position: relative
}

.ltr-c06__carousel-item:focus {
	outline: none
}

.ltr-c06__carousel-item:after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.4)
}

.ltr-c06__carousel-item .ltr-c06__carousel-item--zoom {
	display: none;
	outline: none
}

.ltr-c06__carousel-item .ltr-c06__carousel-item-image {
	width: 100%
}

.ltr-c06__carousel-item .ltr-c06__carousel-item-wrapper {
	position: relative
}

.ltr-c06__carousel-item .ltr-c06-carousel__item--disclaimer {
	background-color: #fff;
	text-align: right;
	color: #7f7f7f;
	padding: 5px 0;
	position: relative
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-item .ltr-c06-carousel__item--disclaimer {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c06__carousel-item .ltr-c06-carousel__item--capation {
	position: absolute;
	bottom: 0;
	color: #ffffff;
	width: 100%;
	pointer-events: all
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-item .ltr-c06-carousel__item--capation {
		max-height: 100%;
		overflow: hidden
	}

	.ltr-c06__carousel-item .ltr-c06-carousel__item--capation .ltr-c06-carousel__item--capation-desc-content .icon--close {
		font-size: 10px
	}
}

.ltr-c06__carousel-item .ltr-c06-carousel__item--capation-desc-icon {
	float: right;
	margin-right: 15px;
	pointer-events: all;
	width: 35px;
	height: 35px;
	background-color: #202020;
	margin: 0;
	overflow: hidden
}

.ltr-c06__carousel-item .ltr-c06-carousel__item--capation-desc-content {
	background-color: rgba(0,0,0,0.4);
	pointer-events: all;
	padding: 40px 80px 40px 35px;
	text-align: left;
	margin-bottom: 0;
	position: relative;
	z-index: 10
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-item .ltr-c06-carousel__item--capation-desc-content {
		font-size: 1.6rem;
		line-height: 2.5rem
	}
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-item .ltr-c06-carousel__item--capation-desc-content {
		max-height: 250px;
		overflow: hidden
	}
}

.ltr-c06__carousel-item .ltr-c06-carousel__item--capation-desc-content .icon--close {
	position: absolute;
	top: 15px;
	right: 25px
}

.ltr-c06__carousel-item.slick-current:after {
	height: 0;
	width: 0
}

.ltr-c06__carousel-item.slick-current .ltr-c06__carousel-item--zoom {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	width: 6rem;
	height: 5.6rem;
	background: rgba(0,0,0,0.7);
	z-index: 9;
	cursor: pointer
}

.ltr-c06__carousel-item.slick-current .ltr-c06__carousel-item--zoom .cta-icon {
	right: 0;
	width: 100%;
	font-size: 3.4rem;
	background: transparent
}

.ltr-c06__carousel-item--disclaimer {
	background-color: #fff;
	text-align: right;
	color: #7f7f7f;
	padding: 5px 0
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-item--disclaimer {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c06__carousel-item--capation {
	position: absolute;
	bottom: 25px;
	color: #ffffff;
	width: 100%;
	pointer-events: all
}

.ltr-c06__carousel-item--capation-desc-icon {
	float: right;
	margin-right: 15px;
	pointer-events: all;
	width: 35px;
	height: 35px;
	background-color: #202020;
	margin: 0;
	overflow: hidden
}

.ltr-c06__carousel-slide-numbers {
	text-align: center;
	display: none;
	margin-top: 2rem;
	margin-bottom: 0;
	width: 100px;
	margin: auto;
	padding-top: 10px;
	border-top: 2px solid #000
}

@media screen and (min-width: 320px) {
	.ltr-c06__carousel-slide-numbers {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c06__carousel-slide-numbers {
		font-size: 1.4rem;
		line-height: 1.6rem
	}
}

.ltr-c06__carousel-slide-number {
	font-family: "NotoSans-Bold",sans
}

.ltr-c06--transparent {
	background-color: transparent
}

.rtl .b1__details,.rtl .b2__details,.rtl .b3__details,.rtl .b7__details,.rtl .b4__header,.rtl .b4__details {
	direction: rtl
}

.rtl .ltr-c08__header,.rtl .ltr-c08__subhead,.rtl .ltr-c08__headercopy {
	text-align: right
}

.rtl .ltr-c08 #middleInitial {
	float: right
}

.rtl .ltr-c01__title,.rtl .ltr-c01__headline,.rtl .ltr-c01__description {
	text-align: right;
	float: right
}

.rtl .component__read-more,.rtl .component__cta-container {
	float: right;
	clear: both
}

.rtl .b5__video-cta {
	float: right;
	clear: both;
	direction: rtl
}

.rtl .ltr-c03__title,.rtl .ltr-c03__headline,.rtl .ltr-c03__description {
	float: right;
	clear: both;
	direction: rtl
}

.zh-cn .component__description--shrink {
	max-height: 13.9rem
}

@media screen and (max-width: 1439px) {
	.zh-cn .component__description--shrink {
		max-height: 15.9rem
	}
}

@media screen and (max-width: 767px) {
	.zh-cn .component__description--shrink {
		max-height: 13.9rem
	}
}

.ie .ltr-c07__direction-overlay-close::after {
	top: 0;
	transform: none
}

.content-style-grey-light .ltr-c01__image:before,.content-style-grey .ltr-c01__image:before {
	background-color: #000
}

@media screen and (min-width: 768px) {
	.content-style-grey-light .ltr-c01__image:before,.content-style-grey .ltr-c01__image:before {
		background-color: inherit
	}
}

.ltr-article {
	position: relative;
	width: 100%;
	margin-top: 4rem;
	padding: 0 2.5rem
}

.ltr-article:before {
	content: "";
	position: absolute;
	height: 1rem;
	width: 100%;
	max-width: 8.8rem;
	top: 0;
	background-color: #f60
}

.ltr-article__title {
	position: relative;
	display: inline-block;
	width: 100%;
	margin-top: 0;
	margin-bottom: 0;
	padding-top: 2.3rem;
	font-size: 2rem;
	line-height: 2.8rem;
	letter-spacing: 0.1rem
}

.ltr-article__headline {
	display: inline-block;
	margin-bottom: 1.8rem;
	padding-top: 1.8rem;
	font-size: 3rem;
	line-height: 1.2;
	letter-spacing: 0.15rem
}

.ltr-article__title,.ltr-article__headline {
	text-transform: uppercase
}

.ltr-article__description {
	font-size: 1.6rem;
	line-height: 2.2rem;
	margin-bottom: 2rem;
	text-transform: none
}

.ltr-article__description--expandable+.component__read-more {
	transition: margin-top 300ms
}

.ltr-article__description--expandable+.component__read-more.collapsed {
	margin-top: 0 !important
}

.ltr-article__video-cta {
	position: relative;
	padding-right: 3rem;
	font-size: 1.5rem;
	line-height: 2rem
}

.ltr-article__video-cta:after {
	content: "";
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 1.9rem;
	height: 1.9rem;
	background: url("../../images/play-link-icon.png") no-repeat;
	background-size: 100%
}

.b2 .ltr-article,.b3 .ltr-article {
	margin-top: 3rem;
	padding: 0 2.7rem
}

.b2 .ltr-article__title,.b3 .ltr-article__title {
	padding-top: 1.8rem
}

.b2 .ltr-article__description,.b3 .ltr-article__description {
	font-size: 1.4rem
}

.ltr-article__headline--narrow {
	width: 75%
}

.b1 .ltr-article__title+.ltr-article__headline {
	padding-top: 0.2rem
}

.b2 .ltr-article__title+.ltr-article__headline,.b3 .ltr-article__title+.ltr-article__headline {
	padding-top: 0
}

@media screen and (min-width: 768px) {
	.b2 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.4rem
	}
}

@media screen and (min-width: 768px) {
	.b3 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.2rem
	}
}

.component__read-more {
	position: relative;
	margin-bottom: 3rem;
	padding-right: 3rem;
	font-size: 1.6rem;
	line-height: 2rem;
	text-transform: uppercase
}

.webkit .component__read-more:focus {
	outline: 5px auto -webkit-focus-ring-color;
	outline-offset: -2px
}

.component__read-more:after {
	content: "\e901";
	position: absolute;
	right: 1rem;
	top: 50%;
	-webkit-transform: translateY(-50%) rotate(90deg);
	-moz-transform: translateY(-50%) rotate(90deg);
	-ms-transform: translateY(-50%) rotate(90deg);
	-o-transform: translateY(-50%) rotate(90deg);
	transform: translateY(-50%) rotate(90deg);
	font-family: 'cta-icon';
	font-size: 1.2rem
}

.component__read-more.collapsed:after {
	-webkit-transform: translateY(-50%) rotate(270deg);
	-moz-transform: translateY(-50%) rotate(270deg);
	-ms-transform: translateY(-50%) rotate(270deg);
	-o-transform: translateY(-50%) rotate(270deg);
	transform: translateY(-50%) rotate(270deg)
}

.component__read-more.collapsed .component__read-more-label--less {
	display: inline
}

.component__read-more-label--less {
	display: none
}

.component__read-more.collapsed .component__read-more-label--more {
	display: none
}

.component__read-more--reversed-margin {
	margin-bottom: 0;
	margin-top: 1.25rem
}

.component__read-more--visible {
	display: inline-block
}

.b1 .component__read-more,.b4 .component__read-more,.b6 .component__read-more {
	margin-bottom: 0
}

.b2 .component__read-more,.b3 .component__read-more {
	font-size: 1.5rem;
	line-height: 1;
	margin-bottom: 0
}

.ltr-c01 {
	position: relative;
	overflow: visible;
	color: #000;
	z-index: 9
}

.ltr-c01__content {
	padding: 0;
	background: #fff
}

.ltr-c01__image {
	position: relative;
	width: calc(100% - 3rem);
	margin-bottom: -3rem;
	z-index: 1
}

.ltr-c01__image:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: calc(100% - 3rem);
	width: calc(100% + 3rem);
	background: #000;
	z-index: -1
}

.ltr-c01 .ltr-article {
	margin-top: 0;
	padding: 5.7rem 3.0rem 2.5rem 1.5rem
}

.ltr-c01 .ltr-article:before {
	display: none
}

.ltr-c01 .ltr-article__title {
	padding-top: 0
}

.ltr-c01 .ltr-article__headline {
	padding-top: 0
}

.ltr-c01 .ltr-article__title+.ltr-article__headline {
	padding-top: 0.5rem
}

.ltr-c01 .ltr-article__description {
	font-size: 1.4rem
}

.ltr-c01 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.ltr-c01 .ltr-article .ltr-article__description p,.ltr-c01 .ltr-article .ltr-article__description ul,.ltr-c01 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 1.5rem
}

.ltr-c01 .ltr-article .ltr-article__description p:last-child,.ltr-c01 .ltr-article .ltr-article__description ul:last-child,.ltr-c01 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.ltr-c01 .ltr-article .component__cta-container {
	margin-top: 2.3rem
}

.ltr-c01 .ltr-article .component__cta-container .cta--ltr {
	width: 100%;
	padding: 1rem 5.6rem 1rem 2rem;
	font-size: 1.2rem;
	line-height: 2.4rem;
	color: #fff;
	background-color: #000
}

.ltr-c01 .ltr-footer {
	margin-top: -6rem
}

.ltr-c01--alt {
	color: #fff
}

.ltr-c01--alt .ltr-c01__content {
	padding-bottom: 0;
	background: #000
}

.ltr-c01--alt .ltr-c01__image {
	margin-bottom: 0
}

.ltr-c01--alt .ltr-article {
	padding-top: 2.7rem;
	padding-bottom: 2.5rem;
	background: #000
}

.ltr-c01--alt .ltr-article .component__cta-container .cta--ltr {
	color: #000;
	background-color: #fff
}

.ltr-c01--alt .ltr-footer {
	margin-top: -3rem
}

@media screen and (min-width: 768px) {
	.ltr-c01 {
		margin: 0 auto;
		color: #fff
	}

	.ltr-c01__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		-webkit-flex-direction: row-reverse;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap
	}

	.ltr-c01 .ltr-c01__content,.ltr-c01--alt .ltr-c01__content {
		padding: 0 0 6rem;
		background: #000
	}

	.ltr-c01 .ltr-footer,.ltr-c01--alt .ltr-footer {
		margin-top: -6rem
	}

	.ltr-c01 .ltr-article {
		width: 40%;
		padding: 3rem 0 6rem 4.4rem;
		margin-bottom: -3rem;
		background: transparent;
		z-index: 1
	}

	.ltr-c01 .ltr-article__title {
		padding-top: 0;
		letter-spacing: 0.15rem
	}

	.ltr-c01 .ltr-article__headline {
		padding-top: 0;
		letter-spacing: 0.25rem
	}

	.ltr-c01 .ltr-article .component__cta-container .cta--ltr {
		width: auto;
		padding: 1.1rem 5.6rem 1.1rem 1.5rem;
		font-size: 1.5rem;
		line-height: 1.5;
		color: #000;
		background-color: #fff
	}

	.ltr-c01__image {
		flex-shrink: 0;
		width: calc(65.3% - 3rem);
		margin-left: -5.3%;
		margin-right: 3rem;
		z-index: 1
	}

	.ltr-c01--alt .ltr-c01__image {
		margin-bottom: -3rem
	}

	.ltr-c01__image:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: -moz-linear-gradient(left, rgba(0,0,0,0.4) 0%, transparent 20%);
		background: -webkit-linear-gradient(left, rgba(0,0,0,0.4) 0%, transparent 20%);
		background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 20%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66000000', endColorstr='#00000000',GradientType=1 );
		z-index: 1
	}
}

@media screen and (min-width: 1280px) {
	.ltr-c01 .ltr-article__title {
		font-size: 2.3rem;
		line-height: 3rem
	}

	.ltr-c01 .ltr-article__headline {
		margin-bottom: 1.6rem;
		font-size: 4.4rem;
		line-height: 1.2
	}

	.ltr-c01 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.3rem
	}

	.ltr-c01 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}

	.ltr-c01 .ltr-article .component__cta-container {
		margin-top: 4.3rem
	}

	.ltr-c01 .ltr-article .component__cta-container .cta--ltr {
		width: auto;
		padding: 1.1rem 5.6rem 1.1rem 1.5rem;
		font-size: 1.5rem;
		line-height: 1.5;
		color: #000;
		background-color: #fff
	}
}

.ltr-c03 {
	position: relative;
	padding-top: 5.6rem;
	padding-bottom: 1.6rem;
	background-color: #ededed
}

.ltr-c03:before {
	content: "";
	position: absolute;
	top: 5.6rem;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #fff
}

.ltr-c03__top {
	position: relative;
	padding-bottom: 2.9rem
}

.ltr-c03__bottom {
	position: relative;
	padding-top: 2.8rem;
	padding-bottom: 3rem
}

.ltr-c03 .ltr-article {
	position: relative;
	width: auto;
	z-index: 2
}

.ltr-c03 .ltr-article__headline {
	padding-top: 1.7rem
}

.ltr-c03 .ltr-article__title+.ltr-article__headline {
	padding-top: 2.2rem
}

.ltr-c03 .ltr-article__description {
	font-size: 1.4rem
}

.ltr-c03 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.ltr-c03 .ltr-article .ltr-article__description p,.ltr-c03 .ltr-article .ltr-article__description ul,.ltr-c03 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 1.9rem
}

.ltr-c03 .ltr-article .ltr-article__description p:last-child,.ltr-c03 .ltr-article .ltr-article__description ul:last-child,.ltr-c03 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.ltr-c03 .ltr-article .ltr-article__description--expandable {
	padding-top: 1.9rem
}

.ltr-c03 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 1.9rem
}

.ltr-c03 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.ltr-c03 .ltr-article .component__read-more {
	font-size: 1.5rem;
	margin-bottom: 0
}

.ltr-c03 .ltr-article .component__cta-container {
	margin-top: 2.4rem
}

.ltr-c03 .ltr-article--bottom {
	padding: 0 2.5rem
}

.ltr-c03 .ltr-article--bottom .ltr-article__title+.ltr-article__headline {
	padding-top: 0.4rem
}

.ltr-c03 .ltr-article--bottom .ltr-article__description {
	font-size: 1.6rem;
	line-height: 2.4rem
}

.ltr-c03__media-container {
	position: relative;
	width: calc(100% - 3rem);
	padding-left: 2.5rem;
	text-align: right;
	z-index: 10
}

.ltr-c03__media-container--right {
	width: calc(100% - 2.5rem);
	margin-top: -2rem;
	padding-left: 0;
	padding-right: 3rem
}

.ltr-c03--flipped .ltr-c03__media-container {
	padding-left: 0;
	margin-right: 3rem
}

.ltr-c03--flipped .ltr-c03__media-container--right {
	margin-left: 2.5rem;
	padding-right: 0
}

@media screen and (min-width: 768px) {
	.ltr-c03 {
		padding: 0
	}

	.ltr-c03:before {
		top: 3rem;
		right: 3rem;
		bottom: 3rem;
		left: 3rem;
		width: auto;
		background: url("../../images/learn-to-ride/texture-bg-content-stacked.jpg") top left;
		background-size: 100%
	}

	.ltr-c03__top,.ltr-c03__bottom {
		display: -ms-flexbox;
		-ms-flex-align: start;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		-webkit-display: flex;
		-moz-display: flex;
		-ms-display: flex;
		-o-display: flex;
		display: flex;
		-webkit-align-items: start;
		-moz-align-items: start;
		-ms-align-items: start;
		-o-align-items: start;
		align-items: start;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-ms-justify-content: space-between;
		-o-justify-content: space-between;
		justify-content: space-between;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-display: flex;
		-moz-display: flex;
		-ms-display: flex;
		-o-display: flex;
		display: flex;
		width: 100%;
		margin: 0 auto
	}

	.ltr-c03__top {
		padding: 3rem 3rem 0
	}

	.ltr-c03__bottom {
		padding: 6.8rem 3rem 3rem
	}

	.ltr-c03__media-container,.ltr-c03--flipped .ltr-c03__media-container {
		margin: 0;
		padding: 0;
		height: 100%
	}

	.ltr-c03 .ltr-article {
		margin-top: 0;
		padding: 0
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description {
		margin-bottom: 0
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description p,.ltr-c03 .ltr-article--bottom .ltr-article__description ul,.ltr-c03 .ltr-article--bottom .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 1.5rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description p:last-child,.ltr-c03 .ltr-article--bottom .ltr-article__description ul:last-child,.ltr-c03 .ltr-article--bottom .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description--expandable {
		padding-top: 1.5rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description--expandable+.component__read-more {
		margin-top: 1.5rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.ltr-c03__top .ltr-article {
		margin: 3rem 0 0
	}

	.ltr-c03__top .ltr-article__wrapper {
		width: 50%
	}

	.ltr-c03__top .ltr-c03__media-container {
		width: calc(50% + 3rem);
		order: -1
	}

	.ltr-c03--flipped .ltr-c03__top .ltr-c03__media-container {
		order: 1
	}

	.ltr-c03__bottom .ltr-article {
		margin: 3rem 0 3rem
	}

	.ltr-c03__bottom .ltr-article__wrapper {
		width: 50%
	}

	.ltr-c03__bottom .ltr-c03__media-container {
		width: calc(50% + 3rem);
		order: 1
	}

	.ltr-c03--flipped .ltr-c03__bottom .ltr-c03__media-container {
		order: -1
	}

	.ltr-c03__top .ltr-article__wrapper,.ltr-c03--flipped .ltr-c03__bottom .ltr-article__wrapper {
		padding-left: 3rem;
		padding-right: 3rem
	}

	.ltr-c03--flipped .ltr-c03__top .ltr-article__wrapper,.ltr-c03__bottom .ltr-article__wrapper {
		padding-left: 3rem;
		padding-right: 3rem
	}

	.ltr-c03__media-container {
		margin-bottom: -1.5rem;
		margin-right: -3rem
	}

	.ltr-c03--flipped .ltr-c03__media-container {
		margin-bottom: -1.5rem;
		margin-left: -3rem
	}

	.ltr-c03__media-container--right {
		width: 141%;
		margin-top: -3rem;
		margin-right: 0;
		margin-bottom: 0;
		margin-left: -3rem
	}

	.ltr-c03--flipped .ltr-c03__media-container--right {
		margin-top: -3rem;
		margin-right: -3rem;
		margin-bottom: 0;
		margin-left: 0
	}
}

@media screen and (min-width: 1280px) {
	.ltr-c03:before {
		top: 6rem;
		right: 6rem;
		bottom: 6rem;
		left: 6rem
	}

	.ltr-c03 .ltr-article__title {
		padding-top: 2.5rem;
		font-size: 2.5rem;
		line-height: 1.15
	}

	.ltr-c03 .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 5.4rem;
		padding-top: 0.4rem;
		margin-bottom: 1.1rem;
		letter-spacing: 0.17rem
	}

	.ltr-c03 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.4rem
	}

	.ltr-c03 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.6rem
	}

	.ltr-c03 .ltr-article .component__cta-container {
		margin-top: 4.4rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 5.4rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__headline {
		margin-bottom: 1.0rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description {
		line-height: 2.9rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description {
		margin-bottom: 0
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description p,.ltr-c03 .ltr-article--bottom .ltr-article__description ul,.ltr-c03 .ltr-article--bottom .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 1.5rem
	}

	.ltr-c03 .ltr-article--bottom .ltr-article__description p:last-child,.ltr-c03 .ltr-article--bottom .ltr-article__description ul:last-child,.ltr-c03 .ltr-article--bottom .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.ltr-c03__top {
		padding: 6rem 6rem 0
	}

	.ltr-c03__bottom {
		padding: 6.8rem 6rem 6rem
	}

	.ltr-c03__top .ltr-article__wrapper,.ltr-c03--flipped .ltr-c03__bottom .ltr-article__wrapper {
		padding-left: 4.2%;
		padding-right: 8%
	}

	.ltr-c03--flipped .ltr-c03__top .ltr-article__wrapper,.ltr-c03__bottom .ltr-article__wrapper {
		padding-left: 10%
	}

	.ltr-c03__top .ltr-article {
		margin: 20% 0 0
	}

	.ltr-c03__top .ltr-article__wrapper {
		width: 43.4%
	}

	.ltr-c03__top .ltr-c03__media-container {
		width: calc(56.6% + 6rem);
		order: -1
	}

	.ltr-c03--flipped .ltr-c03__top .ltr-c03__media-container {
		order: 1
	}

	.ltr-c03__bottom .ltr-article {
		margin: 19% 0 12%
	}

	.ltr-c03__bottom .ltr-article__wrapper {
		width: 44%
	}

	.ltr-c03__bottom .ltr-c03__media-container {
		width: calc(56% + 6rem);
		order: 1
	}

	.ltr-c03--flipped .ltr-c03__bottom .ltr-c03__media-container {
		order: -1
	}

	.ltr-c03__media-container {
		margin-bottom: -3rem;
		margin-right: -6rem
	}

	.ltr-c03--flipped .ltr-c03__media-container {
		margin-bottom: -3rem;
		margin-left: -6rem
	}

	.ltr-c03__media-container--right {
		width: 141%;
		margin-top: -6rem;
		margin-right: 0;
		margin-bottom: 0;
		margin-left: -6rem
	}

	.ltr-c03--flipped .ltr-c03__media-container--right {
		margin-top: -6rem;
		margin-right: -6rem;
		margin-bottom: 0;
		margin-left: 0
	}
}

.b1 {
	overflow: hidden;
	position: relative;
	background-color: transparent;
	text-transform: uppercase
}

.b1__content {
	padding: 4rem 0 5rem
}

.b1 .ltr-article {
	margin: 0;
	padding: 0 3rem 0 2.5rem
}

.b1 .ltr-article__title {
	padding-top: 2.4rem;
	font-size: 2.2rem;
	line-height: 2.6rem;
	letter-spacing: normal
}

.b1 .ltr-article__headline {
	margin-bottom: 2.3rem;
	padding-top: 2.2rem;
	font-size: 3rem
}

.b1 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b1 .ltr-article .ltr-article__description p,.b1 .ltr-article .ltr-article__description ul,.b1 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 1.8rem
}

.b1 .ltr-article .ltr-article__description p:last-child,.b1 .ltr-article .ltr-article__description ul:last-child,.b1 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b1 .ltr-article .ltr-article__description--expandable {
	padding-top: 1.8rem
}

.b1 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 1.8rem
}

.b1 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b1 .ltr-article__description {
	font-size: 1.4rem
}

.b1 .ltr-article--lower {
	margin-top: 2.4rem;
	padding: 0 2.7rem
}

.b1 .ltr-article--lower:before {
	display: none
}

.b1 .ltr-article--lower .ltr-article__description {
	font-size: 1.4rem;
	line-height: 2.2rem
}

.b1 .ltr-article .component__read-more {
	font-size: 1.5rem
}

.b1 .ltr-article .component__cta-container {
	margin-top: 2.6rem
}

.b1__images {
	position: relative;
	overflow: hidden;
	text-align: right;
	z-index: 3
}

.b1__image--right {
	float: right;
	width: 80%
}

.b1__image .cta-icon__play {
	z-index: 1
}

.b1__border-image-container {
	float: left;
	position: relative;
	overflow: visible;
	width: 82%;
	margin-top: -32%;
	margin-left: -25%;
	padding-top: 1rem;
	padding-right: 1rem
}

@media screen and (min-width: 768px) {
	.b1__border-image-container {
		width: 82%
	}
}

.b1__border-image-frame {
	z-index: 0
}

.b1__border-image-frame--top {
	position: relative;
	width: 57%;
	height: 1rem;
	margin-top: -32%;
	padding-bottom: 32%;
	margin-left: 0;
	z-index: 0;
	margin-right: -25%;
	border-top: 1rem solid #fff
}

.b1__border-image-frame--right {
	position: absolute;
	top: -.9rem;
	right: 0;
	width: 1rem;
	height: calc(100% + 0.1rem);
	z-index: 0;
	border-right: 1rem solid #fff
}

@media screen and (min-width: 768px) {
	.b1__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		-webkit-display: flex;
		-moz-display: flex;
		-ms-display: flex;
		-o-display: flex;
		display: flex;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-o-align-items: center;
		align-items: center;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-ms-justify-content: space-between;
		-o-justify-content: space-between;
		justify-content: space-between;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 3rem 0
	}

	.b1 .ltr-article {
		width: 45.3%;
		padding-right: 3rem;
		padding-left: 3rem;
		margin-top: 0
	}

	.b1 .ltr-article__title {
		padding-top: 2.2rem;
		font-size: 2.6rem;
		line-height: 3.4rem
	}

	.b1 .ltr-article__headline {
		padding-top: 2.1rem;
		margin-bottom: 1.3rem;
		font-size: 4rem;
		line-height: 4.8rem
	}

	.b1 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.6rem;
		margin-bottom: 1.2rem;
		margin-right: 3rem
	}

	.b1 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b1 .ltr-article .ltr-article__description p,.b1 .ltr-article .ltr-article__description ul,.b1 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 1.2rem
	}

	.b1 .ltr-article .ltr-article__description p:last-child,.b1 .ltr-article .ltr-article__description ul:last-child,.b1 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b1 .ltr-article .ltr-article__description--expandable {
		padding-top: 1.2rem
	}

	.b1 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: 1.2rem
	}

	.b1 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b1 .ltr-article .component__cta-container {
		margin-top: 4.6rem
	}

	.b1__images {
		width: 54.7%
	}

	.b1__image--right {
		width: 89.6%
	}

	.b1__border-image-container {
		width: 65%;
		margin-top: -29.2%;
		margin-left: -11.60714%;
		padding-top: 1rem;
		padding-right: 1rem
	}

	.b1__border-image-frame--top {
		width: 53.39286%;
		margin-top: -29.2%;
		padding-bottom: 29.2%;
		margin-right: -11.60714%
	}

	.b1--flipped .ltr-article {
		-webkit-order: 1;
		-moz-order: 1;
		-ms-order: 1;
		-o-order: 1;
		order: 1;
		padding-left: 4.3%
	}

	.b1--flipped .ltr-article__headline {
		margin-bottom: 1.2rem
	}

	.b1--flipped .ltr-article .component__cta-container {
		margin-top: 2.6rem
	}

	.b1--flipped__image--right {
		width: 90%
	}

	.b1--flipped__border-image-container {
		width: 65.4%;
		margin-top: -29.5%;
		margin-left: -11.11111%;
		padding-top: 1rem;
		padding-right: 1rem
	}

	.b1--flipped__border-image-frame--top {
		width: 54.28889%;
		margin-top: -29.5%;
		padding-bottom: 29.5%;
		margin-right: -11.11111%
	}

	.b1--flipped__border-image-frame--right {
		right: 0;
		width: 1rem;
		height: calc(100% - 1rem)
	}

	.b1--college-party {
		padding-top: 8.5rem
	}
}

@media screen and (min-width: 1280px) {
	.b1 .ltr-article {
		padding-left: 11.6%;
		padding-right: 4rem
	}

	.b1 .ltr-article__headline {
		font-size: 4.7rem;
		line-height: 1.14
	}

	.b1--flipped .ltr-article {
		padding-left: 4.3%;
		padding-right: 4.3%
	}
}

.b2 {
	position: relative;
	overflow: hidden;
	padding: 3.1rem 0 4.8rem 0;
	background-color: #ededed;
	text-transform: uppercase
}

.b2 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b2 .ltr-article .ltr-article__description p,.b2 .ltr-article .ltr-article__description ul,.b2 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2rem
}

.b2 .ltr-article .ltr-article__description p:last-child,.b2 .ltr-article .ltr-article__description ul:last-child,.b2 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b2 .ltr-article .ltr-article__description--expandable {
	padding-top: 2rem
}

.b2 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 2rem
}

.b2 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b2 .ltr-article__title+.ltr-article__description {
	padding-top: 1.8rem
}

.b2 .ltr-article__headline+.component__cta-container {
	margin-top: 2.4rem
}

.b2 .ltr-article__description p a span.cta-link-third:after {
	content: "\e94d";
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.b2 .ltr-article__description p a span.cta-link-third.link-out:after {
	content: '\e913'
}

.b2__media-container {
	position: relative;
	width: 100%;
	padding-right: 2.7rem
}

@media screen and (min-width: 768px) {
	.b2 {
		padding-top: 0;
		padding-bottom: 0;
		background-color: #ffffff
	}

	.b2__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		padding: 3rem 8.7rem 6rem 0;
		padding: 3rem 0
	}

	.b2 .ltr-article {
		width: 44.4%;
		margin-top: 0;
		padding-right: 3rem;
		padding-left: 3rem
	}

	.b2 .ltr-article__title {
		padding-top: 2.4rem;
		font-size: 2.5rem;
		line-height: 1.2
	}

	.b2 .ltr-article__headline {
		margin-bottom: 1.2rem;
		padding-top: 2rem;
		font-size: 4rem;
		line-height: 4.8rem
	}

	.b2 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.6rem
	}

	.b2 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b2 .ltr-article .ltr-article__description p,.b2 .ltr-article .ltr-article__description ul,.b2 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 1rem
	}

	.b2 .ltr-article .ltr-article__description p:last-child,.b2 .ltr-article .ltr-article__description ul:last-child,.b2 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b2 .ltr-article .ltr-article__description--expandable {
		padding-top: 1rem
	}

	.b2 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: 1rem
	}

	.b2 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b2 .ltr-article .component__read-more {
		line-height: 2.6rem
	}

	.b2 .ltr-article__headline+.component__cta-container {
		margin-top: 2.6rem
	}

	.b2__media-container {
		width: 55.6%;
		padding-right: 0
	}
}

@media screen and (min-width: 1280px) {
	.b2 .ltr-article {
		padding-right: 8%;
		padding-left: 5.4rem
	}

	.b2 .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 5.4rem
	}
}

.b3 {
	background-color: #ededed;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	padding: 3.1rem 0 4.8rem 0
}

.b3 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b3 .ltr-article .ltr-article__description p,.b3 .ltr-article .ltr-article__description ul,.b3 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2rem
}

.b3 .ltr-article .ltr-article__description p:last-child,.b3 .ltr-article .ltr-article__description ul:last-child,.b3 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b3 .ltr-article .ltr-article__description--expandable {
	padding-top: 2rem
}

.b3 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 2rem
}

.b3 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b3 .ltr-article__title+.ltr-article__description {
	padding-top: 1.8rem
}

.b3 .ltr-article__headline+.component__cta-container {
	margin-top: 2.4rem
}

.b3 .ltr-article__description p span.cta-btn-third:after {
	content: "\e94d";
	position: absolute;
	right: 22px;
	font-family: "cta-icon" !important;
	font-size: 1.1rem;
	margin-left: 15px
}

.b3 .ltr-article__description p span.cta-btn-third.link-out:after {
	content: '\e913'
}

.b3 .ltr-article__description p a span.cta-link-third:after {
	content: "\e94d";
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.b3 .ltr-article__description p a span.cta-link-third.link-out:after {
	content: '\e913'
}

.b3__media-container {
	position: relative;
	width: 100%;
	padding-left: 2.7rem
}

@media screen and (min-width: 768px) {
	.b3 {
		padding-top: 0;
		padding-bottom: 0;
		background-color: #fff
	}

	.b3__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto;
		padding: 3rem
	}

	.b3 .ltr-article {
		width: 41.9%;
		padding: 0;
		margin: 0;
		padding-right: 3rem;
		-webkit-order: -1;
		order: -1
	}

	.b3 .ltr-article__title {
		padding-top: 2.4rem;
		font-size: 2.5rem;
		line-height: 3rem;
		letter-spacing: 0.08rem
	}

	.b3 .ltr-article__headline {
		margin-bottom: 1.2rem;
		padding-top: 2rem;
		font-size: 4rem;
		line-height: 4.8rem
	}

	.b3 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.6rem;
		margin-bottom: 0.8rem
	}

	.b3 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b3 .ltr-article .ltr-article__description p,.b3 .ltr-article .ltr-article__description ul,.b3 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: .8rem
	}

	.b3 .ltr-article .ltr-article__description p:last-child,.b3 .ltr-article .ltr-article__description ul:last-child,.b3 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b3 .ltr-article .ltr-article__description--expandable {
		padding-top: .8rem
	}

	.b3 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: .8rem
	}

	.b3 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b3 .ltr-article__headline+.component__cta-container {
		margin-top: 2.6rem
	}

	.b3__media-container {
		width: 58.1%;
		padding-left: 0;
		margin-right: 0
	}
}

@media screen and (min-width: 1280px) {
	.b3__content {
		padding: 3rem 10.5%
	}

	.b3 .ltr-article {
		padding-right: 0
	}

	.b3 .ltr-article__headline {
		font-size: 4.5rem;
		line-height: 1.2;
		letter-spacing: 0.21rem
	}

	.b3__media-container {
		margin-right: -3.3rem
	}
}

.b4 {
	background-color: transparent;
	text-transform: uppercase;
	position: relative;
	padding: 4rem 0 3.5rem 0
}

.b4 .ltr-article {
	clear: both;
	position: relative;
	width: 100%;
	margin: 0;
	padding: 0 2.4rem 3.9rem
}

.b4 .ltr-article__title {
	padding-top: 2.8rem
}

.b4 .ltr-article__headline {
	padding-top: 2.7rem;
	margin-bottom: 0
}

.b4 .ltr-article__title+.ltr-article__headline {
	padding-top: 0.4rem
}

.b4 .ltr-article__description {
	font-size: 1.4rem;
	line-height: 2.2rem
}

.b4 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b4 .ltr-article .ltr-article__description p,.b4 .ltr-article .ltr-article__description ul,.b4 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2rem
}

.b4 .ltr-article .ltr-article__description p:last-child,.b4 .ltr-article .ltr-article__description ul:last-child,.b4 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b4 .ltr-article .ltr-article__description--expandable {
	padding-top: 2rem
}

.b4 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 2rem
}

.b4 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b4 .ltr-article--bottom {
	padding-top: 2.4rem
}

.b4 .ltr-article--bottom:before {
	display: none
}

.b4 .ltr-article .component__read-more {
	text-transform: capitalize
}

.b4__images {
	overflow: hidden;
	position: relative;
	margin-left: -2.5rem
}

.b4__media-container {
	width: 63%;
	position: relative;
	z-index: 1;
	float: right
}

.b4__image--left {
	position: relative;
	float: left;
	width: 54.2%;
	margin-top: -20.6%;
	margin-left: 0
}

@media screen and (min-width: 768px) {
	.b4 {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3rem 0 3.5rem 0
	}

	.b4 .ltr-article {
		display: inline-block;
		width: 41.8%;
		padding: 0 2rem 2rem 0
	}

	.b4 .ltr-article__title {
		padding-top: 2.4rem
	}

	.b4 .ltr-article__headline {
		line-height: 1.16
	}

	.b4 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.6rem;
		margin-bottom: 2.6rem
	}

	.b4 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b4 .ltr-article .ltr-article__description p,.b4 .ltr-article .ltr-article__description ul,.b4 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 2.6rem
	}

	.b4 .ltr-article .ltr-article__description p:last-child,.b4 .ltr-article .ltr-article__description ul:last-child,.b4 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b4 .ltr-article .ltr-article__description--expandable {
		padding-top: 2.6rem
	}

	.b4 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: 2.6rem
	}

	.b4 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b4 .ltr-article .component__read-more {
		font-size: 1.5rem
	}

	.b4 .ltr-article .component__cta-container {
		margin-top: 4.5rem
	}

	.b4 .ltr-article--bottom {
		clear: right;
		float: right;
		width: 52.1%;
		padding: 3.675% 7% 0 5.76%;
		margin-top: 12%
	}

	.b4 .ltr-article--bottom .component__read-more {
		text-transform: uppercase
	}

	.b4__wrapper {
		width: 90%;
		margin: 0 auto
	}

	.b4__images {
		width: 100%;
		margin-left: 0
	}

	.b4__media-container {
		width: 58.2%;
		padding-top: 2rem;
		margin-bottom: -12%
	}

	.b4__image--left {
		width: 47.9%;
		margin-top: 0;
		margin-left: 0
	}
}

@media screen and (min-width: 992px) {
	.b4 .ltr-article__title {
		font-size: 2.8rem;
		line-height: 1.2
	}

	.b4 .ltr-article__headline {
		line-height: 1.16;
		font-size: 3.8rem
	}

	.b4 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.2rem
	}
}

@media screen and (min-width: 1280px) {
	.b4 .ltr-article__title {
		font-size: 2.5rem;
		line-height: 3rem
	}

	.b4 .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 1.16
	}

	.b4 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.8rem
	}

	.b4__wrapper {
		width: 79.4%
	}

	.b4__description {
		margin-bottom: 1.2rem
	}
}

@media screen and (min-width: 1281px) {
	.b4 .ltr-article--bottom {
		margin-top: 19.8%
	}

	.b4__media-container {
		margin-bottom: -19.8%
	}
}

.b5__content {
	position: relative;
	padding: 3.2rem 0;
	text-transform: uppercase;
	background-color: transparent
}

.b5__header {
	position: relative
}

.b5 .ltr-article {
	position: relative;
	width: 100%;
	z-index: 2;
	margin-top: 5rem;
	text-align: center
}

.b5 .ltr-article:before {
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%)
}

.b5 .ltr-article__headline {
	padding-top: 1.8rem;
	padding: 0 0.8rem
}

.b5 .ltr-article__title+.ltr-article__headline {
	padding-top: 0.3rem
}

.b5 .ltr-article__description {
	margin-bottom: 2.3rem;
	font-size: 1.4rem
}

.b5 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b5 .ltr-article .ltr-article__description p,.b5 .ltr-article .ltr-article__description ul,.b5 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2.3rem
}

.b5 .ltr-article .ltr-article__description p:last-child,.b5 .ltr-article .ltr-article__description ul:last-child,.b5 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b5 .ltr-article .ltr-article__description--expandable {
	padding-top: 2.3rem
}

.b5 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 2.3rem
}

.b5 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b5 .ltr-article .component__read-more {
	margin-bottom: 0
}

.b5 .ltr-article .component__read-more+.ltr-article__video-cta-container {
	margin-top: 2.3rem
}

.b5 .ltr-article .component__cta-container {
	margin-top: 2.9rem
}

.b5__images {
	text-align: right;
	position: relative;
	padding-left: 2.5rem
}

.b5__images-container--left {
	float: left;
	text-align: left;
	width: 36%
}

.b5__image--one {
	margin-top: 1rem;
	width: 100%
}

.b5__image--two {
	width: 60%;
	margin-top: 4.25rem
}

.b5__image--three {
	position: relative;
	width: 79%;
	left: 59%;
	vertical-align: top;
	z-index: 2
}

.b5 .ltr-footer {
	height: 4.6rem;
	margin-top: -3.2rem
}

@media screen and (min-width: 768px) {
	.b5__content {
		display: -ms-flexbox;
		-ms-flex-align: start;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: start;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		align-items: start;
		justify-content: space-between;
		flex-wrap: wrap
	}

	.b5 .ltr-article {
		width: 42.8%;
		margin-top: 4%
	}

	.b5 .ltr-article__title {
		padding-top: 2.5rem;
		font-size: 2.4rem;
		line-height: 2.6rem
	}

	.b5 .ltr-article__headline {
		margin-bottom: 1.5rem;
		letter-spacing: 0.18rem
	}

	.b5 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.6rem
	}

	.b5 .ltr-article__description {
		line-height: 2.4rem;
		margin-bottom: 2.4rem;
		font-size: 1.6rem
	}

	.b5 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b5 .ltr-article .ltr-article__description p,.b5 .ltr-article .ltr-article__description ul,.b5 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 2.4rem
	}

	.b5 .ltr-article .ltr-article__description p:last-child,.b5 .ltr-article .ltr-article__description ul:last-child,.b5 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b5 .ltr-article .ltr-article__description--expandable {
		padding-top: 2.4rem
	}

	.b5 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: 2.4rem
	}

	.b5 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b5 .ltr-article .component__cta-container {
		margin-top: 4.9rem
	}

	.b5__images {
		width: 28.6%;
		padding-left: 0
	}

	.b5__images-container--left {
		width: 66.6%;
		margin-top: 12%
	}

	.b5__images-container--right {
		float: right;
		text-align: right;
		width: 95.4%;
		margin-top: -21%
	}

	.b5__image--one {
		margin-top: -11.4%;
		position: relative;
		z-index: 1
	}

	.b5__image--two {
		width: 55%;
		margin-top: -19%;
		margin-right: -2%
	}

	.b5__image--three {
		width: 58%;
		left: 80%
	}

	.b5__image--four {
		width: 32%;
		float: left;
		position: relative;
		left: -11%
	}

	.b5__image--five {
		width: 61.7%;
		margin-top: 12%
	}

	.b5__image--six {
		width: 74.4%;
		float: left;
		margin-top: -7.6%;
		margin-left: -2%
	}

	.b5 .ltr-footer {
		height: 6rem;
		margin-top: -6rem
	}
}

@media screen and (min-width: 1280px) {
	.b5 .ltr-article {
		width: 36.8%;
		padding: 0 4.3%;
		margin-top: 6%
	}

	.b5 .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 5.3rem
	}

	.b5__images {
		width: 31.6%
	}
}

.b6 {
	position: relative;
	width: 100%;
	padding: 7rem 0 4.7rem;
	background-color: #fff;
	text-transform: uppercase
}

.b6__media-container {
	position: relative;
	width: 100%;
	padding-right: 3rem
}

.b6 .ltr-article {
	margin-top: 3rem
}

.b6 .ltr-article__title {
	padding-top: 2.8rem;
	font-size: 2.1rem;
	line-height: 2rem;
	letter-spacing: 0.05rem
}

.b6 .ltr-article__headline {
	padding-top: 2.2rem
}

.b6 .ltr-article__title+.ltr-article__headline {
	padding-top: 0.3rem
}

.b6 .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.b6 .ltr-article .ltr-article__description p,.b6 .ltr-article .ltr-article__description ul,.b6 .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2rem
}

.b6 .ltr-article .ltr-article__description p:last-child,.b6 .ltr-article .ltr-article__description ul:last-child,.b6 .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.b6 .ltr-article .ltr-article__description--expandable {
	padding-top: 2rem
}

.b6 .ltr-article .ltr-article__description--expandable+.component__read-more {
	margin-top: 2rem
}

.b6 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
	padding-top: 0;
	padding-bottom: 0
}

.b6 .ltr-article__description {
	font-size: 1.4rem
}

.b6 .ltr-article .component__read-more {
	text-transform: capitalize
}

.b6 .ltr-article .component__cta-container {
	margin-top: 2.6rem
}

@media screen and (min-width: 768px) {
	.b6 {
		padding: 3rem;
		background: #ededed
	}

	.b6__content {
		position: relative;
		display: -ms-flexbox;
		-ms-flex-align: center;
		display: -webkit-flex;
		-webkit-align-items: center;
		display: flex;
		align-items: center;
		background-color: #ededed;
		padding: 6.2rem 0
	}

	.b6__content:before {
		content: "";
		position: absolute;
		height: 100%;
		width: 49%;
		top: 0;
		right: 0;
		background: #fff url("../../images/learn-to-ride/ltr_content_1_asset_white_box.jpg") no-repeat top center;
		background-size: 100% auto
	}

	.b6__media-container {
		position: relative;
		flex-shrink: 0;
		width: 57.4%;
		padding-right: 0
	}

	.b6 .ltr-article {
		width: 42.6%;
		margin-top: 0;
		padding: 0 4.3%
	}

	.b6 .ltr-article__title {
		padding-top: 2.7rem;
		font-size: 2.5rem;
		line-height: 2.5rem
	}

	.b6 .ltr-article__headline {
		margin-bottom: 1.3rem;
		padding-top: 2rem;
		font-size: 3.6rem;
		line-height: 4.2rem
	}

	.b6 .ltr-article__title+.ltr-article__headline {
		padding-top: 0.6rem
	}

	.b6 .ltr-article__description {
		font-size: 1.6rem;
		line-height: 2.4rem;
		margin-bottom: 1.5rem
	}

	.b6 .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.b6 .ltr-article .ltr-article__description p,.b6 .ltr-article .ltr-article__description ul,.b6 .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 1.5rem
	}

	.b6 .ltr-article .ltr-article__description p:last-child,.b6 .ltr-article .ltr-article__description ul:last-child,.b6 .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.b6 .ltr-article .ltr-article__description--expandable {
		padding-top: 1.5rem
	}

	.b6 .ltr-article .ltr-article__description--expandable+.component__read-more {
		margin-top: 1.5rem
	}

	.b6 .ltr-article .ltr-article__headline+.ltr-article__description--expandable {
		padding-top: 0;
		padding-bottom: 0
	}

	.b6 .ltr-article .component__read-more {
		text-transform: uppercase;
		font-size: 1.5rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 1280px) {
	.b6 .ltr-article {
		padding: 0 4.3%
	}

	.b6 .ltr-article__headline {
		font-size: 4.6rem;
		line-height: 5.3rem
	}
}

.b7 {
	background-color: #ededed;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	padding-bottom: 4.8rem
}

@media screen and (min-width: 768px) {
	.b7 {
		padding-top: 0;
		padding-bottom: 0;
		background-color: #ffffff
	}
}

.b7__content {
	padding-top: 3rem
}

@media screen and (min-width: 768px) {
	.b7__content {
		display: -ms-flexbox;
		-ms-flex-align: center;
		-ms-flex-pack: justify;
		-ms-flex-wrap: wrap;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-between;
		-webkit-flex-wrap: wrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 96%;
		margin: 0 auto;
		background-color: #ededed;
		padding: 3rem 8.7rem 6rem 0
	}

	.b7__content--first {
		padding: 3rem 8.7rem 3rem 8.7rem
	}

	.b7__content--first .b7__details {
		-webkit-order: -1;
		order: -1
	}

	.b7__content--first .b7__media-container {
		width: 55%
	}
}

.b7__header {
	position: relative
}

.b7__details {
	padding-left: 2.5rem;
	width: 95%;
	position: relative
}

@media screen and (min-width: 768px) {
	.b7__details {
		padding-left: 5rem;
		width: 40%;
		padding-left: 3rem
	}
}

.b7__details--bottom {
	margin-top: 2.5rem;
	padding-left: 0
}

@media screen and (min-width: 768px) {
	.b7__details--bottom {
		width: 75%
	}
}

.b7__details .cta-label {
	min-width: 14.4rem
}

.b7__title {
	letter-spacing: 0.1rem;
	margin-bottom: 3rem;
	padding-top: 2rem;
	display: inline-block;
	margin-top: 4rem;
	position: relative
}

@media screen and (min-width: 320px) {
	.b7__title {
		font-size: 2rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.b7__title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.b7__title:before {
	content: "";
	position: absolute;
	height: 1rem;
	width: 100%;
	max-width: 9rem;
	top: -1rem;
	background-color: #f60
}

.b7__headline {
	letter-spacing: 0.1rem;
	margin-bottom: 2rem;
	display: block
}

@media screen and (min-width: 320px) {
	.b7__headline {
		font-size: 3rem;
		line-height: 3.3rem
	}
}

@media screen and (min-width: 768px) {
	.b7__headline {
		font-size: 4.55rem;
		line-height: 5.2rem
	}
}

.b7__headline--narrow {
	width: 75%
}

.b7__description {
	text-transform: none;
	margin-bottom: 1.25rem
}

@media screen and (min-width: 320px) {
	.b7__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.b7__description {
		width: 85%
	}
}

.b7__media-container {
	width: 93%;
	float: none;
	position: relative
}

@media screen and (min-width: 768px) {
	.b7__media-container {
		width: 63%;
		margin-left: -3%
	}
}

.billboard-top-bar--bgr-black {
	background-color: #000
}

.ltr-footer {
	-webkit-order: 9;
	-moz-order: 9;
	-ms-order: 9;
	-o-order: 9;
	order: 9;
	margin-top: -6rem
}

.billboard-top-bar,.ltr-footer {
	width: 100%;
	text-indent: -99999px;
	height: 6rem
}

.billboard-top-bar--bgr-texture,.ltr-footer--bgr-texture {
	background: #fff url("../../images/learn-to-ride/texture_bg_collage-footer-small.jpg") top center no-repeat;
	background-size: 100%
}

.billboard-top-bar--bgr-texture.ltr-article,.ltr-footer--bgr-texture.ltr-article {
	background-image: url("../../images/learn-to-ride/texture_bg_b1-small.jpg")
}

.b1 .billboard-top-bar--bgr-texture,.b1 .ltr-footer--bgr-texture {
	background-image: url("../../images/learn-to-ride/texture_bg_b1-footer-small.jpg");
	margin-top: -6.4rem
}

.b5 .billboard-top-bar--bgr-texture,.b5 .ltr-footer--bgr-texture {
	background-image: url("../../images/learn-to-ride/texture_bg_collage-footer-small.jpg")
}

@media screen and (min-width: 768px) {
	.billboard-top-bar--bgr-texture,.ltr-footer--bgr-texture {
		background-image: url("../../images/learn-to-ride/texture_bg_collage-footer-large.jpg")
	}

	.billboard-top-bar--bgr-texture.ltr-article,.ltr-footer--bgr-texture.ltr-article {
		background: transparent
	}

	.b1 .billboard-top-bar--bgr-texture,.b1 .ltr-footer--bgr-texture {
		background-image: url("../../images/learn-to-ride/texture_bg_b1-footer-large.jpg")
	}

	.b5 .billboard-top-bar--bgr-texture,.b5 .ltr-footer--bgr-texture {
		background-image: url("../../images/learn-to-ride/texture_bg_collage-footer-large.jpg")
	}
}

.billboard-top-bar--bgr-gray,.ltr-footer--bgr-gray {
	background-color: #ededed
}

.ltr-bgr--white {
	background-color: #fff
}

.ltr-bgr--white-texture {
	background: #fff url("../../images/learn-to-ride/ltr-bg.jpg") top center no-repeat;
	background-size: 100%
}

.ltr-bgr--white-texture.b1 {
	background-image: url("../../images/learn-to-ride/texture_bg_b1-small.jpg")
}

@media screen and (min-width: 768px) {
	.ltr-bgr--white-texture.b1 {
		background-image: url("../../images/learn-to-ride/texture_bg_b1.jpg")
	}
}

.ltr-bgr--white-texture.b4 {
	background-image: url("../../images/learn-to-ride/texture_bg_b4.jpg")
}

.ltr-bgr--white-texture.b5 {
	background-image: url("../../images/learn-to-ride/texture_bg_collage-small.jpg")
}

@media screen and (min-width: 768px) {
	.ltr-bgr--white-texture.b5 {
		background-image: url("../../images/learn-to-ride/texture_bg_collage.jpg")
	}
}

.ltr-bgr--white.b1 .b1__border-image-frame--top,.ltr-bgr--white.b1 .b1__border-image-frame--right,.ltr-bgr--white-texture.b1 .b1__border-image-frame--top,.ltr-bgr--white-texture.b1 .b1__border-image-frame--right {
	border-color: #fff
}

.ltr-bgr--light-gray {
	background-color: #ededed
}

.ltr-bgr--light-gray.b1 .b1__border-image-frame--top,.ltr-bgr--light-gray.b1 .b1__border-image-frame--right {
	border-color: #ededed
}

.ltr-c07 {
	background-color: #fff;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	width: 100%;
	margin-top: -3rem
}

@media screen and (min-width: 768px) {
	.ltr-c07 {
		background: #fff url("../../images/new-rider/search-for-class-desktop.jpg") no-repeat;
		background-size: contain
	}
}

.ltr-c07 fieldset {
	width: 100%
}

.ltr-c07 input {
	border-radius: 0
}

.ltr-c07 [no-results] ul {
	margin-top: 1rem
}

.ltr-c07 [no-results] ul li {
	margin: 0.8rem 0
}

.ltr-c07__result-overlay {
	margin-top: 0;
	min-height: 100%
}

.ltr-c07 .loader {
	width: 32px;
	height: 32px;
	background-image: url("../../images/ajax-loader.gif");
	display: none;
	margin: 6rem auto 0 auto
}

.ltr-c07 .loader--see-more {
	margin: 0 auto
}

.ltr-c07 .form__label--error {
	text-transform: none;
	max-width: 42.5rem;
	width: 92%;
	margin: 0 auto 4.3rem
}

@media screen and (min-width: 768px) {
	.ltr-c07 .form__label--error {
		width: 100%;
		max-width: 32.5rem
	}
}

.ltr-c07__copy {
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-transform: none;
	clear: both;
	padding-top: 2rem
}

.ltr-c07__copy--learn-more {
	display: none
}

.ltr-c07__container {
	margin: 0 auto;
	max-width: 67.5rem;
	background: url("../../images/new-rider/search-for-class.png") top left no-repeat;
	background-size: 101% 103%
}

@media screen and (min-width: 768px) {
	.ltr-c07__container {
		background: none
	}
}

.ltr-c07__header {
	position: relative;
	text-align: center;
	padding: 9rem 0 2.5rem 0;
	margin-top: -3.75rem;
	border-bottom: 0.1rem solid #dfdfdf
}

.ltr-c07__headline {
	display: block
}

@media screen and (min-width: 320px) {
	.ltr-c07__headline {
		font-size: 3rem;
		line-height: 3.3rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c07__headline {
		font-size: 4.55rem;
		line-height: 5.2rem
	}
}

.ltr-c07__fields {
	padding: 3rem 0;
	width: 92%;
	margin: 0 auto;
	max-width: 42.5rem
}

@media screen and (min-width: 768px) {
	.ltr-c07__fields {
		max-width: 32.5rem
	}
}

.ltr-c07__fields .component__cta-container {
	clear: both;
	padding-top: 3rem
}

.ltr-c07__fields .cta {
	width: 100%
}

.ltr-c07__fields .form__label--error {
	text-transform: none;
	margin-top: -20px;
	margin-bottom: 2rem
}

.ltr-c07__input {
	width: 100%;
	border: 0.2rem solid #000000;
	padding: 1rem;
	margin-bottom: 3rem
}

.ltr-c07__input::-webkit-input-placeholder {
	color: #7f7f7f
}

.ltr-c07__input::-moz-placeholder {
	color: #7f7f7f
}

.ltr-c07__input:-ms-input-placeholder {
	color: #7f7f7f
}

.ltr-c07__input:-moz-placeholder {
	color: #7f7f7f
}

.ltr-c07__input:focus::-webkit-input-placeholder {
	color: transparent
}

.ltr-c07__input:focus::-moz-placeholder {
	color: transparent
}

.ltr-c07__input:focus:-ms-input-placeholder {
	color: transparent
}

.ltr-c07__input:focus:-moz-placeholder {
	color: transparent
}

.ltr-c07__input-checked-focus {
	outline: #4D90FE auto 0.5rem
}

.ltr-c07__input--error {
	border-color: #ad181f
}

.ltr-c07__input--small-margin {
	margin-bottom: 1.5rem
}

.ltr-c07__input-label {
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin-bottom: 1rem;
	width: 100%
}

@media screen and (min-width: 320px) {
	.ltr-c07__input-label {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__input-label--margin-top {
	margin-top: 3rem
}

.ltr-c07__input-checkbox {
	position: absolute;
	opacity: 0
}

.ltr-c07__input-checkbox:checked+.ltr-c07__checkbox-custom {
	background: url("../../images/checkbox-check.png") no-repeat;
	background-size: 65%;
	background-position: 0.35rem 0.35rem
}

.ltr-c07__input-checkbox-label {
	display: table-cell;
	vertical-align: middle;
	text-transform: none;
	padding-left: 1rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__input-checkbox-label {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c07__input-checkbox-label-link {
	font-family: "NotoSans-Regular",sans;
	text-decoration: underline;
	padding-left: 0.25rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__input-checkbox-label-link {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.android .ltr-c07__input-checkbox-label .link--black:hover,.ios .ltr-c07__input-checkbox-label .link--black:hover {
	text-decoration: underline
}

.ltr-c07__input-checkbox-label:after {
	content: "";
	clear: both
}

.ltr-c07__checkbox-wrapper {
	display: table;
	width: 100%
}

.ltr-c07__checkbox-custom {
	display: inline-block;
	vertical-align: middle;
	margin-bottom: 0;
	padding: 1.2rem;
	border: 0.2rem solid #000000;
	text-indent: -9999px;
	font-size: 0
}

@media screen and (min-width: 768px) {
	.ltr-c07__checkbox-custom {
		margin-bottom: 0;
		float: left
	}
}

.ltr-c07__select {
	border-radius: 0;
	background-color: #fff;
	-webkit-user-select: none;
	-moz-user-select: -moz-none;
	-ms-user-select: none;
	user-select: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 2px solid #000;
	background: transparent url("../../images/estimate-payment/icon-detail-arrow-down-black.png") no-repeat 94% 50%;
	background-size: 0.9rem 0.5rem;
	background-position: right 1.5rem center
}

.ltr-c07__select::-ms-expand {
	display: none
}

.ltr-c07__select--filter {
	width: 92%;
	margin: 1.3rem auto 0 auto;
	display: block;
	max-width: 42.5rem
}

@media screen and (min-width: 768px) {
	.ltr-c07__select--filter {
		max-width: 32.5rem
	}
}

.ltr-c07__select.ltr-c07__input--error {
	border-color: #a8000a
}

.ltr-c07__divider {
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	letter-spacing: 0.05rem;
	position: relative;
	margin-bottom: 3rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__divider {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c07__divider:before,.ltr-c07__divider:after {
	content: "";
	height: 0.1rem;
	width: 45%;
	position: absolute;
	top: 45%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background-color: #000000
}

.ltr-c07__divider:before {
	left: 0
}

.ltr-c07__divider:after {
	right: 0
}

.ltr-c07__see-more {
	text-align: center;
	letter-spacing: 0.05rem;
	display: none
}

@media screen and (min-width: 320px) {
	.ltr-c07__see-more {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__see-more:after {
	content: "+";
	padding-left: 0.5rem
}

.ltr-c07__see-more-container {
	margin: 1.4rem 0 4.3rem;
	text-align: center
}

.ltr-c07__search-again {
	padding: 2rem 1rem 1rem 1rem;
	background-color: #494949;
	position: relative;
	text-align: center;
	position: fixed;
	top: 30%;
	right: 0;
	z-index: 10;
	cursor: pointer;
	-webkit-transform: translateX(100%);
	-moz-transform: translateX(100%);
	-ms-transform: translateX(100%);
	-o-transform: translateX(100%);
	transform: translateX(100%)
}

@media screen and (min-width: 768px) {
	.ltr-c07__search-again {
		display: none
	}
}

.ltr-c07__search-again--active {
	-webkit-transform: translateX(0);
	-moz-transform: translateX(0);
	-ms-transform: translateX(0);
	-o-transform: translateX(0);
	transform: translateX(0)
}

.ltr-c07__search-again-copy {
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin: 0;
	max-width: 4.5rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__search-again-copy {
		font-size: 0.9rem;
		line-height: 1.4rem
	}
}

.ltr-c07__search-again:before {
	content: "";
	position: absolute;
	top: 0.6rem;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%);
	width: 1.5rem;
	height: 0.9rem;
	background: url("../../images/up-arrow-white.png") no-repeat;
	background-size: 100%
}

.ltr-c07__results {
	display: none
}

.ltr-c07__results-header {
	text-align: center;
	display: block;
	margin-top: 0.5rem;
	letter-spacing: 0.1rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-header {
		font-size: 2.4rem;
		line-height: 1
	}
}

.ltr-c07__results-subheader {
	display: block;
	text-align: center;
	margin-top: 1rem;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-subheader {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__results-details {
	margin-top: 2rem
}

.ltr-c07__results-details--upcoming {
	display: none;
	background: url("../../images/new-rider/upcomming-result.jpg") top left;
	background-size: 100% auto;
	margin-top: 4rem
}

.ltr-c07__results-details--upcoming .component__cta-container--new-search .cta {
	color: #9e9b9b;
	color: #9e9b9b;
	background-color: #dfdfdf;
	cursor: pointer;
	width: 100%
}

@media screen and (min-width: 768px) {
	.ltr-c07__results-details--upcoming .component__cta-container--new-search .cta {
		width: auto
	}

	.ltr-c07__results-details--upcoming .component__cta-container--new-search .cta-label {
		min-width: 23.65rem
	}
}

.ltr-c07__results-details--upcoming .component__cta-container--new-search .cta:hover {
	color: #9e9b9b;
	background-color: #dfdfdf
}

.ltr-c07__results-item {
	position: relative;
	border-top: 0.2rem solid #000000
}

.ltr-c07__results-item:last-child {
	border-bottom: 0.2rem solid #000000
}

.ltr-c07__results-item .component__cta-container {
	margin-top: 3rem
}

.ltr-c07__results-item .cta {
	width: 100%
}

@media screen and (min-width: 768px) {
	.ltr-c07__results-item .cta {
		width: auto
	}

	.ltr-c07__results-item .cta-label {
		min-width: 23.65rem
	}
}

.ltr-c07__results-item-clickable-area {
	padding: 0 4%;
	cursor: pointer
}

@media screen and (min-width: 768px) {
	.ltr-c07__results-item-clickable-area {
		padding: 0 1.5rem
	}
}

.ltr-c07__results-item-col {
	padding: 0 1.25rem;
	display: inline-block;
	vertical-align: top
}

.ltr-c07__results-item-col--left {
	width: 8rem;
	padding: 0
}

@media screen and (min-width: 768px) {
	.ltr-c07__results-item-col--left {
		padding-left: 0
	}
}

.ltr-c07__results-item-col--center {
	width: 60%
}

.ltr-c07__results-item-col--right {
	position: absolute;
	right: 4%;
	top: 1.5rem
}

@media screen and (min-width: 768px) {
	.ltr-c07__results-item-col--right {
		padding-right: 0
	}
}

.ltr-c07__results-item-date {
	background-color: #222222;
	padding: 0.9rem 1rem;
	color: #ffffff;
	display: inline-block;
	text-align: center;
	max-width: 8rem;
	word-wrap: break-word
}

.ltr-c07__results-item-month,.ltr-c07__results-item-day {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 0;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-month {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-day {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__results-item-status {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	position: relative;
	margin: 0.6rem 0;
	padding-left: 1.8rem;
	display: inline-block;
	white-space: nowrap
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-status {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c07__results-item-status:before {
	content: "";
	display: inline-block;
	border-radius: 50%;
	margin-left: -1.8rem;
	width: 1.2rem;
	height: 1.2rem;
	vertical-align: baseline;
	margin-right: 0.6rem
}

.ltr-c07__results-item-status--open:before {
	background-color: #39b54a
}

.ltr-c07__results-item-status--full:before {
	background-color: #ed1c24
}

.ltr-c07__results-item-status--waitlist:before {
	background-color: #d4c430
}

.ltr-c07__results-item-distance {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-distance {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-distance-unit {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__results-item-name {
	padding-top: 1.5rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-name {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

.ltr-c07__results-item-location {
	text-transform: none;
	margin: 1rem 0 0 0
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-location {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__results-item-expand {
	width: 2.2rem;
	height: 2.2rem;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	cursor: pointer;
	border: none
}

.ltr-c07__results-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.ltr-c07__results-item-content {
	background-color: #ededed;
	padding: 2.5rem;
	display: none
}

.ltr-c07__results-item-content-header {
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-content-header {
		font-size: 1.5rem;
		line-height: 1.8rem
	}
}

.ltr-c07__results-item-content-copy {
	text-transform: none;
	margin: 0
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-content-copy {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__results-item-content-copy--align-right {
	padding-left: 1rem;
	text-align: left
}

.ltr-c07__results-item-content-copy--bold {
	font-family: "NotoSans-Bold",sans
}

.ltr-c07__results-item-content-copy .schedule-day {
	display: inline-block;
	width: 4rem
}

.ltr-c07__results-item-content-link {
	text-decoration: underline;
	font-family: "NotoSans-Regular",sans;
	text-transform: none
}

@media screen and (min-width: 320px) {
	.ltr-c07__results-item-content-link {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__results-item-content-schedule {
	margin: 0.5rem 0 1.9rem 0
}

.ltr-c07__results-item-content-schedule .ltr-c07__results-item-content-copy {
	width: 49%;
	display: inline-block
}

.ltr-c07__results-item-content-address {
	margin: 0.5rem 0 1.9rem 0
}

.ltr-c07__results-item-content-detail {
	margin-bottom: 3rem
}

.ltr-c07__results-item-content-info-boxes {
	display: -ms-flexbox;
	-ms-flex-align: stretch;
	-ms-flex-pack: justify;
	display: -webkit-flex;
	-webkit-align-items: stretch;
	-webkit-justify-content: space-between;
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	max-width: 37.5rem
}

.ltr-c07__results-item-content-info-box {
	width: 45%;
	background-color: #ffffff;
	border: 0.1rem solid #000000;
	display: -webkit-flex;
	-webkit-align-items: center;
	-webkit-justify-content: center;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 1.5rem 1rem
}

.ltr-c07__results-item-content .ltr-button {
	width: 100%;
	max-width: none;
	margin-top: 2.4rem;
	max-width: 32rem
}

.ltr-c07__upcoming-back {
	margin: 0 0 3.5rem 1.5rem;
	position: relative;
	padding-left: 1.75rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__upcoming-back {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.ltr-c07__upcoming-back:before {
	content: "";
	width: 0.9rem;
	height: 1.5rem;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/pagination-arrow-prev.png");
	background-size: 100%;
	transition: all 0.5s ease
}

.ltr-c07__upcoming-back:hover:before {
	left: -1rem
}

.ltr-c07__upcoming-headline {
	padding: 0 1.5rem;
	margin-bottom: 1rem;
	display: block
}

@media screen and (min-width: 320px) {
	.ltr-c07__upcoming-headline {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__upcoming-showing {
	display: block;
	margin: 0 1.5rem 2rem;
	font-size: 1.5rem;
	text-transform: none
}

.ltr-c07__direction-overlay-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10999;
	display: none;
	overflow: auto;
	background-color: #ffffff
}

.ltr-c07__direction-overlay-content {
	max-width: 67.5rem;
	margin: auto;
	padding-bottom: 5rem;
	background: url("../../images/new-rider/map-direction_hour.jpg") 0px 60px;
	background-size: 100% auto
}

.ltr-c07__direction-overlay-content .form__label--error {
	margin-left: 0
}

.ltr-c07__direction-overlay-content .form__label--error[map-directions-error] {
	margin-top: -1.5rem
}

.ltr-c07__direction-overlay-header {
	display: table;
	width: 100%;
	background-color: #000000;
	padding: 2rem 2.2rem;
	position: relative
}

.ltr-c07__direction-overlay-title {
	display: table-cell;
	vertical-align: middle;
	text-transform: uppercase;
	color: #ffffff;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__direction-overlay-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c07__direction-overlay-close {
	display: table-cell;
	position: relative;
	vertical-align: middle;
	padding-right: 3.2rem;
	text-align: right;
	color: #ffffff
}

@media screen and (min-width: 320px) {
	.ltr-c07__direction-overlay-close {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.ltr-c07__direction-overlay-close:after {
	content: "";
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	background: url("../../images/close-icon.png");
	background-size: 100%
}

.ltr-c07__direction-overlay-map {
	padding-top: 85%;
	margin-bottom: 3.5rem
}

.ltr-c07__direction-overlay-map-title {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	padding: 0 2.3rem;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.ltr-c07__direction-overlay-map-title {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__direction-overlay-inputs {
	padding: 0 1.5rem
}

.ltr-c07__direction-overlay-inputs .cta {
	width: 100%
}

@media screen and (min-width: 768px) {
	.ltr-c07__direction-overlay-inputs .cta {
		width: auto
	}

	.ltr-c07__direction-overlay-inputs .cta-label {
		min-width: 23.65rem
	}
}

.ltr-c07__direction-overlay-info {
	padding: 0 2.3rem
}

.ltr-c07__direction-overlay-address {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin: 3rem 0 2rem 0
}

@media screen and (min-width: 320px) {
	.ltr-c07__direction-overlay-address {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c07__direction-overlay-contact {
	text-transform: lowercase
}

@media screen and (min-width: 320px) {
	.ltr-c07__direction-overlay-contact {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.ltr-c07__direction-overlay-contact-link {
	text-decoration: underline;
	font-family: "NotoSans-Regular",sans;
	text-transform: none
}

.ltr-c07 img.adp-marker {
	display: none
}

.ltr-c04__accordion-item-content .adp {
	padding: 0 1.5rem;
	margin-bottom: 1.5rem
}

.ltr-c04__accordion-item-content .adp-placemark {
	background: transparent;
	border: none;
	position: relative
}

.ltr-c04__accordion-item-content .adp-placemark:before {
	content: "\e902";
	position: absolute;
	right: calc(100% + 1rem);
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	font-family: 'cta-icon';
	color: #f60
}

.ltr-c04__accordion-item-content .adp table {
	font-family: "NotoSans-Regular",sans;
	color: #000000;
	font-weight: normal;
	text-transform: none
}

@media screen and (min-width: 320px) {
	.ltr-c04__accordion-item-content .adp table {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c04__accordion-item-content .adp .adp-substep {
	border-top: none;
	vertical-align: middle
}

.ltr-c04__accordion-item-content .adp .adp-substep .adp-distance {
	text-align: right
}

.ltr-c08 {
	background-color: #ffffff;
	text-transform: uppercase;
	position: relative;
	overflow: hidden;
	padding: 3rem 0 8.8rem 0;
	width: 100%;
	margin-top: -3rem
}

.ltr-c08 input {
	border-radius: 0
}

.ltr-c08__course-info {
	margin-bottom: 3rem
}

.ltr-c08__course-info .ltr-c08__input-label {
	margin-bottom: 1rem;
	margin-top: 2rem
}

.ltr-c08__course-info__title {
	margin-bottom: 1rem;
	font-family: "NotoSans-Bold",sans
}

.ltr-c08__course-info__title.ltr-c08__headline {
	margin: 0
}

.ltr-c08__course-info__price-title.ltr-c08__input-label {
	display: inline-block;
	width: auto
}

.ltr-c08__course-info p {
	margin: 0;
	text-transform: none
}

.ltr-c08__print {
	text-align: right;
	padding-top: 2rem
}

.ltr-c08__print-btn {
	background: transparent;
	border: none;
	text-decoration: underline
}

.ltr-c08__print-btn:hover,.ltr-c08__print-btn:active,.ltr-c08__print-btn:focus {
	color: #000;
	text-decoration: underline
}

.ltr-c08__logo {
	margin: 3rem 0;
	max-width: 30rem
}

.ltr-c08__back {
	position: relative;
	height: 2rem;
	margin: 2rem 2.5rem 4rem 2.5rem
}

@media screen and (max-width: 767px) {
	.ltr-c08__back {
		margin: 2rem 2.5rem 4rem 1.6rem
	}
}

.ltr-c08__back-link {
	color: #000;
	font-size: 1rem
}

@media screen and (min-width: 768px) {
	.ltr-c08__back-link {
		font-size: 1.4rem
	}
}

.ltr-c08__back-link.cta.cta-icon__back .cta-icon {
	top: 0
}

.ltr-c08__back-link:visited,.ltr-c08__back-link:hover {
	color: #000
}

.ltr-c08__form-cover {
	position: fixed;
	height: 100%;
	width: 100%;
	z-index: 999;
	top: 0;
	left: 0;
	display: none
}

.ltr-c08 .loader {
	width: 32px;
	height: 32px;
	background-image: url("../../images/ajax-loader.gif");
	display: none;
	margin: 6rem auto 0 auto
}

.ltr-c08 .loader--see-more {
	margin: 10px auto
}

.ltr-c08__current-owner-container {
	display: none
}

.ltr-c08__container {
	margin: 0 auto;
	max-width: 67.5rem
}

.ltr-c08__container-parttwo {
	display: none
}

.ltr-c08__container-partthree {
	display: none
}

.ltr-c08__container-submission {
	display: none
}

.ltr-c08__error-on input,.ltr-c08__error-on select {
	border: 0.2rem solid #ad181f
}

.ltr-c08__error-on .ltr-c08__input-checked {
	border-color: #ad181f
}

.ltr-c08__header {
	position: relative;
	width: 92%;
	margin: 0 auto;
	max-width: 42.5rem;
	text-align: left
}

@media screen and (min-width: 768px) {
	.ltr-c08__header {
		max-width: 32.5rem
	}
}

.ltr-c08__header--bottom-spacing {
	padding-bottom: 1.5rem
}

@media screen and (min-width: 768px) {
	.ltr-c08__header {
		max-width: 65rem
	}
}

.ltr-c08__headline {
	font-size: 3rem;
	line-height: 3.3rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin: 1rem 0 1rem 0;
	width: 100%;
	display: inline-block
}

.ltr-c08__smallcopy {
	text-transform: none;
	margin: 0rem 0 4rem 0
}

@media screen and (min-width: 320px) {
	.ltr-c08__smallcopy {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__smallcopy {
		font-size: 1.4rem;
		line-height: 1.6rem
	}
}

.ltr-c08 #middleInitial {
	display: block;
	max-width: 50%
}

.ltr-c08__subhead {
	max-width: 34rem
}

@media screen and (min-width: 320px) {
	.ltr-c08__subhead {
		font-size: 2rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__subhead {
		font-size: 1.8rem;
		line-height: 2.4rem
	}
}

.ltr-c08__headercopy {
	text-transform: none;
	margin-top: 0.9rem;
	margin-bottom: 0
}

.ltr-c08-button {
	width: 100%;
	max-width: none;
	margin-top: 3rem;
	display: inline-block
}

.ltr-c08__fields {
	padding: 1rem 0 0 0;
	width: 92%;
	margin: 0 auto;
	max-width: 42.5rem
}

@media screen and (min-width: 768px) {
	.ltr-c08__fields {
		max-width: 32.5rem
	}
}

.ltr-c08__fields .form__label--error {
	text-transform: none;
	margin-top: -2rem;
	margin-bottom: 2.5rem;
	clear: both
}

.ltr-c08__fields .form__label--error:before {
	margin-top: 0.35rem;
	top: 0;
	-webkit-transform: none;
	-moz-transform: none;
	-ms-transform: none;
	-o-transform: none;
	transform: none
}

.ltr-c08__fields .form__label--error-other-answer {
	margin-top: 1rem
}

.ltr-c08__fields-details {
	margin: 6rem auto
}

@media screen and (min-width: 768px) {
	.ltr-c08__fields {
		max-width: 32.5rem
	}
}

.ltr-c08__copy {
	text-transform: none
}

.ltr-c08__schedule {
	text-transform: none
}

.ltr-c08__schedule .schedule-day {
	display: inline-block;
	width: 4rem
}

.ltr-c08__schedule-times {
	display: inline-block;
	margin: 0 0 0 4rem
}

.ltr-c08__input {
	width: 100%;
	border: 0.2rem solid #000000;
	padding: 1rem;
	margin-bottom: 3rem
}

.ltr-c08__input--error {
	border-color: #ad181f
}

.ltr-c08__input--with-radio {
	width: auto;
	position: absolute;
	top: -55%;
	margin-left: 1rem !important
}

.ltr-c08__input__marselect {
	margin-bottom: 1.5rem
}

.ltr-c08__input[type="number"]::-webkit-inner-spin-button,.ltr-c08__input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0
}

.ltr-c08__input[type="number"] {
	-moz-appearance: textfield
}

.ltr-c08__input--small-margin {
	margin-bottom: 1.5rem
}

.ltr-c08__input+.ltr-c08__smallcopy {
	margin-top: -1.7rem;
	margin-bottom: 3rem
}

.ltr-c08__input-label {
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	margin-bottom: 1rem;
	width: 100%;
	display: inline-block
}

@media screen and (min-width: 320px) {
	.ltr-c08__input-label {
		font-size: 1.8rem;
		line-height: 1.3
	}
}

.ltr-c08__input-label--margin-top {
	margin-top: 3rem
}

.ltr-c08__input-radio {
	position: absolute;
	opacity: 0
}

.ltr-c08__input-radio:checked ~ .ltr-c08__input-checked {
	background: #fff;
	border: 2px solid #000;
	border-radius: 100%
}

.ltr-c08__input-radio:checked ~ .ltr-c08__input-checked span {
	display: block;
	border: 1px solid #000;
	border-radius: 100%;
	width: 12px;
	height: 12px;
	background-color: #fff;
	margin: 2px
}

.ltr-c08__input-label-radio {
	text-transform: none;
	font-weight: normal;
	color: #000;
	z-index: 10;
	display: inline-block;
	width: 100%;
	position: relative;
	left: 0%;
	padding: 0 0rem 0 2.6rem;
	top: 3px
}

@media screen and (min-width: 320px) {
	.ltr-c08__input-label-radio {
		font-size: 1.2rem;
		line-height: 1.8rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__input-label-radio {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.ltr-c08__input-label-radio--with-input {
	margin-right: 10px
}

.ltr-c08__input-checked {
	position: absolute;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	border: 2px solid #000;
	display: block;
	top: 10%;
	left: 0;
	background: transparent;
	z-index: 9
}

.ltr-c08__input-checked span {
	display: none
}

.ltr-c08__input-checked-focus {
	outline: #4D90FE auto 0.5rem
}

.ltr-c08__input-checkbox {
	display: none
}

.ltr-c08__input-checkbox:checked+.ltr-c08__checkbox-custom {
	background: url("../../images/checkbox-check.png") no-repeat;
	background-size: 65%;
	background-position: 0.35rem 0.35rem
}

.ltr-c08__input-checkbox-container {
	margin-bottom: 2.5rem;
	overflow: hidden
}

.ltr-c08__input-checkbox-label {
	text-transform: none;
	vertical-align: top;
	padding-top: 0.5rem;
	padding-left: 1rem;
	display: inline-block
}

@media screen and (min-width: 320px) {
	.ltr-c08__input-checkbox-label {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (max-width: 767px) {
	.ltr-c08__input-checkbox-label {
		font-size: 1.2rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__input-checkbox-label {
		float: left;
		width: 81%
	}
}

.ltr-c08__input-checkbox-label-link {
	font-family: "NotoSans-Regular",sans;
	text-decoration: underline;
	padding-left: 0.25rem
}

@media screen and (min-width: 320px) {
	.ltr-c08__input-checkbox-label-link {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c08__input-checkbox-label:after {
	content: "";
	clear: both
}

.ltr-c08__textarea {
	resize: vertical;
	margin-bottom: -0.5rem
}

.ltr-c08__checkbox-custom {
	padding: 1rem;
	border: 0.1rem solid #000000;
	text-indent: -9999px;
	font-size: 0
}

@media screen and (min-width: 768px) {
	.ltr-c08__checkbox-custom {
		margin-bottom: 0;
		float: left
	}
}

.ltr-c08__card-info {
	margin-bottom: 4rem
}

.ltr-c08__card-logos {
	margin-bottom: 2.5rem
}

.ltr-c08__card-logo {
	max-width: 70px;
	margin-right: 1.2rem
}

.ltr-c08__info-small {
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c08__info-small {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__info-small {
		font-size: 1.4rem;
		line-height: 1.6rem
	}
}

.ltr-c08__radiogroup {
	margin: 0rem 0 3rem 0
}

.ltr-c08__radiogroup[contact-student] {
	display: none
}

.ltr-c08__radiogroup-copy {
	margin-top: -2rem;
	text-transform: none;
	margin-bottom: 2.2rem;
	display: none
}

.ltr-c08__radiogroup-vert {
	margin: 3rem 0
}

.ltr-c08__radiogroup-vert label {
	display: inline-block
}

.ltr-c08__radiogroup-vert--hidden {
	display: none
}

.ltr-c08__radiogroup-options {
	margin: 1rem 0
}

.ltr-c08__radiogroup-options input:last-of-type,.ltr-c08__radiogroup-options input {
	margin: 0
}

.ltr-c08__radiogroup-buttons {
	position: relative;
	margin: 2rem 0
}

.ltr-c08__radiogroup-buttons-vert {
	float: left;
	width: 33%;
	margin-top: 0
}

.ltr-c08__radio {
	width: initial
}

.ltr-c08__radio:last-of-type {
	margin-left: 2rem
}

.ltr-c08__select {
	border-radius: 0;
	background-color: #fff;
	-webkit-user-select: none;
	-moz-user-select: -moz-none;
	-ms-user-select: none;
	user-select: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background: transparent url("../../images/dropdown-arrow-black.png") no-repeat 94% 50%;
	background-size: 1rem 0.5rem;
	background-position: right 1.5rem center;
	color: #7f7f7f
}

.ltr-c08__select[disabled] {
	background-color: #ebebe4
}

.ltr-c08__select option:not(:first-child) {
	color: #000
}

.ltr-c08__select::-ms-expand {
	display: none
}

.ltr-c08__select--selected {
	color: #000
}

.ltr-c08__select--filter {
	display: block;
	max-width: 42.5rem;
	margin: 2.5rem 1.25rem 0
}

@media screen and (min-width: 768px) {
	.ltr-c08__select--filter {
		margin: 2.5rem auto 0 auto;
		max-width: 32.5rem
	}
}

.ltr-c08__selectgroup--card-exp {
	overflow: hidden;
	margin-bottom: 4rem
}

.ltr-c08__selectgroup-select {
	display: inline-block;
	width: 33.8%;
	margin-left: 2.89%
}

@media screen and (max-width: 768px) {
	.ltr-c08__selectgroup-select {
		width: 34%
	}
}

.ltr-c08__selectgroup-select:first-of-type {
	margin-left: 0
}

.ltr-c08__selectgroup-select--card-exp {
	width: 48.55%
}

.ltr-c08__selectgroup-select--card-exp:first-child {
	float: left
}

.ltr-c08__selectgroup-select--card-exp:last-child {
	float: right
}

.ltr-c08__selectgroup-select--smaller {
	width: 23.5%
}

.ltr-c08__accordion {
	width: 100%;
	max-width: 68rem;
	margin: 3.2rem auto 2rem auto
}

.ltr-c08__accordion-item {
	border-top: 0.2rem solid #000000
}

.ltr-c08__accordion-item:last-child {
	border-bottom: 0.2rem solid #000000
}

.ltr-c08__accordion-item-title {
	text-transform: uppercase;
	padding: 2rem 2rem 1.6rem 2rem;
	max-width: 80%;
	margin-top: 4px
}

@media screen and (min-width: 320px) {
	.ltr-c08__accordion-item-title {
		font-size: 2.6rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.ltr-c08__accordion-item-title {
		margin: 0;
		padding: 2rem 2.3rem
	}
}

.ltr-c08__accordion-item-expand {
	height: 2.2rem;
	width: 2.2rem;
	border: none;
	cursor: pointer;
	background: url("../../images/accordion-expand.png") no-repeat;
	background-size: 100%;
	float: right;
	margin-top: 2rem;
	margin-right: 3rem
}

.ltr-c08__accordion-item-expand--expanded {
	background: url("../../images/accordion-close.png") no-repeat;
	background-size: 100%
}

.ltr-c08__accordion-item-content {
	background-color: #000000;
	color: #ffffff;
	padding: 3rem;
	display: none;
	text-transform: none
}

.ltr-c08__accordion-item-content-divider {
	padding: 1rem 0
}

.ltr-c08__accordion-item-answer {
	margin-top: 2rem;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c08__accordion-item-answer {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c09 {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: #ffffff;
	padding-bottom: 5rem;
	z-index: 10000
}

.ltr-c09__content {
	max-width: 67.5rem;
	margin: auto;
	background: url("../../images/learn-to-ride/c09-bg.jpg") -2rem 6rem;
	background-size: 136%
}

.ltr-c09__header {
	background-color: #000000;
	padding: 2.2rem 2.2rem 1.4rem 2.2rem;
	position: relative
}

.ltr-c09__header-title {
	text-transform: uppercase;
	color: #ffffff;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.ltr-c09__header-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.ltr-c09__header-close {
	color: #ffffff;
	padding-top: 0.4rem;
	padding-right: 3.2rem;
	float: right;
	position: relative;
	text-transform: uppercase
}

@media screen and (min-width: 320px) {
	.ltr-c09__header-close {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.ltr-c09__header-close:after {
	content: "";
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	background: url("../../images/close-icon.png");
	background-size: 100%
}

.ltr-c09__body {
	padding: 5rem 1.5rem;
	text-transform: none
}

.ltr-c09__body-title {
	text-transform: uppercase;
	margin-bottom: 1.9rem
}

@media screen and (min-width: 320px) {
	.ltr-c09__body-title {
		font-size: 3rem;
		line-height: 3.3rem
	}
}

@media screen and (min-width: 768px) {
	.ltr-c09__body-title {
		font-size: 4.55rem;
		line-height: 5.2rem
	}
}

.ltr-c09__ctas {
	padding: 0 1.5rem;
	margin: 0 auto 1.5rem auto;
	border-top: 2px solid #000000;
	border-bottom: 2px solid #000000;
	background-color: #ffffff;
	width: 100%;
	max-width: 67.5rem;
	display: -ms-flexbox;
	-ms-flex-align: center;
	-ms-flex-pack: distribute;
	display: -webkit-flex;
	-webkit-align-items: center;
	-webkit-justify-content: space-around;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1.5rem 0
}

@media screen and (min-width: 768px) {
	.ltr-c09__ctas {
		position: relative
	}
}

.ltr-c09__ctas--multiple .cta {
	min-width: 38%;
	border: 2px solid #000000
}

.ltr-c09__ctas--multiple .cta-btn-primary {
	border: none
}

.ltr-c09 .cta {
	display: inline-block;
	min-width: 38%
}

.ltr-c09 .cta .cta-label {
	min-width: 0
}

.ltr-c09__input-checkbox {
	position: absolute;
	opacity: 0
}

.ltr-c09__input-checkbox:checked+.ltr-c09__checkbox-custom {
	background: url("../../images/checkbox-check.png") no-repeat;
	background-size: 65%;
	background-position: 0.35rem 0.35rem
}

.ltr-c09__input-checkbox-container {
	width: 38%
}

.ltr-c09__input-checkbox-label {
	text-transform: none;
	vertical-align: middle;
	padding-top: 0.8rem;
	padding-left: 1rem;
	display: inline-block;
	max-width: 10rem
}

@media screen and (min-width: 320px) {
	.ltr-c09__input-checkbox-label {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.ltr-c09__input-checkbox-label:after {
	content: "";
	clear: both
}

.ltr-c09__checkbox-custom {
	padding: 1rem;
	border: 0.1rem solid #000000;
	text-indent: -9999px;
	font-size: 0
}

.ltr-c09__checkbox-custom-focus {
	outline: 0.5rem solid #4D90FE
}

.media .play-button {
	z-index: 10
}

.media__title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	width: 80%;
	margin: 0 auto;
	float: none
}

@media screen and (min-width: 320px) {
	.media__title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.media__title {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.media__description {
	font-family: "NotoSans-Regular",sans;
	margin: 0 auto 2rem auto;
	float: none
}

@media screen and (min-width: 320px) {
	.media__description {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.media__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.media__item {
	position: relative;
	margin: 0 0.4rem 0 1.4rem
}

.media__item--zoom {
	display: none
}

.media__item.slick-current .media--zoom {
	background: url("../../images/bike-detail/product-carousel/zoom.png");
	background-size: 100%;
	height: 2.5rem;
	width: 2.5rem;
	position: absolute;
	top: 1.5rem;
	right: 2.5rem;
	cursor: pointer;
	z-index: 9;
	display: block
}

.media__item--image {
	width: 100%;
	position: relative;
	left: -1.5rem
}

.media__arrow {
	display: none
}

.media__overlay {
	opacity: 0;
	visibility: hidden;
	background-color: #000000;
	height: 100%;
	width: 100%;
	text-align: left;
	max-width: 1440px;
	position: fixed;
	top: 0;
	z-index: 10000;
	-webkit-transition: opacity ease-out 0.25s;
	-moz-transition: opacity ease-out 0.25s;
	-ms-transition: opacity ease-out 0.25s;
	-o-transition: opacity ease-out 0.25s;
	transition: opacity ease-out 0.25s
}

.media__overlay-header {
	background-color: #000000;
	color: #ffffff;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 5.5rem
}

.media__overlay-share-btn {
	position: relative;
	font-family: "NotoSans-Bold",sans;
	padding: 1.1rem 1.5rem;
	width: 6rem;
	height: 6rem;
	background-color: #202020;
	float: left
}

.media__overlay-share-btn-icon {
	max-width: 2rem;
	margin-bottom: 0.9rem;
	position: absolute;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%)
}

.media__overlay-share-btn-icon--white {
	display: block
}

.media__overlay-share-btn-icon--black {
	display: none
}

.media__overlay-share-btn-copy {
	text-transform: uppercase;
	margin: 2.8rem 0 0 0
}

@media screen and (min-width: 320px) {
	.media__overlay-share-btn-copy {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.media__overlay-title {
	float: left;
	text-transform: uppercase;
	padding-top: 2.4rem;
	margin-left: 2rem;
	max-width: 50%
}

@media screen and (min-width: 320px) {
	.media__overlay-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.media__overlay-title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.media__overlay-close {
	font-size: 1.15rem;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 4.45rem;
	position: absolute;
	right: 2rem;
	top: 24px
}

.media__overlay-close:after {
	content: '';
	width: 2.9rem;
	height: 2.9rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/close-icon.png") no-repeat;
	background-size: 100%
}

.media__overlay-image-wrapper {
	overflow: auto
}

.media__overlay--image {
	width: 100%;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.media__overlay-body {
	padding: 10rem 5rem 0 5rem
}

.media__overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.media__overlay-heading {
		font-size: 2.4rem;
		line-height: 2.8rem
	}
}

.media__overlay-share-ctas {
	margin: 2.8rem 0
}

.media__overlay-share-cta {
	margin-right: 3.2rem
}

.media__overlay-share-cta--facebook {
	width: 1.4rem
}

.media__overlay-share-cta--twitter {
	width: 3.7rem
}

@media screen and (min-width: 320px) {
	.media__overlay-copy {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.media__overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.media__overlay-copy--small {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.media__overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.media__overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.media__overlay-textbox-value {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.media__overlay-footer {
	background-color: rgba(0,0,0,0.7);
	color: #ffffff;
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	padding: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__overlay-footer-pageNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.media__overlay--active {
	opacity: 1;
	visibility: visible
}

.media__overlay--share {
	background: url("../../images/bike-detail/product-carousel/paint-bg.jpg") no-repeat;
	background-size: cover
}

.media__slideNum {
	font-family: "NotoSans-Regular",sans;
	text-align: center;
	margin: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__slideNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.media__slideNum--number {
	font-family: "NotoSans-Bold",sans
}

.media__paint-selector {
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
	width: 80%;
	margin: 0 auto
}

@media screen and (max-width: 480px) {
	.media__paint-selector {
		margin: 0 0 0 7%
	}
}

.media__paint-selector--title {
	display: block;
	margin: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__paint-selector--title {
		font-size: 1.6rem;
		line-height: 2rem
	}
}

.media__paint-selector--option {
	width: 4.5rem;
	margin-right: 1.5rem;
	cursor: pointer
}

.media__paint-selector--option:last-child {
	margin-right: 0
}

.media__paint-selector--option-hidden {
	display: none
}

.media__paint-selector--overflow {
	border: 2px solid #000;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	vertical-align: middle;
	font-family: "NotoSans-Bold",sans;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	-ms-border-radius: 100px;
	-o-border-radius: 100px;
	border-radius: 100px;
	cursor: pointer
}

@media screen and (max-width: 480px) {
	.media__paint-selector--overflow {
		position: absolute;
		right: 8%
	}
}

@media screen and (min-width: 768px) {
	.media {
		background: url("../../images/bike-detail/product-carousel/paint-bg-lg.jpg");
		background-size: contain
	}

	.media__title {
		letter-spacing: 0.3rem;
		margin-bottom: 0.5rem
	}

	.media__description {
		letter-spacing: 0.08rem;
		width: 44%
	}

	.media__item {
		width: 80%;
		left: 0
	}

	.media__item:after {
		content: '';
		position: absolute;
		top: 0;
		left: -1.5rem;
		padding: 0 1.4rem;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.4);
		-webkit-transition: opacity 0.4s ease-in-out;
		-moz-transition: opacity 0.4s ease-in-out;
		-ms-transition: opacity 0.4s ease-in-out;
		-o-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out
	}

	.media__item.slick-current:after {
		content: '';
		opacity: 0
	}

	.media__arrow {
		display: block;
		width: 2.5rem;
		height: 4.7rem;
		position: absolute;
		background: url("../../images/slide-arrow-right-white.png");
		background-size: 100%;
		z-index: 9;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		cursor: pointer;
		display: none
	}

	.media__arrow--next {
		right: 2rem
	}

	.media__arrow--prev {
		left: 2rem;
		-webkit-transform: translateY(-50%) rotate(180deg);
		-moz-transform: translateY(-50%) rotate(180deg);
		-ms-transform: translateY(-50%) rotate(180deg);
		-o-transform: translateY(-50%) rotate(180deg);
		transform: translateY(-50%) rotate(180deg)
	}

	.media__paint-selector {
		max-width: none
	}

	.media__paint-selector--option {
		width: 6rem
	}

	.media__overlay-title {
		max-width: 80%
	}

	.media__overlay-share-btn {
		margin-bottom: 1.5px
	}

	.media__overlay-share-btn:hover,.media__overlay-share-btn--active {
		background-color: #f60;
		color: #000000
	}

	.media__overlay-share-btn:hover .media-share-btn-copy,.media__overlay-share-btn--active .media-share-btn-copy {
		color: #000000
	}

	.media__overlay-share-btn:hover .media-share-btn-icon--white,.media__overlay-share-btn--active .media-share-btn-icon--white {
		display: none
	}

	.media__overlay-share-btn:hover .media-share-btn-icon--black,.media__overlay-share-btn--active .media-share-btn-icon--black {
		display: block
	}

	.media__overlay-close {
		padding-right: 5.05rem
	}

	.media__overlay--share {
		position: fixed;
		top: 6rem;
		max-width: 42.5rem;
		height: auto
	}

	.media__overlay--share .media-header {
		background-color: transparent
	}

	.media__overlay--share .media-body {
		padding: 0 6rem 7rem 6rem
	}

	.media__overlay--share .media-close {
		text-indent: -999rem
	}

	.media__overlay--share .media-close:after {
		background: url("../../images/close-icon-black.png") no-repeat;
		background-size: 100%
	}
}

.media .play-button {
	z-index: 10
}

.media__title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	width: 80%;
	margin: 0 auto;
	float: none
}

@media screen and (min-width: 320px) {
	.media__title {
		font-size: 3rem;
		line-height: 3.6rem
	}
}

@media screen and (min-width: 768px) {
	.media__title {
		font-size: 4.4rem;
		line-height: 5.2rem
	}
}

.media__description {
	font-family: "NotoSans-Regular",sans;
	margin: 0 auto 2rem auto;
	float: none
}

@media screen and (min-width: 320px) {
	.media__description {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.media__description {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.media__item {
	position: relative;
	margin: 0 0.4rem 0 1.4rem
}

.media__item--zoom {
	display: none
}

.media__item.slick-current .media__item--zoom {
	background: url("../../images/bike-detail/product-carousel/zoom.png");
	background-size: 100%;
	height: 2.5rem;
	width: 2.5rem;
	position: absolute;
	top: 1.5rem;
	right: 2.5rem;
	cursor: pointer;
	z-index: 9;
	display: block
}

.media__item--image {
	width: 100%;
	position: relative;
	left: -1.5rem
}

.media__arrow {
	display: none
}

.media__overlay {
	opacity: 0;
	visibility: hidden;
	background-color: #000000;
	height: 100%;
	width: 100%;
	text-align: left;
	max-width: 1440px;
	position: fixed;
	top: 0;
	z-index: 10000;
	-webkit-transition: opacity ease-out 0.25s;
	-moz-transition: opacity ease-out 0.25s;
	-ms-transition: opacity ease-out 0.25s;
	-o-transition: opacity ease-out 0.25s;
	transition: opacity ease-out 0.25s
}

.media__overlay-header {
	background-color: #000000;
	color: #ffffff;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 5.5rem
}

.media__overlay-share-btn {
	position: relative;
	font-family: "NotoSans-Bold",sans;
	padding: 1.1rem 1.5rem;
	width: 6rem;
	height: 6rem;
	background-color: #202020;
	float: left
}

.media__overlay-share-btn-icon {
	max-width: 2rem;
	margin-bottom: 0.9rem;
	position: absolute;
	left: 50%;
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	transform: translateX(-50%)
}

.media__overlay-share-btn-icon--white {
	display: block
}

.media__overlay-share-btn-icon--black {
	display: none
}

.media__overlay-share-btn-copy {
	text-transform: uppercase;
	margin: 2.8rem 0 0 0
}

@media screen and (min-width: 320px) {
	.media__overlay-share-btn-copy {
		font-size: 0.9rem;
		line-height: 1.2rem
	}
}

.media__overlay-title {
	float: left;
	text-transform: uppercase;
	padding-top: 2.4rem;
	margin-left: 2rem;
	max-width: 50%
}

@media screen and (min-width: 320px) {
	.media__overlay-title {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.media__overlay-title {
		font-size: 2.4rem;
		line-height: 2.4rem
	}
}

.media__overlay-close {
	font-size: 1.15rem;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 4.45rem;
	position: absolute;
	right: 2rem;
	top: 24px
}

.media__overlay-close:after {
	content: '';
	width: 2.9rem;
	height: 2.9rem;
	position: absolute;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	background: url("../../images/close-icon.png") no-repeat;
	background-size: 100%
}

.media__overlay-image-wrapper {
	overflow: auto
}

.media__overlay--image {
	width: 100%;
	position: absolute;
	left: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.media__overlay-body {
	padding: 10rem 5rem 0 5rem
}

.media__overlay-heading {
	text-transform: uppercase;
	margin-bottom: 1rem
}

@media screen and (min-width: 320px) {
	.media__overlay-heading {
		font-size: 2.4rem;
		line-height: 2.8rem
	}
}

.media__overlay-share-ctas {
	margin: 2.8rem 0
}

.media__overlay-share-cta {
	margin-right: 3.2rem
}

.media__overlay-share-cta--facebook {
	width: 1.4rem
}

.media__overlay-share-cta--twitter {
	width: 3.7rem
}

@media screen and (min-width: 320px) {
	.media__overlay-copy {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.media__overlay-copy--small {
	margin-bottom: 0.4rem
}

@media screen and (min-width: 320px) {
	.media__overlay-copy--small {
		font-size: 1.2rem;
		line-height: 1.4rem
	}
}

.media__overlay-textbox {
	width: 100%;
	border: 0.2rem solid #000000;
	text-transform: uppercase;
	padding: 1rem;
	overflow: auto;
	white-space: nowrap
}

.media__overlay-textbox-value {
	margin: 0
}

@media screen and (min-width: 320px) {
	.media__overlay-textbox-value {
		font-size: 1.4rem;
		line-height: 1.8rem
	}
}

.media__overlay-footer {
	background-color: rgba(0,0,0,0.7);
	color: #ffffff;
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	padding: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__overlay-footer-pageNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.media__overlay--active {
	opacity: 1;
	visibility: visible
}

.media__overlay--share {
	background: url("../../images/bike-detail/product-carousel/paint-bg.jpg") no-repeat;
	background-size: cover
}

.media__slideNum {
	font-family: "NotoSans-Regular",sans;
	text-align: center;
	margin: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__slideNum {
		font-size: 1.2rem;
		line-height: 1.6rem
	}
}

.media__slideNum--number {
	font-family: "NotoSans-Bold",sans
}

.media__paint-selector {
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
	width: 80%;
	margin: 0 auto
}

@media screen and (max-width: 480px) {
	.media__paint-selector {
		margin: 0 0 0 7%
	}
}

.media__paint-selector--title {
	margin: 1rem 0
}

@media screen and (min-width: 320px) {
	.media__paint-selector--title {
		font-size: 1.6rem;
		line-height: 2rem
	}
}

.media__paint-selector--option {
	width: 4.5rem;
	margin-right: 1.5rem;
	cursor: pointer
}

.media__paint-selector--option:last-child {
	margin-right: 0
}

.media__paint-selector--option-hidden {
	display: none
}

.media__paint-selector--overflow {
	border: 2px solid #000;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	vertical-align: middle;
	font-family: "NotoSans-Bold",sans;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	-ms-border-radius: 100px;
	-o-border-radius: 100px;
	border-radius: 100px;
	cursor: pointer
}

@media screen and (max-width: 480px) {
	.media__paint-selector--overflow {
		position: absolute;
		right: 8%
	}
}

@media screen and (min-width: 768px) {
	.media {
		background: url("../../images/bike-detail/product-carousel/paint-bg-lg.jpg");
		background-size: contain
	}

	.media__title {
		letter-spacing: 0.3rem;
		margin-bottom: 0.5rem
	}

	.media__description {
		letter-spacing: 0.08rem;
		width: 44%
	}

	.media__item {
		width: 80%;
		left: 0
	}

	.media__item:after {
		content: '';
		position: absolute;
		top: 0;
		left: -1.5rem;
		padding: 0 1.4rem;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.4);
		-webkit-transition: opacity 0.4s ease-in-out;
		-moz-transition: opacity 0.4s ease-in-out;
		-ms-transition: opacity 0.4s ease-in-out;
		-o-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out
	}

	.media__item.slick-current:after {
		content: '';
		opacity: 0
	}

	.media__arrow {
		display: block;
		width: 2.5rem;
		height: 4.7rem;
		position: absolute;
		background: url("../../images/slide-arrow-right-white.png");
		background-size: 100%;
		z-index: 9;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
		cursor: pointer;
		display: none
	}

	.media__arrow--next {
		right: 2rem
	}

	.media__arrow--prev {
		left: 2rem;
		-webkit-transform: translateY(-50%) rotate(180deg);
		-moz-transform: translateY(-50%) rotate(180deg);
		-ms-transform: translateY(-50%) rotate(180deg);
		-o-transform: translateY(-50%) rotate(180deg);
		transform: translateY(-50%) rotate(180deg)
	}

	.media__paint-selector {
		max-width: none
	}

	.media__paint-selector--option {
		width: 6rem
	}

	.media__overlay-title {
		max-width: 80%
	}

	.media__overlay-share-btn {
		margin-bottom: 1.5px
	}

	.media__overlay-share-btn:hover,.media__overlay-share-btn--active {
		background-color: #f60;
		color: #000000
	}

	.media__overlay-share-btn:hover .media__overlay-share-btn-copy,.media__overlay-share-btn--active .media__overlay-share-btn-copy {
		color: #000000
	}

	.media__overlay-share-btn:hover .media__overlay-share-btn-icon--white,.media__overlay-share-btn--active .media__overlay-share-btn-icon--white {
		display: none
	}

	.media__overlay-share-btn:hover .media__overlay-share-btn-icon--black,.media__overlay-share-btn--active .media__overlay-share-btn-icon--black {
		display: block
	}

	.media__overlay-close {
		padding-right: 5.05rem
	}

	.media__overlay--share {
		position: fixed;
		top: 6rem;
		max-width: 42.5rem;
		height: auto
	}

	.media__overlay--share .media__overlay-header {
		background-color: transparent
	}

	.media__overlay--share .media__overlay-body {
		padding: 0 6rem 7rem 6rem
	}

	.media__overlay--share .media__overlay-close {
		text-indent: -999rem
	}

	.media__overlay--share .media__overlay-close:after {
		background: url("../../images/close-icon-black.png") no-repeat;
		background-size: 100%
	}
}

.anniversary-carousel {
	overflow-x: hidden;
	padding-top: 8.2rem;
	padding-bottom: 8.2rem
}

.anniversary-carousel .ltr-c06__headline {
	margin-bottom: 5rem
}

.event-banner {
	position: relative;
	width: 100%;
	height: 0;
	text-align: center;
	font-size: 1.6rem;
	line-height: 1.2;
	color: #fff;
	padding-bottom: 162%;
	padding-bottom: 162vmin;
	background-size: cover;
	background-position-x: 93%
}

@media only screen and (min-width: 768px) {
	.event-banner {
		padding-bottom: 675px
	}
}

.event-banner__slogan {
	font-size: 3rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	padding-top: 40%
}

@media only screen and (min-width: 768px) {
	.event-banner__slogan {
		padding-top: 240px
	}
}

.event-banner__description {
	display: block;
	position: absolute;
	bottom: 128px;
	margin: 0;
	width: 100%;
	font-size: 1.6rem;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	letter-spacing: 0.1rem
}

.event-banner__cta {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	font-size: 1.2rem;
	bottom: 30px;
	font-family: "NotoSans-Regular",sans
}

.sitemap {
	background-repeat: no-repeat;
	background-color: #fff;
	padding-bottom: 6rem;
	background-size: cover
}

.sitemap:before {
	content: '';
	background-image: url(../../images/site-map/sitemap-bg-top.jpg);
	width: 100vw;
	height: 21.6vh;
	position: absolute;
	background-size: cover
}

.sitemap:after {
	content: '';
	background-image: url(../../images/site-map/sitemap-bg-bottom.jpg);
	width: 100vw;
	height: 9vh;
	position: absolute;
	background-size: cover
}

.sitemap__container--header {
	position: relative
}

.sitemap__container--wrap-btn-black {
	padding: 2.5rem 0 2.5rem 3rem
}

.sitemap__container--cta-black {
	color: #000
}

.sitemap__container--cta-black:hover {
	color: #000
}

.sitemap__container--title {
	padding-left: 3rem;
	position: relative;
	text-transform: uppercase;
	font-size: 4rem;
	line-height: 5rem
}

.sitemap__container .accordion {
	padding-top: 4rem;
	padding-bottom: 0
}

.sitemap__container .accordion-item {
	border-top: 0.1rem solid #000
}

.sitemap__container .accordion-item .accordion-item-title {
	padding-left: 1.5rem;
	font-size: 2.4rem;
	line-height: 3.2rem
}

.sitemap__container .accordion-item .accordion-item-title a {
	text-decoration: none;
	color: #000
}

.sitemap__container .accordion-item .cta-icon__H-D-Accordion {
	position: absolute;
	right: 2.5rem;
	top: 50%;
	transform: translateY(-50%);
	outline: 0
}

.sitemap__container .accordion-item:last-child {
	border-bottom: 0.1rem solid #000
}

.sitemap__container .accordion-item ul {
	padding-left: 0;
	text-transform: uppercase;
	list-style: none;
	margin-bottom: 0
}

.sitemap__container .accordion-item ul li {
	padding-bottom: 1.8rem
}

.sitemap__container .accordion-item ul li:first-child {
	padding-top: 2.5rem
}

.sitemap__container .accordion-item ul li:last-child {
	padding-bottom: 2.5rem
}

.sitemap__container .accordion-item ul li a {
	color: #000;
	text-decoration: none
}

.sitemap__container .accordion-item ul li ul {
	padding-left: 1.5rem
}

.sitemap__container .accordion-item .accordion-item-content {
	background-color: #ededed;
	padding: 0 0 0 1.5rem
}

@media screen and (min-width: 768px) {
	.sitemap__container {
		width: 88.75%;
		margin: 0 auto;
		padding: 0 1.493055%
	}

	.sitemap__container--title {
		padding-left: 2.986111%
	}

	.sitemap__container .accordion {
		padding-top: 7rem
	}

	.sitemap__container .accordion .accordion-item {
		padding-left: 0;
		margin: 0 3.481781% 6rem 3.481781%;
		width: 26.315789%;
		float: left;
		word-wrap: break-word
	}

	.sitemap__container .accordion .accordion-item:last-child {
		border-bottom: 0
	}

	.sitemap__container .accordion .accordion-item .accordion-item-content {
		background-color: #fff;
		padding: 0
	}

	.sitemap__container .accordion .accordion-item .accordion-item-content ul li {
		padding-bottom: 1.5rem
	}

	.sitemap__container .accordion .accordion-item .accordion-item-content ul li:first-child {
		padding-top: 0
	}

	.sitemap__container .accordion .accordion-item .accordion-item-title {
		padding: 4rem 0
	}

	.sitemap__container .accordion .accordion-item .cta-icon__H-D-Accordion {
		visibility: hidden
	}

	.sitemap__container--wrap-btn-black {
		padding: 5.5rem 0 2.5rem 2.986111%
	}
}

@media screen and (min-width: 992px) {
	.sitemap__container--title {
		font-size: 5.2rem;
		line-height: 6rem
	}

	.sitemap__container .accordion-item .accordion-item-title {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 768px) {
	.sitemap {
		background-image: url(../../images/site-map/background-desktop.jpg)
	}

	.sitemap:before {
		content: '';
		background-image: inherit;
		width: inherit;
		height: inherit;
		position: inherit;
		background-size: inherit
	}

	.sitemap:after {
		content: '';
		background-image: inherit;
		width: inherit;
		height: inherit;
		position: inherit;
		background-size: inherit
	}
}

.safety-recall {
	padding: 0;
	background: #fff
}

.safety-recall__description,.safety-recall-results {
	padding: 1.5rem
}

.safety-recall-form {
	padding: 2.8rem 1.5rem 2rem
}

.safety-recall--has-login .safety-recall-form {
	padding: 1.5rem 1.5rem 2rem
}

.hidden+.safety-recall-content .bike-recall {
	margin-top: 0
}

.safety-recall__title,.safety-recall__vin-id {
	text-transform: uppercase
}

.safety-recall__title {
	margin-top: 3rem
}

.safety-recall__vin-id {
	font-size: 2.6rem
}

.safety-recall__description {
	line-height: 1.6;
	padding: 0 1.5rem 2rem
}

.safety-recall__more-info {
	margin-top: 2.5rem;
	margin-bottom: 4.3rem
}

.safety-recall__more-info .body-copy,.safety-recall__more-info .body-copy p,.safety-recall__more-info .body-copy ul,.safety-recall__more-info .body-copy ol {
	margin-top: 2.2rem;
	margin-bottom: 0
}

.safety-recall__more-info .body-copy:first-child,.safety-recall__more-info .body-copy p:first-child,.safety-recall__more-info .body-copy ul:first-child,.safety-recall__more-info .body-copy ol:first-child {
	margin-top: 0
}

.safety-recall__more-info .body-copy p,.safety-recall__more-info .body-copy ul,.safety-recall__more-info .body-copy ol {
	font-size: inherit;
	line-height: inherit
}

.safety-recall-content {
	background: url("../../images/learn-to-ride/texture-bg-small.jpg") top center no-repeat;
	background-size: 100%;
	background-position: top 10.5rem center
}

.safety-recall-results h1,.safety-recall-results h2,.safety-recall-results h3,.safety-recall-results h4,.safety-recall-results h5,.safety-recall-results h6,.safety-recall-results .h1,.safety-recall-results .h2,.safety-recall-results .h3,.safety-recall-results .h4,.safety-recall-results .h5,.safety-recall-results .h6 {
	display: block
}

.safety-recall .cta-icon__back {
	font-size: 1.5rem;
	margin-left: 1.5rem
}

.safety-recall .cta-icon__back .cta-icon {
	top: 0
}

.safety-recall .cta-icon__back .cta-icon:after {
	font-size: 1.6rem
}

.safety-recall .cta-btn .cta-icon {
	top: 0.2rem;
	height: calc(100% - 0.4rem)
}

.safety-recall .safety-recall__more-info .body-copy .cta-btn {
	line-height: 1.42857
}

.safety-recall .bike-recall .cta-btn,.safety-recall__more-info .cta-btn {
	width: 100%
}

.safety-recall .cta-icon__error {
	position: absolute;
	color: #ad181f;
	cursor: default;
	font-size: 1.2rem;
	font-style: normal
}

.safety-recall .cta-icon__error:before {
	display: none
}

.safety-recall .cta-icon__error:after {
	position: static
}

@media screen and (min-width: 768px) {
	.safety-recall .bike-recall .cta-btn,.safety-recall__more-info .cta-btn {
		width: auto
	}

	.safety-recall .bike-recall .cta-btn .cta-label,.safety-recall__more-info .cta-btn .cta-label {
		width: auto;
		min-width: 25rem
	}
}

.safety-recall .bike-recall {
	position: relative
}

.safety-recall .bike-recall__title {
	display: block;
	margin-bottom: 0.5rem;
	text-transform: uppercase
}

.safety-recall .bike-recall__header {
	margin-top: 1rem;
	font-size: 1.6rem;
	line-height: 1.6
}

.safety-recall .bike-recall__header-wrapper {
	margin-bottom: 3.2rem
}

.safety-recall .bike-recall__header:first-child {
	margin-top: 0.7rem
}

.safety-recall .bike-recall__header .link {
	font-size: inherit;
	line-height: inherit
}

.safety-recall .bike-recall__description {
	line-height: 1.6
}

.safety-recall .bike-recall--signed-in {
	display: none
}

.safety-recall .bike-recall .login--checking {
	pointer-events: none;
	opacity: 0.2
}

.safety-recall .bike-recall--loading:before,.safety-recall .bike-recall--loading:after {
	content: '';
	position: absolute;
	z-index: 1;
	cursor: wait
}

.safety-recall .bike-recall--loading:before {
	top: -.75rem;
	right: -.75rem;
	bottom: -.75rem;
	left: -.75rem;
	background: transparent
}

.safety-recall .bike-recall--loading:after {
	width: 4.8rem;
	height: 4.8rem;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	background: #fff url("../../images/ajax-loader.gif") center center no-repeat;
	border: 1px solid #a3a3a3;
	border-radius: 24px
}

.safety-recall .bike-recall .form-row {
	margin-top: 1.8rem
}

.safety-recall .bike-recall .form-row:first-child {
	margin-top: 0
}

.safety-recall .bike-recall .form-item--divider {
	position: relative;
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	font-size: 1.6rem;
	line-height: 2.4rem;
	letter-spacing: 0.05rem;
	text-align: center;
	text-transform: uppercase
}

.safety-recall .bike-recall .form-item--divider:before,.safety-recall .bike-recall .form-item--divider:after {
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	content: "";
	height: 0.1rem;
	width: 43.4%;
	position: absolute;
	top: 50%;
	background-color: #000
}

.safety-recall .bike-recall .form-item--divider:before {
	left: 0
}

.safety-recall .bike-recall .form-item--divider:after {
	right: 0
}

.safety-recall .bike-recall .form-item--error .form-element--input,.safety-recall .bike-recall .form-item--error .form-element--select-label {
	border-color: #ad181f
}

.safety-recall .bike-recall .form-item .link {
	margin-top: 1rem
}

.safety-recall .bike-recall .form-element {
	width: 100%;
	height: auto;
	padding: 1.3rem 1.6rem;
	font-size: 1.5rem;
	line-height: 2rem;
	background-color: #fff;
	border: 0.2rem solid #000;
	border-radius: 0;
	color: #000;
	outline: none
}

.safety-recall .bike-recall .form-element__wrapper {
	position: relative
}

.safety-recall .bike-recall .form-element--input:-moz-placeholder,.safety-recall .bike-recall .form-element--input::-moz-placeholder {
	color: #a3a3a3;
	opacity: 1
}

.safety-recall .bike-recall .form-element--input:-ms-input-placeholder {
	color: #a3a3a3
}

.safety-recall .bike-recall .form-element--input::-webkit-input-placeholder {
	color: #a3a3a3
}

.safety-recall .bike-recall .form-element--input:focus {
	border-color: #000;
	box-shadow: none
}

.safety-recall .bike-recall .form-element--input:focus:-moz-placeholder,.safety-recall .bike-recall .form-element--input:focus::-moz-placeholder {
	color: transparent;
	opacity: 1
}

.safety-recall .bike-recall .form-element--input:focus:-ms-input-placeholder {
	color: transparent
}

.safety-recall .bike-recall .form-element--input:focus::-webkit-input-placeholder {
	color: transparent
}

.safety-recall .bike-recall .form-element--select {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 1.3rem;
	opacity: 0;
	z-index: 1
}

.safety-recall .bike-recall .form-element--select-label {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	padding: 1.3rem 3rem 1.3rem 1.6rem;
	background: transparent url("../../images/estimate-payment/icon-detail-arrow-down-black.png") no-repeat;
	background-size: 0.9rem 0.5rem;
	background-position: right 1.5rem center;
	cursor: pointer
}

.safety-recall .bike-recall .form-element--error-message {
	position: relative;
	margin: 0;
	padding-top: 0.1rem;
	padding-left: 3rem;
	font-size: 1.1rem;
	line-height: 1.6;
	text-align: left;
	letter-spacing: 0.06rem;
	color: #ad181f
}

.safety-recall .bike-recall .form-element--error-message .cta-icon__error {
	width: 3rem;
	height: 100%;
	left: 1rem;
	top: 0;
	font-size: 1.1rem
}

@media screen and (min-width: 768px) {
	.safety-recall .bike-recall .form-item,.safety-recall .bike-recall__header {
		text-align: center
	}

	.safety-recall .bike-recall .form-item--divider,.safety-recall .bike-recall .bike-recall__bike-select,.safety-recall .bike-recall .form-element__wrapper {
		width: 32rem;
		margin: 0 auto
	}

	.safety-recall .bike-recall .bike-recall__bike-select {
		text-align: left
	}

	.safety-recall .bike-recall__header-wrapper {
		margin-bottom: 2.4rem
	}

	.safety-recall--has-login .bike-recall__header-wrapper {
		margin-bottom: 2.3rem
	}

	.safety-recall .bike-recall .form-row {
		margin-top: 1.5rem
	}
}

.safety-recall-results {
	padding: 5.4rem 0 0
}

.safety-recall-results .ltr-article {
	margin-top: 3.3rem;
	margin-bottom: 7.1rem
}

.safety-recall-results .ltr-article__headline {
	margin: 0;
	padding: 1.7rem 0 0;
	line-height: 1.26
}

.ios .safety-recall-results .ltr-article__headline,.android .safety-recall-results .ltr-article__headline {
	padding-top: 2.2rem
}

.safety-recall-results .ltr-article__description {
	margin-top: 2.7rem;
	font-size: 1.6rem
}

.safety-recall-results .ltr-article .ltr-article__description {
	margin-bottom: 0
}

.safety-recall-results .ltr-article .ltr-article__description p,.safety-recall-results .ltr-article .ltr-article__description ul,.safety-recall-results .ltr-article .ltr-article__description ol {
	font-size: inherit;
	line-height: inherit;
	margin-bottom: 2.2rem
}

.safety-recall-results .ltr-article .ltr-article__description p:last-child,.safety-recall-results .ltr-article .ltr-article__description ul:last-child,.safety-recall-results .ltr-article .ltr-article__description ol:last-child {
	margin-bottom: 0
}

.safety-recall-results .accordion__no-results-label {
	display: none;
	margin-top: 1rem;
	padding: 0 1.5rem
}

.safety-recall-results .accordion--no-results .accordion__no-results-label {
	display: block
}

.safety-recall-results .accordion--no-results .ltr-c04__accordion {
	display: none
}

@media screen and (min-width: 768px) {
	.safety-recall-results {
		margin: 0 auto;
		padding: 5.4rem 0 0;
		max-width: 70.4rem
	}

	.safety-recall-results .ltr-article {
		width: 70%;
		padding: 0;
		margin: 4.6rem auto 6.5rem
	}

	.safety-recall-results .ltr-article__headline {
		margin: 0;
		padding: 1.7rem 0 0;
		font-size: 4.5rem;
		line-height: 1.2
	}

	.safety-recall-results .ltr-article__description {
		margin-top: 3.3rem;
		font-size: 1.7rem
	}

	.safety-recall-results .ltr-article .ltr-article__description {
		margin-bottom: 0
	}

	.safety-recall-results .ltr-article .ltr-article__description p,.safety-recall-results .ltr-article .ltr-article__description ul,.safety-recall-results .ltr-article .ltr-article__description ol {
		font-size: inherit;
		line-height: inherit;
		margin-bottom: .7rem
	}

	.safety-recall-results .ltr-article .ltr-article__description p:last-child,.safety-recall-results .ltr-article .ltr-article__description ul:last-child,.safety-recall-results .ltr-article .ltr-article__description ol:last-child {
		margin-bottom: 0
	}

	.safety-recall-results .accordion--no-results .accordion__no-results-label {
		margin-bottom: 3.2rem
	}
}

.safety-recall .ltr-c01 .ltr-article {
	padding: 5.2rem 1.5rem 1.9rem
}

.safety-recall .ltr-c01 .ltr-article__headline:last-child {
	margin-bottom: 0
}

.safety-recall .ltr-c04 {
	margin: 3.5rem 0 0;
	padding: 0
}

.safety-recall .ltr-c04__Intro,.safety-recall .ltr-c04__accordion {
	max-width: none
}

.safety-recall .ltr-c04__accordion {
	margin-top: 1.3rem;
	max-width: none
}

.safety-recall .ltr-c04__accordion-subheader {
	max-width: none;
	margin-top: 0;
	padding: 0 1.5rem;
	font-size: 2.5rem;
	letter-spacing: 0.06rem
}

.safety-recall .ltr-c04__accordion-item-expand {
	margin-right: 1.5rem
}

.safety-recall .ltr-c04__accordion-item-title {
	padding: 2.5rem 1.5rem 2.4rem;
	font-size: 1.4rem;
	line-height: 1.6
}

.safety-recall .ltr-c04__accordion-item-content {
	padding: 1.4rem 1.5rem 6.5rem;
	font-size: 1.5rem;
	line-height: 1.5;
	letter-spacing: -0.05rem
}

.safety-recall .ltr-c04__accordion-item-content>div,.safety-recall .ltr-c04__accordion-item-content>p {
	margin-top: 2.2rem
}

.safety-recall .ltr-c04__accordion-item-content>div:first-child,.safety-recall .ltr-c04__accordion-item-content>p:first-child {
	margin-top: 0
}

.safety-recall .ltr-c04__accordion-item .heading {
	font-family: "NotoSans-Bold",sans
}

.safety-recall .ltr-c04__accordion-item .text p,.safety-recall .ltr-c04__accordion-item .text ul,.safety-recall .ltr-c04__accordion-item .text ol {
	margin-top: 2.2rem;
	margin-bottom: 0
}

.safety-recall .ltr-c04__accordion-item .text p:first-child,.safety-recall .ltr-c04__accordion-item .text ul:first-child,.safety-recall .ltr-c04__accordion-item .text ol:first-child {
	margin-top: 0
}

.safety-recall .ltr-c04__accordion-item .text p,.safety-recall .ltr-c04__accordion-item .text ul,.safety-recall .ltr-c04__accordion-item .text ol {
	font-size: inherit;
	line-height: inherit
}

.safety-recall .ltr-c04__accordion-item .heading-date,.safety-recall .ltr-c04__accordion-item .heading-recall-label {
	display: block
}

.safety-recall .ltr-c04__accordion-item .heading-date .datefield {
	text-transform: uppercase
}

.safety-recall .ltr-c04__accordion-item .safety-risk {
	position: relative;
	margin-top: 3.8rem;
	padding: 2rem 2.2rem 2.3rem;
	background: #fff
}

.safety-recall .ltr-c04__accordion-item .safety-risk .heading {
	position: relative
}

.safety-recall .ltr-c04__accordion-item .safety-risk .heading,.safety-recall .ltr-c04__accordion-item .safety-risk .text {
	padding-left: 6rem
}

.safety-recall .ltr-c04__accordion-item .safety-risk .cta-icon__error {
	top: 1.7rem;
	font-size: 3.5rem
}

.safety-recall .ltr-c04__accordion-item .remedy {
	margin-top: 3.6rem
}

.safety-recall .ltr-c04__accordion-item .bike-title {
	display: block;
	font-weight: bold
}

.safety-recall .ltr-c04__accordion-item-clickable-area {
	padding: 0
}

@media screen and (min-width: 768px) {
	.safety-recall .ltr-c04 {
		margin: 2.3rem 0 0
	}

	.safety-recall .ltr-c04__accordion {
		padding: 0 1.5rem;
		margin: 2.3rem auto 0 auto
	}

	.safety-recall .ltr-c04__accordion-item-content {
		padding: 1.6rem 2rem 4.4rem;
		font-size: 1.4rem;
		line-height: 1.6;
		letter-spacing: 0
	}

	.safety-recall .ltr-c04__accordion-item-content .safety-risk {
		margin-top: 2.8rem;
		padding: 2rem 2.5rem 1.9rem
	}

	.safety-recall .ltr-c04__accordion-item-content .safety-risk .heading,.safety-recall .ltr-c04__accordion-item-content .safety-risk .text {
		padding-left: 6.5rem
	}

	.safety-recall .ltr-c04__accordion-item-content .safety-risk .cta-icon__error {
		top: 2.5rem;
		font-size: 3.5rem
	}

	.safety-recall .ltr-c04__accordion-item-content .remedy {
		margin-top: 2rem
	}

	.safety-recall .ltr-c04__accordion-item-title {
		padding: 1.8rem 3rem 2rem 0
	}

	.safety-recall .ltr-c04__accordion-item-expand {
		margin-right: 0
	}
}

.safety-recall .safety-recall-tips {
	padding: 0
}

.safety-recall .safety-recall-tips .ltr-c04 {
	margin: 5.6rem 0 0.2rem
}

.safety-recall .safety-recall-tips .ltr-c04__accordion-item-title {
	padding: 2.6rem 1.5rem 3rem;
	font-size: 1.4rem;
	letter-spacing: 0.02rem
}

.safety-recall .safety-recall-tips .ltr-c04__accordion-item-content {
	padding: 1.6rem 1.5rem 1.3rem
}

@media screen and (min-width: 768px) {
	.safety-recall .safety-recall-tips .ltr-c04 {
		margin: 4.8rem 0 5.6rem
	}

	.safety-recall .safety-recall-tips .ltr-c04__accordion-item-title {
		padding: 2rem 0 2rem
	}
}

@media screen and (min-width: 768px) {
	.safety-recall-form,.safety-recall__description {
		padding: 0;
		max-width: 52.4rem;
		margin: 0 auto
	}

	.safety-recall-content {
		padding: 4.4rem 0;
		background: url("../../images/learn-to-ride/texture-bg-large.jpg") top center no-repeat;
		background-size: 100%
	}

	.safety-recall-form {
		padding: 2.4rem 0 5.3rem
	}

	.safety-recall--has-login .safety-recall-form {
		padding: 0.9rem 0 6.3rem
	}

	.safety-recall__more-info {
		margin-top: 3.9rem;
		margin-bottom: 4.3rem
	}

	.safety-recall__more-info .cta-btn {
		width: auto
	}

	.safety-recall__more-info .body-copy {
		font-size: 16px;
		line-height: 1.4
	}

	.safety-recall--has-login .safety-recall__more-info {
		margin-top: 3.9rem
	}

	.safety-recall__title,.safety-recall__vin-id,.safety-recall__description,.safety-recall__more-info {
		text-align: center
	}

	.safety-recall__description {
		padding: 0;
		margin: 0 auto;
		font-size: 1.6rem;
		line-height: 1.5
	}
}

.related-links__items-text {
	max-width: 50%;
	margin: 0 auto;
	padding: 30px 0
}

@media (min-width: 320px) and (max-width: 767px) {
	.related-links__items-text {
		max-width: 100%
	}
}

.related-links__items-content--dark-grey {
	text-transform: uppercase;
	background-color: #202020
}

.related-links__items-content--dark-grey .related-links__items-menu-list {
	border-bottom: 2px solid #494949
}

.related-links__items-content--dark-grey .related-links__items-menu-list .related-links__items-menu-link {
	color: #fff
}

.related-links__items-content--dark-grey .related-links__items-menu-list .related-links__items-menu-link.title {
	color: #fff;
	letter-spacing: 0.05rem
}

.related-links__items-content--white {
	text-transform: uppercase;
	background-color: #fff
}

.related-links__items-content--white .related-links__items-menu-list {
	border-bottom: 2px solid #ededed
}

.related-links__items-content--white .related-links__items-menu-list .related-links__items-menu-link {
	color: #000
}

.related-links__items-content--white .related-links__items-menu-list .related-links__items-menu-link.title {
	color: #000
}

.related-links__items-menu {
	list-style: none;
	padding-left: 0
}

.related-links__items-menu-list {
	border-bottom: 2px solid #494949
}

.related-links__items-menu-list .related-links__items-menu-link {
	font-family: "NotoSans-Bold",sans;
	display: inline-block;
	position: relative;
	padding: 20px 0;
	max-width: 700px;
	margin-right: 35px
}

@media screen and (min-width: 320px) {
	.related-links__items-menu-list .related-links__items-menu-link {
		font-size: 1.2rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.related-links__items-menu-list .related-links__items-menu-link {
		font-size: 1.2rem;
		line-height: 1
	}
}

.related-links__items-menu-list .related-links__items-menu-link:hover {
	text-decoration: none
}

.related-links__items-menu-list .related-links__items-menu-link .cta-icon {
	right: -35px
}

.related-links__items-menu-list .related-links__items-menu-link .cta-icon::after {
	content: "\e94d"
}

.related-links__items-menu-list .related-links__items-menu-link .cta-icon.link-out::after {
	content: "\e913"
}

.related-links__items-menu-list .related-links__items-menu-link.title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans
}

@media screen and (min-width: 320px) {
	.related-links__items-menu-list .related-links__items-menu-link.title {
		font-size: 3rem;
		line-height: 1
	}
}

@media screen and (min-width: 768px) {
	.related-links__items-menu-list .related-links__items-menu-link.title {
		font-size: 3rem;
		line-height: 1.2
	}
}

.related-links__item-wrapper {
	padding: 0
}

@media (max-width: 767px) {
	.related-links__items-menu {
		padding-left: 0
	}

	.related-links__items-menu-list {
		padding-left: 15px
	}
}

@media screen and (min-width: 480px) {
	.related-links__items-menu-list .related-links__items-menu-link {
		max-width: 500px
	}
}

.content-tile {
	background-color: #fff;
	padding: 15px 0
}

.content-tile__headline {
	width: 60%;
	margin: auto;
	text-align: center
}

.content-tile__headline-title {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	margin: 60px 0 30px
}

@media screen and (min-width: 320px) {
	.content-tile__headline-title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__headline-title {
		font-size: 6rem;
		line-height: 5.3rem
	}
}

@media screen and (min-width: 320px) {
	.content-tile__headline-intro {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__headline-intro {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.content-tile.portrait {
	padding-bottom: 25px
}

.content-tile.grey-dark {
	background-color: #202020;
	color: #fff
}

.content-tile .container-fluid {
	padding-left: 30px;
	padding-right: 30px
}

.content-tile__title {
	margin: 45px 0;
	text-transform: uppercase;
	letter-spacing: 0.05rem
}

@media screen and (min-width: 320px) {
	.content-tile__title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__title {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.content-tile__title.portrait {
	margin-top: 50px;
	margin-bottom: 40px
}

.content-tile__item-wrapper.fourDisplay:nth-child(4n+1) {
	clear: both
}

.content-tile__item-wrapper.threeDisplay:nth-child(3n+1) {
	clear: both
}

.content-tile__item-wrapper.twoDisplay:nth-child(2n+1) {
	clear: both
}

.content-tile__item-img-image {
	display: inline-block;
	width: 100%;
	min-height: 100px
}

.content-tile__item-content-name {
	margin: 25px 0 10px;
	text-transform: uppercase;
	letter-spacing: 0.05rem
}

.content-tile__item-content-subheader {
	display: block;
	margin-bottom: 25px
}

@media screen and (min-width: 320px) {
	.content-tile__item-content-subheader {
		font-size: 1.6rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__item-content-subheader {
		font-size: 1.8rem;
		line-height: 1
	}
}

@media screen and (min-width: 320px) {
	.content-tile__item-content-desc {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__item-content-desc {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.content-tile__item-content a.cta {
	display: inline-block;
	margin-bottom: 35px
}

@media screen and (min-width: 320px) {
	.content-tile__item-content a.cta {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.content-tile__item-content a.cta {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.content-tile__item-content.black a.cta {
	color: #fff
}

.content-tile__item-img-link {
	display: inline-block;
	width: 100%
}

@media (min-width: 320px) and (max-width: 767px) {
	.content-tile .container-fluid {
		padding-left: 15px;
		padding-right: 15px
	}

	.content-tile-landscape .row {
		display: flex
	}

	.content-tile__item-wrapper:nth-child(2n+1) {
		clear: both
	}

	.content-tile__item-wrapper.threeDisplay:nth-child(3n+1) {
		clear: none;
		float: left
	}

	.content-tile__headline {
		width: 80%
	}
}

.long-form-artical-container {
	padding-left: 0;
	padding-right: 0
}

.long-form-artical {
	max-width: 50%;
	margin: auto;
	padding: 2.5rem 0
}

@media (min-width: 320px) and (max-width: 767px) {
	.long-form-artical {
		max-width: 100%
	}
}

.long-form-artical h1,.long-form-artical h2,.long-form-artical h3,.long-form-artical h4,.long-form-artical h5,.long-form-artical h6 {
	display: block;
	letter-spacing: 0.05rem
}

.long-form-artical p img,.long-form-artical li img {
	margin-left: -20%
}

@media (min-width: 320px) and (max-width: 767px) {
	.long-form-artical p img,.long-form-artical li img {
		margin-left: 0
	}
}

.long-form-artical p span.cta-btn,.long-form-artical li span.cta-btn {
	margin-top: 25px;
	margin-bottom: 35px
}

.long-form-artical p span.cta-btn-third:after,.long-form-artical li span.cta-btn-third:after {
	content: "\e94d";
	position: absolute;
	right: 22px;
	font-family: "cta-icon" !important;
	font-size: 1.1rem;
	margin-left: 15px
}

.long-form-artical p span.cta-btn-third.link-out:after,.long-form-artical li span.cta-btn-third.link-out:after {
	content: '\e913'
}

.long-form-artical p a,.long-form-artical li a {
	color: #000;
	text-decoration: underline;
	font-weight: bold;
	word-break: break-word
}

.long-form-artical p a span.cta-link-third:after,.long-form-artical li a span.cta-link-third:after {
	content: "\e94d";
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	font-family: 'cta-icon' !important;
	font-size: 1.1rem
}

.long-form-artical p a span.cta-link-third.link-out:after,.long-form-artical li a span.cta-link-third.link-out:after {
	content: '\e913'
}

.long-form-artical ul {
	padding-left: 20px
}

.long-form-artical ul li a {
	color: #000;
	text-decoration: underline;
	font-weight: bold;
	word-break: break-word
}

@media screen and (min-width: 768px) {
	.long-form-artical table {
		margin-left: -20%;
		width: 120%
	}

	.long-form-artical table td {
		padding-right: 20px
	}

	.long-form-artical table.text-table {
		margin-left: auto;
		width: 100%
	}
}

.long-form-artical table tbody tr td img {
	margin-top: 50px;
	margin-bottom: 50px;
	max-width: 325px
}

.long-form-artical table tbody tr td ul {
	padding-left: 20px
}

.long-form-artical table tbody tr td a {
	color: #000;
	text-decoration: underline;
	font-weight: bold
}

.long-form-artical table tbody tr td {
	word-break: break-word
}

.long-form-artical table tbody tr td ul li a {
	word-break: break-word
}

@media (min-width: 320px) and (max-width: 767px) {
	.long-form-artical table tbody tr td {
		display: block
	}

	.long-form-artical table tbody tr td img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%
	}

	.long-form-artical table.text-table tbody tr td {
		display: table-cell
	}

	.long-form-artical p a span.cta-link-third {
		max-width: 100%;
		white-space: pre-wrap
	}
}

.long-form-artical-wrapper.white {
	background-color: #fff
}

.long-form-artical-wrapper.grey {
	background-color: #ededed
}

@media (max-width: 767px) {
	.long-form-artical-wrapper {
		padding: 0 15px
	}
}

.long-form-artical .event-marquee,.long-form-artical .event-marquee--disclaimer {
	position: relative;
	width: 200%;
	left: -50%;
	margin-top: -2.5rem !important;
	margin-bottom: -2.5rem !important;
	padding-top: 5rem;
	padding-bottom: 5rem
}

@media screen and (min-width: 320px) and (max-width: 767px) {
	.long-form-artical .event-marquee,.long-form-artical .event-marquee--disclaimer {
		width: calc(100% + 30px);
		left: -15px
	}
}

.landing-hero .left-10 {
	margin-left: 5%
}

.landing-hero__item--desc {
	max-width: 600px;
	margin: 0 auto 60px
}

@media screen and (min-width: 320px) {
	.landing-hero__item--desc {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.landing-hero__item--desc {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

.landing-hero__item--desc.dark {
	color: #fff
}

.landing-hero__item--desc.light {
	color: #000
}

.landing-hero-frame {
	height: 10px
}

.landing-hero-frame.dark {
	background: #000
}

.landing-hero-frame.light {
	background: #fff
}

.landing-hero__item-text {
	min-height: 370px;
	margin: 0 auto;
	padding: 100px 30px
}

.landing-hero__item-text .cta-btn,.landing-hero__item-text .cta-link {
	margin: 1rem
}

.hog_logo_white {
	width: auto;
	max-height: 60px;
	margin-bottom: 20px
}

.landing-hero__item--subtitle,.landing-hero__item--title {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #000;
	letter-spacing: 1px;
	max-width: 600px;
	margin: 0 auto 20px
}

.landing-hero__item--subtitle-white,.landing-hero__item--title-white {
	font-family: "Primary-Headline-Font","Secondary-Headline-Font","NotoSans-Bold",sans;
	text-transform: uppercase;
	display: block;
	color: #fff;
	letter-spacing: 1px;
	max-width: 600px;
	margin: 0 auto 20px
}

@media screen and (min-width: 320px) {
	.landing-hero__item--subtitle-white,.landing-hero__item--title-white {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.landing-hero__item--subtitle-white,.landing-hero__item--title-white {
		font-size: 6rem;
		line-height: 5.3rem
	}
}

.landing-hero__item--title {
	margin-bottom: 20px
}

@media screen and (min-width: 320px) {
	.landing-hero__item--title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.landing-hero__item--title {
		font-size: 6rem;
		line-height: 5.3rem
	}
}

.landing-hero {
	background: black;
	text-align: center
}

.landing-hero__item {
	display: block;
	height: 100%;
	background-color: #f7f7f7
}

.landing-hero__item .landing-hero__item-content {
	background-size: cover
}

.landing-hero__item .landing-hero__item-content--black {
	background: black
}

.landing-hero__item .landing-hero__item-content--white {
	background: white
}

.landing-hero__item .landing-hero__item-content--image {
	background-size: cover;
	background-position: center
}

.landing-hero__item .landing-hero__item-content--image .landing-hero__item-content--overlay {
	background-color: rgba(0,0,0,0.4)
}

.landing-hero__item .landing-hero__item-content--image .landing-hero__item-text {
	height: 100%
}

.landing-hero__item .landing-hero__item-content .hero-marquee {
	padding-bottom: 0
}

.landing-hero__item .landing-hero__item-content .hero-marquee .hero-marquee__wrapper .hero-marquee__overlay .cta-btn {
	position: absolute;
	left: 50%;
	bottom: 5%;
	transform: translate(-50%, -50%)
}

.landing-hero__video-overlay .landing-hero__item-text {
	position: relative
}

.news-feed {
	background-color: #fff
}

.news-feed.grid {
	padding: 1.5rem 0
}

.news-feed-row-wrapper {
	margin-left: 0;
	margin-right: 0
}

.news-feed__title {
	margin: 3rem 0 1.5rem 0;
	padding-left: 15px
}

@media screen and (min-width: 320px) {
	.news-feed__title {
		font-size: 3.6rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed__title {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.news-feed__item-content {
	padding: 2rem 0
}

.news-feed__item-content--desc {
	font-family: "NotoSans-Bold",sans;
	text-decoration: none;
	color: #000;
	line-height: 1.5
}

@media screen and (min-width: 320px) {
	.news-feed__item-content--desc {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed__item-content--desc {
		font-size: 1.4rem;
		line-height: 2rem
	}
}

.news-feed__item-content--desc:hover,.news-feed__item-content--desc:visited,.news-feed__item-content--desc:focus {
	text-decoration: none;
	color: #000
}

.news-feed__item-content--date {
	font-family: "NotoSans-Regular",sans
}

@media screen and (min-width: 320px) {
	.news-feed__item-content--date {
		font-size: 1.2rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed__item-content--date {
		font-size: 1.3rem;
		line-height: 2.4rem
	}
}

@media (max-width: 767px) {
	.news-feed__item-wrapper:nth-child(2n+1) {
		clear: left
	}
}

.news-feed__title-list {
	margin: 3rem 0 1.5rem 0
}

.news-feed-list__wrapper {
	max-width: 50%;
	margin: 0 auto;
	padding: 4rem 2rem
}

.news-feed-list__wrapper .load-more {
	font-family: "NotoSans-Bold",sans;
	color: #000;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none
}

@media screen and (min-width: 320px) {
	.news-feed-list__wrapper .load-more {
		font-size: 1.2rem;
		line-height: 2.4rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed-list__wrapper .load-more {
		font-size: 1.4rem;
		line-height: 2.4rem
	}
}

.news-feed-list__wrapper .load-more:hover,.news-feed-list__wrapper .load-more:visited,.news-feed-list__wrapper .load-more:focus {
	text-decoration: none;
	color: #000
}

.news-feed-list__wrapper .load-more .icon-circle-add {
	height: 22px;
	width: 22px;
	cursor: pointer;
	background: url("../../images/icon-see-more.png") no-repeat;
	background-size: 100%;
	margin-bottom: -0.5rem;
	margin-left: 0.5rem
}

.news-feed__item-content-list {
	list-style: none;
	padding: 0;
	margin-bottom: 2.5rem
}

.news-feed__item-content-item {
	padding: 2.5rem 0;
	border-top: 2px solid #ededed
}

.news-feed__item-content-item:last-child {
	border-bottom: 2px solid #ededed
}

@media (max-width: 767px) {
	.news-feed-list__wrapper {
		max-width: 100%;
		margin: 0 auto;
		padding: 4rem 0rem
	}

	.news-feed-list-container {
		padding-left: 15px;
		padding-right: 15px
	}

	.news-feed__item-content-item {
		padding: 2.5rem 1.5rem;
		margin-left: -1.5rem;
		margin-right: -1.5rem
	}
}

.news-feed-article .container-fluid {
	padding: 0
}

.news-feed-article__wrapper {
	max-width: 50%;
	margin: 0 auto;
	padding: 4rem 0 1rem
}

.news-feed-article__header {
	overflow: hidden
}

.news-feed-article__social-icon a {
	width: 25px;
	height: 25px;
	display: inline-block
}

.news-feed-article__headline {
	text-transform: uppercase;
	margin-bottom: 45px
}

@media screen and (min-width: 320px) {
	.news-feed-article__headline {
		font-size: 3rem;
		line-height: 4.4rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed-article__headline {
		font-size: 4.5rem;
		line-height: 5.3rem
	}
}

.news-feed-article__date {
	margin-bottom: 0
}

@media screen and (min-width: 320px) {
	.news-feed-article__date {
		font-size: 1.4rem;
		line-height: 2.2rem
	}
}

@media screen and (min-width: 768px) {
	.news-feed-article__date {
		font-size: 1.6rem;
		line-height: 2.4rem
	}
}

@media (min-width: 320px) and (max-width: 767px) {
	.news-feed-article .container-fluid {
		padding: 0 15px
	}

	.news-feed-article__wrapper {
		max-width: 100%;
		margin: 0 auto;
		padding: 4rem 0rem
	}

	.news-feed-article__title.text-anchor:before {
		top: -0.5rem
	}
}

.img-ie {
	max-height: 100%
}

.link__overlay {
	opacity: 0;
	display: none;
	background-color: #000;
	height: 100%;
	width: 100%;
	text-align: left;
	max-width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	overflow-y: auto;
	z-index: 10000;
	transition: opacity ease-out 0.25s
}

.link__overlay--active {
	opacity: 1;
	display: block;
	overflow: hidden
}

.link__overlay-header {
	display: table;
	background-color: #000;
	color: #dfdfdf;
	overflow: hidden;
	position: relative;
	z-index: 1;
	min-height: 6rem;
	width: 100%;
	font-weight: 300;
	font-size: 3rem;
	line-height: 3.8rem
}

@media screen and (min-width: 320px) {
	.link__overlay-header {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 768px) {
	.link__overlay-header {
		font-size: 3rem;
		line-height: 3.8rem
	}
}

@media screen and (min-width: 992px) {
	.link__overlay-header {
		font-size: 4rem;
		line-height: 5rem
	}
}

@media screen and (min-width: 1440px) {
	.link__overlay-header {
		font-size: 4rem;
		line-height: 5rem
	}
}

.link__overlay-close {
	display: table-cell;
	vertical-align: middle;
	font-size: 0.9rem;
	font-family: "NotoSans-Bold",sans;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	padding-right: 33px;
	right: 20px;
	position: relative;
	display: table-cell;
	vertical-align: middle;
	text-align: right
}

.link__overlay-image-wrapper {
	text-align: center;
	position: absolute;
	width: 100%;
	z-index: 0;
	height: calc(100% - 60px)
}

@media (min-width: 320px) and (max-width: 768px) {
	.link__overlay-image-wrapper {
		overflow: auto;
		-webkit-overflow-scrolling: touch
	}
}

.link__overlay-image-wrapper iframe {
	width: 100%;
	height: 100%
}

@media screen and (min-width: 768px) {
	.link__overlay {
		z-index: 10000
	}

	.link__overlay-close {
		font-size: 1.2rem;
		right: 44px
	}
}
