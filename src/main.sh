#! /bin/bash

source ./tiles.sh

data="[[2,3,4,1],[1,4,2,3],[2,4,1,3],[1,3,2,4],[2,4,3,1],[1,3,4,2]]"
dataFile="../data/data.json"
block=6

main $block $dataFile $data
