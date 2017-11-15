const printDiamond = function(lenght,string)
{
	if(lenght % 2 === 0) 
	{
		lenght = lenght - 1;
	}
	const StarOrSpace = function(n, string)
	{
		if(n<=0)
		{
			return "";
		}
		return string + StarOrSpace(n-1,string);
	}
	const merge = function(spaceN, lineN, line)
	{
		if (line >lenght)
		{
			return "";
		}
		console.log(StarOrSpace(spaceN, " " )+StarOrSpace(lineN,string));
		if(line<=lenght/2)
		{
			merge(spaceN -1, lineN+2, line+1);
		} 
		else 
		{
			merge(spaceN +1, lineN-2,line+1);
		}
	}
		merge(lenght-1/2,1,1);
}
printDiamond(5,"*");