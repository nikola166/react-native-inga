
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNIngaSpec.h"

@interface Inga : NSObject <NativeIngaSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Inga : NSObject <RCTBridgeModule>
#endif

@end
