# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, StrictInt, constr

class PatchedThirdPartyTrackReference(BaseModel):
    """
    PatchedThirdPartyTrackReference
    """
    id: Optional[StrictInt] = None
    service: Optional[constr(strict=True, max_length=256)] = None
    foreign_id: Optional[constr(strict=True, max_length=256)] = None
    upload_time: Optional[datetime] = None
    status: Optional[constr(strict=True, max_length=256)] = None
    file: Optional[StrictInt] = None
    __properties = ["id", "service", "foreign_id", "upload_time", "status", "file"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> PatchedThirdPartyTrackReference:
        """Create an instance of PatchedThirdPartyTrackReference from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if foreign_id (nullable) is None
        # and __fields_set__ contains the field
        if self.foreign_id is None and "foreign_id" in self.__fields_set__:
            _dict['foreign_id'] = None

        # set to None if upload_time (nullable) is None
        # and __fields_set__ contains the field
        if self.upload_time is None and "upload_time" in self.__fields_set__:
            _dict['upload_time'] = None

        # set to None if status (nullable) is None
        # and __fields_set__ contains the field
        if self.status is None and "status" in self.__fields_set__:
            _dict['status'] = None

        # set to None if file (nullable) is None
        # and __fields_set__ contains the field
        if self.file is None and "file" in self.__fields_set__:
            _dict['file'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedThirdPartyTrackReference:
        """Create an instance of PatchedThirdPartyTrackReference from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedThirdPartyTrackReference.parse_obj(obj)

        _obj = PatchedThirdPartyTrackReference.parse_obj({
            "id": obj.get("id"),
            "service": obj.get("service"),
            "foreign_id": obj.get("foreign_id"),
            "upload_time": obj.get("upload_time"),
            "status": obj.get("status"),
            "file": obj.get("file")
        })
        return _obj

