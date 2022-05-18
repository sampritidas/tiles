#! /bin/bash

function GetInitPage () {
  local data=$1
  local dataFile=$2
  echo $data > $dataFile
  node initPage.js $dataFile
  open tiles.html
}

function runGame () {
  local chance=$1
  local total_chance=$2
  local block=$3
  local dataFile=$4
  local first=$5
  local second=$6

  while [[ $chance -lt $total_chance ]]
  do
    echo 'chance : ' $(($chance+1))
    read -p "Enter first choice : " first
    read -p "Enter second choice : " second
    value=$( node tiles.js $block $first $second $dataFile )
    
    if [[ $value == "Pattern not matched" ]]
    then
      echo -ne $value '\n TRY AGAIN \n' 
      continue
    fi
    chance=$(($chance + 1))
  done
}

function main() {
  local block=$1
  local dataFile=$2
  local data=$3
  local total_chance=$(($block*2))
  local chance=0

  GetInitPage $data $dataFile
  runGame $chance $total_chance $block $dataFile $first $second 

  echo "YOU WON"
}
