import { Animate } from '../../src';
import { MarkerView, MarkerAreaState, MarkerBaseState } from 'markerjs-live';

export class Experiments {
  private markerView1: MarkerView;
  private currentState: MarkerAreaState = {
    width: 427,
    height: 320,
    markers: [
      {
        fillColor: 'transparent',
        strokeColor: '#EF4444',
        strokeWidth: 3,
        strokeDasharray: '',
        opacity: 1,
        left: 70,
        top: 72,
        width: 124,
        height: 103,
        rotationAngle: 0,
        visualTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        containerTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        typeName: 'FrameMarker',
        state: 'select',
      } as MarkerBaseState,
    ],
  };

  constructor() {
    //Activator.addKey('1234');
  }

  public openMarkerView(target: HTMLImageElement): void {
    this.markerView1 = new MarkerView(target);
    //Style.styleSheetRoot = document.head;

    const stateText = (document.getElementById('markerAreaState') as HTMLTextAreaElement).value;
    if (stateText !== undefined && stateText.trim() !== '') {
      this.currentState = JSON.parse(stateText);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.markerView1.addEventListener('create', (mv) => console.log('created'));
    this.markerView1.addEventListener('close', () => console.log('closed'));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.markerView1.addEventListener('load', (mv) => console.log('loaded'));
    this.markerView1.addEventListener('select', (mv, marker) => console.log(marker));
    this.markerView1.addEventListener('over', (mv, marker) => console.log('over', marker));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.markerView1.addEventListener('pointerdown', (mv, ev, marker) => console.log('down:', ev.clientX, ev.clientY, marker));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.markerView1.addEventListener('pointerup', (mv, ev, marker) => console.log('up:', ev.clientX, ev.clientY, marker));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //this.markerView1.addEventListener('pointermove', (mv, ev, marker) => console.log('move:', ev.clientX, ev.clientY));

    const animate = new Animate();
    this.markerView1.addPlugin(animate);

    this.markerView1.show(this.currentState);
  }

  public closeMarkerView(): void {
    if (this.markerView1) {
      this.markerView1.close();
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.addEventListener('DOMContentLoaded', (event) => {
  const experiments = new Experiments();

  const targetImg = document.getElementById('testImage1') as HTMLImageElement;
  targetImg.addEventListener('click', () =>
    experiments.openMarkerView(targetImg)
  );
  document.getElementById('closeViewButton').addEventListener('click', () => {
    experiments.closeMarkerView();
  });
});
