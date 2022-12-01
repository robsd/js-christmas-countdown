backgrounds = [
	'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1080',
	'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1080',
	'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1080',
	'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=1080',
	'https://images.unsplash.com/photo-1451772741724-d20990422508?w=1080',
	'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=1080',
	'https://images.unsplash.com/photo-1543258103-a62bdc069871?w=1080',
	'https://images.unsplash.com/photo-1575549593677-012f18048ea1?w=1080',
	'https://images.unsplash.com/photo-1479722842840-c0a823bd0cd6?w=1080',
	'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=1080',
	'https://images.unsplash.com/photo-1545608444-f045a6db6133?w=1080',
	'https://images.unsplash.com/photo-1482330454287-3cf6611d0bc9?w=1080',
	'https://images.unsplash.com/photo-1509037861673-2c1a24341729?w=1080',
	'https://images.unsplash.com/photo-1612396504363-5f384c8e65a7?w=1080',
	'https://images.unsplash.com/photo-1522448746354-da4936934201?w=1080'
]

document.body.style.backgroundImage = 'url("' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + '")';