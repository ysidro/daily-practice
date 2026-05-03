
function formatPrice(price)
{

	if (typeof price !== 'number' || Number.isNaN(price) || price < 0) {
	    return 'Invalid price';
	}

	const formattedPrice = new Intl.NumberFormat('en-US', {
    	minimumFractionDigits: 2,
    	maximumFractionDigits: 2,
  	
  	}).format(price);

	return `$${formattedPrice}`;

}

console.log(formatPrice(23433));
