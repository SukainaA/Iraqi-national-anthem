  // Iraqi National Anthem simplified melody (first few notes)
  const anthem = ['E4', 'E4', 'E4', 'C4', 'D4', 'E4', 'D4', 'E4', 'F4', 
  'F4', 'E4', 'D4', 'C4', 'C4', 'B3', 'C4', 'D4', 'D4', 'C4', 'B3', 
  'A3', 'A3', 'G3', 'A3', 'B3', 'A3', 'G3', 'G3', 'C4', 'C4', 'C4', 
  'B3', 'D4', 'C4', 'B3', 'B3', 'B3', 'B3', 'B3', 'A3', 'C4', 'B3',
   'A3', 'A3', 'G3', 'A3', 'B3', 'G3', 'F3', 'E3',
   'E4', 'E4', 'E4', 'C4', 'D4', 'E4',
   'E4', 'F4', 'G4', 'A4', 'G4', 'F4', 'E4', 'E4',
   'D4', 'D4', 'C4', 'B3', 'C4', 'D4', 'E4', 
   'E4', 'F4', 'G4', 'A4', 'G4', 'F4', 'E4', 'E4',
   'D4', 'D4', 'C4', 'B3', 'C4', 'D4', 'E4', 
   'C4', 'B3', 'C4',
   'B3', 'A3', 'B3',
   'A3', 'G3', 'A3',
   'B3', 'C4',
   'D4', 'C4', 'B3',
   'A3', 'G3',
   'F3', 'E3', 'A3',
   'G3', 'F3', 'E3'

  ];
  let currentNote = 0;

 
   // Initialize Tone.js synth with improved settings
   const synth = new Tone.Synth({
      oscillator: {
          type: 'sine'
      },
      envelope: {
          attack: 0.001,
          decay: 0.1,
          sustain: 0.3,
          release: 1
      }
  }).toDestination();

  // Add reverb effect
  const reverb = new Tone.Reverb({
      decay: 3,
      wet: 0.8
  }).toDestination();

  synth.connect(reverb);
 

  // Function to play the next note
  function playNextNote() {
      if (currentNote < anthem.length) {
          const note = anthem[currentNote];
          synth.triggerAttackRelease(note, '4n');
          document.getElementById('note-display').textContent = note;
          currentNote++;
      } else {
          document.getElementById('note-display').textContent = 'End';
      }
  }

  // Event listener for keydown
  document.addEventListener('keydown', (event) => {
      // Check if the pressed key is a letter or number
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
       playNextNote();
    }
    
  });

 