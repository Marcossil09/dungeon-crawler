
  const ROW = 60;
  const COL = 60;
  
  let grid = [
["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","*","*","*","*","*","*","*","*","*","*","*","*"],
["*","*","*","*","*","*","*","*","*","*","*","*"," "," "," "," "," "," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","*","*","*","*","*","*","*","*","*","*","*","*"],
["*"," "," "," "," "," "," ","*","*","*","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," ","*","*","*","*","*"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","*"," "," "," "," "," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," ","*","*","*","*","#"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*"," "," "," "," "," "," "," "," "," "," ","*","*","*","#","*"," "," "," "," "," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," ","*","*","*","*","#"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*"," "," ","*","*"," "," "," "," "," ","#","*","*","*","#","*"," "," ","*","*","*","*","*","*","*","*","*"],
["*"," "," "," "," "," "," ","*","*","*","*","#"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*"," "," ","*","*"," "," "," "," "," ","#","*","*","*","#","*"," "," ","*","*"," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," ","*","*","*","*","#"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*"," "," ","*","*"," "," "," "," "," ","#","*","*","*","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," ","*","*","*","*","#"," "," "," "," "," "," ","*"," ","*","*","*","*"," "," "," "," "," "," "," ","*"," ","*"," "," ","*","*"," "," "," "," "," "," ","*","*","*","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#","*"," "," ","*"," "," "," "," "," ","*","*","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","#","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," ","#","*"," "," ","*","*","*"," ","*","*"," "," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","#","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," ","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","#","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," "," "," "," "," "," ","*","*"," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","#","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," "," ","*","*","#"," "," "," "," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","#","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," "," ","*","*"," "," ","*","*","*"," ","#","*"," "," "," "," "," "," "," "," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*","*"," ","*","*","*","*"," ","#","*"," "," ","*"," "," "," "," "," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*","*"," "," "," "," "," "," ","#","*"," "," ","*"," "," ","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*"," "," ","*","*","*"," "," ","#","*"," "," ","*"," "," ","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," ","*","*"," "," ","*","*"," "," ","*"," "," ","*"," "," "," ","*","*"," "," ","#","*"," ","*","*"," "," "," "," "," "," "," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," ","*","*","*","*"," "," ","*","*"," "," ","*"," "," "," ","*"," "," ","*","*"," "," ","#","*"," ","*","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," "," "," "," "," ","*","*","*","*"," "," ","*","*"," "," ","*"," "," ","*","*","#"," ","*","*"," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*"," "," "," ","*","*"," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*","*"," "," ","*","*"," "," ","#","*"," "," ","*","*","*","*","*","*","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#"," "," "," "," "," "," "," "," "," ","*","*"," "," ","*","*"," ","*","*"," "," ","*","*"," "," ","#","*"," "," ","*"," "," "," "," "," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#","*","*","*","*","*","*","*","*","*","*","*"," "," ","*","*"," ","*","*"," "," ","*","*"," "," ","#","*"," "," ","*"," ","#","#","#"," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," ","#","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," "," ","*","*"," "," ","*","*"," "," ","#","*"," "," ","*"," ","#","*","*"," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*"," "," "," "," "," "," "," "," "," "," "," ","*","*"," "," ","*"," "," ","*","*"," ","*","*","*"," "," ","#","*"," "," ","*"," ","#","*","*"," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," "," "," "," "," "," "," ","#","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," "," ","*"," "," "," ","*","*"," "," ","#","*"," "," ","*"," ","#","*","*"," ","*"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","#"," "," "," ","#","*"," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," "," ","*"," ","#","*"," "," "," ","*","*"," "," ","#","*"," "," ","*"," ","#","*","*"," ","*"," ","*"],
["*","*"," "," "," "," "," "," "," "," "," ","*","#"," "," "," ","#","*"," ","*","*","*","*","*"," "," "," "," "," "," "," ","*","*","*"," "," ","*","*"," "," "," "," "," ","*","*"," "," ","#","*"," "," ","*"," ","#"," "," "," ","*"," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","#"," "," "," ","#","*"," ","*","*","*","*","*"," "," ","*","*","*","*","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*"," "," ","#","*"," "," ","*"," ","#"," ","" ," ","*"," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","#"," "," "," ","#","*"," ","*","*","*","*","*"," "," ","*"," "," "," ","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*"," "," ","#","*"," "," ","*"," ","#"," "," "," ","*"," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","#"," "," "," ","#","*"," ","*","*","*","*","*"," "," ","*"," "," "," ","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*"," "," ","#","*"," "," ","*"," ","*"," "," "," ","*"," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","*"," "," "," ","#","*"," ","*","*","*","*","*"," "," ","*"," "," "," ","*","*","*","*"," "," ","*","*","*","*"," ","*","*","*","*"," "," ","#","*"," "," ","*"," ","*","*","*","*","*"," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," "," "," "," "," "," ","#","*"," ","*","*","*","*","*"," "," ","*"," ","*","*","*","*","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," ","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","*"," ","#"," ","*","*"," ","*","*","*","*","*"," "," ","*"," "," "," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," ","#","*"," "," ","*","*","*","*","*","*","*","*","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*","*","*","*"," "," ","*","*","*","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," ","#","*"," "," ","*","*","*","*","*","*","*","*","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","*","#"," ","#","*","*"," ","*","*","*","*","*"," "," ","*","*","*","*","*"," ","*","*","*"," "," ","*","*","*"," ","*","*"," "," "," "," ","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*"," "," ","*"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*","*"," "," ","*","*","*"," ","*","*"," ","*","*"," ","#","*"," "," "," "," "," "," ","*","*"," "," ","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," "," ","*","*"," ","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*","*"," "," ","*","*","*"," ","*","*"," ","*","*"," ","#","*"," "," ","*"," "," "," ","*","*"," "," ","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," "," "," "," "," ","*"," ","*","*","*"," "," ","*","*","*"," ","*","*"," ","*","*"," ","#","*"," "," ","*"," "," "," "," "," "," "," ","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," "," "," "," "," ","*"," ","*"," ","*"," "," ","*","*","*"," ","*","*"," ","*","*"," ","#","*","*","*","*","*","*","*","*","*","*","*","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," "," ","*","*"," ","*","*"," "," "," ","*","*","*","*"," "," ","*"," ","*"," "," "," "," ","*","*","*"," ","*","*"," ","*","*"," ","#","*","*","*","*","*","*","*","*","*","*","*","*"],
["*","*"," "," ","*","*","*","*","*","*","*","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," "," "," ","*"," ","*"," ","*","*"," "," "," ","*","*","*"," ","*","*"," ","*"," "," ","#","*","*","*","*","*","*","*","*","*","*","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," "," "," ","*"," ","*"," ","*","*"," "," "," ","*","*","*"," "," "," "," ","*"," "," ","#","*"," "," ","*","*","*","*","*"," ","*","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," "," "," ","*"," ","*"," ","*","*"," ","*"," "," ","*","*"," "," "," "," ","*"," "," ","#","*"," "," "," ","*","*"," "," "," "," ","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*","*","*","*","*","*"," "," ","*"," ","*"," ","*","*"," ","*","*"," "," ","*"," "," "," "," ","*"," "," ","#","*"," ","*"," "," "," "," "," "," "," ","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," ","*"," ","*"," ","*"," ","*","*"," ","*","*","*"," "," ","*"," "," "," ","*"," "," ","#","*"," ","*","*"," "," ","*","*"," "," ","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*"," ","*","*"," "," "," "," "," ","*"," ","*"," ","*"," ","*","*"," ","*"," ","*","*"," "," ","*"," "," ","*"," "," ","#","*"," ","*","*","*"," "," ","*","*","#","*","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","*"," ","*"," ","*","*"," ","*"," "," ","*","*"," "," ","*"," ","*"," "," ","#","*"," ","*","*","*","*"," "," "," "," "," ","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*"," ","*","*"," ","*","*","*"," "," ","*","*"," "," ","#","*"," ","*","*","*","*","*","*","*","#"," ","*"],
["*","*"," "," ","#"," "," "," "," "," "," ","*","*"," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*"," ","*","*"," ","*","*","*","*"," "," ","*"," "," ","#"," "," "," ","#","*","*","*","*","*","#"," ","*"],
["*","*"," "," "," "," ","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," "," ","*","*"," ","*","*","*","*","*"," "," "," "," ","#"," "," "," ","#","*","*","*","*","*","#"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," "," ","*","*"," "," "," "," "," "," "," "," "," "," ","#"," "," "," ","#","#","*","*","*","*","#"," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*"," "," "," ","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#"," "," "," ","#"," "," "," "," "," "," "," ","*"],
["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"," ","*","*","*","*","*","*","*"]]
   
    let playerRow = 2;
    let playerCol = 2;
    grid[playerRow][playerCol] = '&';

    let teleport3Row = 21;
    let teleport3Col = 26;
    let teleport2Row = 18;
    let teleport2Col = 54
    let teleportdestino3Row = 6;
    let teleportdestino3Col = 40;
    let teleportdestino2Row = 49;
    let teleportdestino2Col = 56;
    grid[teleport3Row][teleport3Col] = '>';
    grid[teleportdestino3Row][teleportdestino3Col] = '>';
    grid[teleport2Row][teleport2Col] = '>';
    grid[teleportdestino2Row][teleportdestino2Col] = '>';

    
    let botaoRow = 8;
    let botaoCol = 35;
    grid[botaoRow][botaoCol] = 'o'; 
     
    let botao1Row = 51;
    let botao1Col = 8;
    grid[botao1Row][botao1Col] = 'o';
    
    
    let chaveRow = 35;
    let chaveCol = 55;
    grid[chaveRow][chaveCol] = '@';

    let espinho1Col = 47;
    let espinho1Row = 2;
    grid[espinho1Row][espinho1Col] = '#';

    let espinho2Col = 57;
    let espinho2Row = 58;
    grid[espinho2Row][espinho2Col] = '#';
    
    let portaRow = 59;
    let portaCol = 51;
    grid[portaRow][portaCol] = 'D';
    
    let curaRow = 53;
    let curaCol = 29;
    grid[curaRow][curaCol] = '+' 
    
    let spikeCount = 0
    
    let table = document.createElement('table');
    table.id = 'grid';
    document.getElementById('grid-container2').appendChild(table);
    
    
    let life = 3
  
    
    drawGrid2();
    
    function drawGrid2() {
      let table = document.getElementById('grid');
      table.innerHTML = '';
      for (let i = 0; i < ROW; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < COL; j++) {
          let cell = document.createElement('td');
          cell.textContent = grid[i][j];
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
    }
    
    
    function movePlayer2(key) {
        let nextRow = playerRow;
        let nextCol = playerCol;
      
        switch (key) {
          case 'w':
            nextRow = playerRow - 1;
            break;
          case 's':
            nextRow = playerRow + 1;
            break;
          case 'a':
            nextCol = playerCol - 1;
            break;
          case 'd':
            nextCol = playerCol + 1;
            break;
          case 'i':
            if (playerRow === chaveRow && playerCol === chaveCol) {
              grid[portaRow][portaCol] = '=';
              grid[chaveRow][chaveCol] = '@';}
            if (playerRow === teleport3Row && playerCol === teleport3Col) {
                grid[playerRow][playerCol] = ' ';
                playerRow = teleportdestino3Row;
                playerCol = teleportdestino3Col;
                grid[playerRow][playerCol] = '&';
                drawGrid();
              }
              else if(playerRow === teleportdestino3Row && playerCol === teleportdestino3Col){
                grid[playerRow][playerCol] = ' ';
                playerRow = teleport3Row;
                playerCol = teleport3Col;
                grid[playerRow][playerCol] = '&';
                drawGrid();
              }
            if(playerRow === teleport2Row && playerCol === teleport2Col){
                grid[playerRow][playerCol] = ' ';
                playerRow = teleportdestino2Row;
                playerCol = teleportdestino2Col;
                grid[playerRow][playerCol] = '&';
                drawGrid();
            }
            else if(playerRow === teleportdestino2Row && playerCol === teleportdestino2Col){
                grid[playerRow][playerCol] = ' ';
                playerRow = teleport2Row;
                playerCol = teleport2Col;
                grid[playerRow][playerCol] = '&';
                drawGrid();
            }
            else if(playerRow === botaoRow && playerCol === botaoCol){
              grid[espinho1Row][espinho1Col] = ' ';}

              else if(playerRow === botao1Row && playerCol === botao1Col){
                grid[espinho2Row][espinho2Col] = ' ';}

            else if(playerRow === curaRow && playerCol === curaCol ) {
              spikeCount--;
              life++;
              document.getElementById('vidas').textContent = life;
              canInteractWithLife = false;}
            break;
        }
      
         if(playerRow !== teleport3Row && playerCol !== teleport3Col || playerRow !== teleportdestino3Row && playerCol !== teleportdestino3Col){
          grid[teleport3Row][teleport3Col] = '>';
          grid[teleportdestino3Row][teleportdestino3Col] = '>';
        }
         if(playerRow !== teleport2Row && playerCol !== teleport2Col || playerRow !== teleportdestino2Row && playerCol !== teleportdestino2Col){
          grid[teleport2Row][teleport2Col] = '>';
          grid[teleportdestino2Row][teleportdestino2Col] = '>';
        }
        grid[botaoRow][botaoCol] = 'o';
    
        if (grid[nextRow][nextCol] !== '*' && grid[nextRow][nextCol] !== '#' && grid[nextRow][nextCol] !== 'D') {
          grid[playerRow][playerCol] = ' ';
          playerRow = nextRow;
          playerCol = nextCol;
          grid[playerRow][playerCol] = '&';
        } 
    
          else if (grid[nextRow][nextCol] === '#') {
            spikeCount++
            life--
            document.getElementById('vidas').textContent = life;
          resetPlayerPosition2();
          if (spikeCount === 3) {
            window.location.href = "gameover.html";}
        }
        if(playerRow === 59 && playerCol === 51){
            window.open('Vitoria.html', '_self');}
        drawGrid2();
      }
      
      
      function resetPlayerPosition2() {
        grid[playerRow][playerCol] = ' ';
        playerRow = 3;
        playerCol = 2;
        grid[playerRow][playerCol] = '&';
      }
     
    
    
    document.addEventListener('keydown', (event) => {
      movePlayer2(event.key);
    });
      