class Community:

    def __init__(self, communityID, name, members):
        self.communityID = communityID #primary
        self.name = name
        self.members = [] #list of integers that will be userID

    @property
    def getCommunityID(self):
        return self.communityID
    
    @property
    def getName(self):
        return self.name
    
    def __repr__(self):
        return ''
    