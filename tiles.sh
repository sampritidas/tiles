function main() {
  local block=$1
  local total_chance=$(($block*2))
  local chance=0

  while [[ $chance -lt $total_chance ]]
  do
    read -p "Enter first choice : " first
    read -p "Enter second choice : " second
    value=$( node tiles.js $block $first $second )
    
    if [[ $value == "Pattern not matched" ]]
    then
      continue
    fi

    open tiles.html
    chance=$(($chance + 1))
  done
}

main $1
