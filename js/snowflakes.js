snowflakes = document.querySelector('.container');

function snowflake(style) {
	var snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	snowflake.textContent = style;
	snowflakes.appendChild(snowflake);
}

function snowstorm(count) {
	for (i = 0; i < count; i++) {
		snowflake('❅');
		snowflake('❆');
	}
}

if (christmas == true) {
	snowstorm(6);
}