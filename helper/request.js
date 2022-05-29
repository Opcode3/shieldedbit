
export default function Request() {
  
    this.post = (url, data, header = '') => {
        return 'Making use of Post request'
    }

    this.get = (url, data, header = '') => {
        return 'Making use of get request'
    }

    this.put = (url, data, header = '') => {
        return 'Making use of put request'
    }

    this.delete = (url, data, header = '') => {
        return 'Making use of delete request'
    }
}

// async function fetchApi(){
    // const response = await fetch()
// }
