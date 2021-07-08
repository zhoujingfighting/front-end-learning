import axios from 'axios'
// axios.get('http://gitlab.tpt.com/api/v4/projects?private_token=h1GA2qtQVxV4hneGxJJV')
// 	.then(res => console.log(res))
	const quickSort = (arr: Array<number>, start = 0 , end = arr.length - 1) => {
		if(start >= end){
			return 
		}
	   let pivotIndex = Math.floor( Math.random() * (end - start + 1) ) + start
	   let pivot = arr[pivotIndex]
	   swap(arr,pivotIndex,end)
	   let i: number = start - 1
	   for(let index = start;index < end ; index ++){
		   if(arr[index] <= pivot){
				   i++
				swap(arr,i,index)
		   }
	   }
	   i++
	   swap(arr,i,end)
	   quickSort(arr,start,i-1)
	   quickSort(arr,i+1,end)
	   return arr
	}
	const swap = (arr: Array<number>, i: number , j:  number) => {
		if( i !== j){
			let index = arr[i]
			arr[i] = arr[j]
			arr[j] = index
		}
	}
	console.log(
		quickSort([10,7,4,3,2,6567,34,6,3])
	) 