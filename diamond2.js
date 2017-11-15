const prtDiamond = function(lenght, string) 
{
	if(lenght % 2 === 0) {
	lenght = lenght - 1;
}
const Star = function(n, string) 
{
	let s = '';
	for(let i = 0; i < n; i++) 
	{
		s = s + string;
	}
	return s;
};
let spaceN = (lenght-1)/2;
let lineN = 1;
for(let i = 1; i <= lenght; i++)
{
	console.log(Star(spaceN, ' ') + Star(lineN, string));
	if(i <= lenght/2) 
	{
		spaceN = spaceN -1;
		lineN = lineN + 2;
	} 
	else 
	{
		spaceN = spaceN + 1;
		lineN = lineN-2;
	}
}
};
prtDiamond(7,"*");