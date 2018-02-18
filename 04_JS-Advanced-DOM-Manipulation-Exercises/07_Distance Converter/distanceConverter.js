//Created by *** Kostadin Belchev ***
function attachEventsListeners() {
    // TODO: attach click event to convert button

    document.getElementById('convert').addEventListener('click', onClick);


    function onClick(event) {
        let inputDistance = document.getElementById('inputDistance');
        let inputDistanceNumber = Number(inputDistance.value);
        let inputDistanceType = document.getElementById('inputUnits').value;
        //let inputDistanceIndex = document.getElementById('inputUnits').selectedIndex;
        let inputDistanceInMeters = convertToMeters(inputDistanceNumber, inputDistanceType);
        let output = document.getElementById('outputDistance');
        let outputDistanceType = document.getElementById('outputUnits').value;
        output.value = convertFromMeters(inputDistanceInMeters, outputDistanceType);
    }

    function convertToMeters(distance, type) {
        if (type === 'km') {
            return distance * 1000;
        } else if (type === 'm') {
            return distance;
        } else if (type === 'cm') {
            return distance * 0.01;
        } else if (type === 'mm') {
            return distance * 0.001;
        } else if (type === 'mi') {
            return distance * 1609.34;
        } else if (type === 'yrd') {
            return distance * 0.9144;
        } else if (type === 'ft') {
            return distance * 0.3048;
        } else if (type === 'in') {
            return distance * 0.0254;
        }
    }

    function convertFromMeters(distance, type) {
        if (type === 'km') {
            return distance / 1000;
        } else if (type === 'm') {
            return distance;
        } else if (type === 'cm') {
            return distance / 0.01;
        } else if (type === 'mm') {
            return distance / 0.001;
        } else if (type === 'mi') {
            return distance / 1609.34;
        } else if (type === 'yrd') {
            return distance / 0.9144;
        } else if (type === 'ft') {
            return distance / 0.3048;
        } else if (type === 'in') {
            return distance / 0.0254;
        }
    }
}
