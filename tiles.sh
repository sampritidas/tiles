function main() {
  local block=$1
  local total_chance=$(($block*2));
  local chance=0
  while [[ $chance -lt $total_chance ]]
  do
    echo "chance" $(($chance + 1))
    read -p "Enter first choice : " first
    read -p "Enter second choice : " second
    node tiles.js $block $first $second
    open tiles.html
    chance=$(($chance + 1))
  done
}

main
