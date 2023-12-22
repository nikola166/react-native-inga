#import "Inga.h"
#import "IngaView.h"

@implementation Inga
RCT_EXPORT_MODULE()

- (UIView *)view
{
    IngaView * theView;
    theView = [[IngaView alloc] init];
    return theView;
}

@end
