#import "IngaView.h"

@implementation IngaView

- (instancetype)init {
    self = [super init];
    if (self) {
        if (@available(iOS 11.0, *)) {
            [self setPreferredScreenEdgesDeferringSystemGestures:UIRectEdgeLeft | UIRectEdgeRight];
        }
    }
    return self;
}

@end

