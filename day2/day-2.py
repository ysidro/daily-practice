
def formatPrice(price):
	

	if not isinstance(price, (int, float)) or price < 0:
		return 'Invalid price'

	return f'${price:,.2f} '


print(formatPrice(25000))
print(formatPrice(49.5))
print(formatPrice(0))
print(formatPrice(-20))
print(formatPrice('abc'))