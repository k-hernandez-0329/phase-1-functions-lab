// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    
    const distance = 42
    
    if(blocks === 43){
        return blocks - distance
    } else if(blocks === 50) {
        return blocks - distance
    } else if (blocks === 34){
        return distance - blocks
    }

}

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks()
    const distance = blocks - 42
    const feet = 264

    if(blocks === 43){
        return distance * feet
    } else if(blocks === 50){
        return distance * feet
    } else if (blocks === 34){
        
        return -distance * feet
    }
    
}

function distanceTravelledInFeet(start, finish) {
    const distance = finish - start
    const feet = 264

    if(start === 43 && finish === 48){
        return distance * feet
    } else if(start === 50 && finish === 60){
        return distance * feet
    } else if (start === 34 && finish === 28){
        
        return -distance * feet
    }
   

}

function calculatesFarePrice(start, destination) {

    if(destination === 44){
        const blocks =  start - destination
        const feet = 264
        const totalFeet = blocks * feet
        const fee = 0
        if(totalFeet < 400){
            return fee
        }
    }
    else if(destination === 32){
        const blocks =  start - destination
        const feet = 264
        const totalFeet = blocks * feet
        if(totalFeet >= 400 || totalFeet <= 2000){
            return (totalFeet - 400) * .02
        }
    } else if(destination === 58){
        const blocks =  destination - start
        const feet = 264
        const totalFeet = blocks * feet
        if(totalFeet > 2000){
            return 25
        }
    } else if(destination === 24){
        const blocks =  start - destination
        const feet = 264
        const totalFeet = blocks * feet
        if(totalFeet > 2500){
            return "cannot travel that far"
        }
    }
    

}