class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b) => a > b ? 1 : -1)
    return(args[0])
  }
}

var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]))




