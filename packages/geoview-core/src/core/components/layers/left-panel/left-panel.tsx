import { Dispatch, SetStateAction } from 'react';
import { useLayersDisplayState, useLayersList } from '@/core/stores/store-interface-and-intial-values/layer-state';
import { LayersList } from './layers-list';
import { AddNewLayer } from './add-new-layer/add-new-layer';

interface LeftPanelProps {
  setIsLayersListPanelVisible: Dispatch<SetStateAction<boolean>>;
}

export function LeftPanel({ setIsLayersListPanelVisible }: LeftPanelProps): JSX.Element {
  // get from the store
  const legendLayers = useLayersList();
  const displayState = useLayersDisplayState();

  if (displayState === 'add') {
    return <AddNewLayer />;
  }
  return (
    <LayersList parentLayerPath="none" layersList={legendLayers} depth={0} setIsLayersListPanelVisible={setIsLayersListPanelVisible} />
  );
}
