tailwind.config = {
    theme: {
      extend: {
        colors: {
          maincolor: '#4535AF',
          color01: '#5344B5',
          color02: '#9B99A9',
          color03: '#9B99A9',
          color04: '#D3D8FF',
          bgcolor: '#F8F8FA',
          nai: 'transparent',
          text: '#9B99A9',
        
        },
    
       maxWidth:{
        container: '1200px',
       },
       fontFamily:{
        inter: ['Inter']
       },
       boxShadow: {
        'shadow': '0px 12px 24px rgba(0, 0, 0, 0.1);',
      },
 
      keyframes: {
        income: {
          from : { bottom:'8%' },
          to : { bottom:'15%'},
        },
        second:{
          from : { left:'-10%' },
          to : { left:'0%'},
        }
      },
      animation: {
        'income': 'income 1s linear alternate infinite ',
        'second': 'second 1s linear alternate infinite ',
      },
        
      }
      
        

    }
    
  }
