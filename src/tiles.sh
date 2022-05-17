function main() {
  local block=$1
  local total_chance=$(($block*2))
  local chance=0
  echo "[[2,3,4,1],[1,4,2,3],[2,4,1,3],[1,3,2,4],[2,4,3,1],[1,3,4,2]]" > data.json

  node createhtml.js
  open tiles.html

  while [[ $chance -lt $total_chance ]]
  do
    echo 'chance : ' $(($chance+1))
    read -p "Enter first choice : " first
    read -p "Enter second choice : " second
    value=$( node tiles.js $block $first $second )
    
    if [[ $value == "Pattern not matched" ]]
    then
      echo -ne $value '\n TRY AGAIN \n' 
      continue
    fi

    open tiles.html
    chance=$(($chance + 1))
  done
  echo "YOU WON"
}

main $1
