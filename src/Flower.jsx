const Flower = ({ name }) => {
    const flowerName = name
    const petalColor = "pink"
    const centerColor = "gold"

    return (
        <div>
            <p>{flowerName}</p>
            <p style={{backgroundColor: petalColor, 
            color: centerColor
             }}
            >details: name: {flowerName}, petalC: {petalColor} , centerC: {centerColor}</p>
            <div style={{ 
                backgroundColor: petalColor, 
                border: `5px solid ${centerColor}`,
                borderRadius: '50%', 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '30px' 
            }}>
                🌸
            </div>
        </div>
    )
}

export default Flower